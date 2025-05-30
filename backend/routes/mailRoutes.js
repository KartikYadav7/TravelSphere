// controllers/offerController.js
import express from 'express';
import User from '../models/user.js';
import Subscription from '../models/subscription.js';
const router = express.Router();
import transporter from "../middlewares/mailMiddleware.js";
import { verifyToken } from '../middlewares/authMiddleware.js';

router.post('/subscribe',verifyToken(), async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'You are already subscribed!' });
    }

    const user = await User.findOne({ email });

    const newSubscriber = new Subscription({
      email,
      user: user ? user._id : undefined, 
    });

    await newSubscriber.save();

    const mailOptions = {
      from: `${process.env.EMAIL_USER}`,
      to:   `${user.email}`,
      subject: 'Thanks for Subscribing to TravelSphere!',
      html: `<h3>Welcome to TravelSphere!</h3><p>You’ll now receive amazing travel deals and offers directly to your inbox.</p>`,
    };

     transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: "Error sending Subscription email." });
      }
      return res.json({ message: "Subscription Email Sent Successfully." });
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/customTour", verifyToken('user'),async (req, res) => {
 
 const {
  userId,
  personalDetails,
  tourType,
  cities,
  tripDetails,
} = req.body;
  const { fullName, email, phone, contactMethod } = personalDetails;
  const destination = cities.map(city => city.name).join(", ");
  const preferences = cities.flatMap(city => city.activities).join(", ");
   const cityDetailsFormatted = cities.map((city, index) => {
    return `City ${index + 1}:
    - Name: ${city.name}
    - Days: ${city.days}
    - Activities: ${city.activities.join(", ") || "None"}`;
  }).join("\n\n");
  console.log("Custom Tour Request:", req.body);
  try {
    // Mail to user
    const userMailOptions = {
    
      from: `"TravelSphere" <${process.env.EMAIL_USER}>`,
      to: `${email}`,
      subject: "Your Custom Tour Request Has Been Received",
      text: `Hello ${fullName},\n\nThank you for submitting your custom tour request to ${destination}.\n\nHere are the details we received:\n\n${cityDetailsFormatted}\n\nTrip Preferences: ${preferences}\nBudget: ${tripDetails.budgetRange}\nContact: ${phone} via ${contactMethod}\n\nOur team will get back to you shortly.\n\nBest regards,\nTravelSphere Team`,
    };

    // Mail to admin
    const adminMailOptions = {
      from: `"TravelSphere" <${email}>`,
      to: `${process.env.EMAIL_USER}`,
      subject: "New Custom Tour Request Received",
      text: `A new custom tour request has been submitted:\n\n- User ID: ${userId}
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Preferred Contact Method: ${contactMethod}
- Tour Type: ${tourType}
- Number of People: ${tripDetails.peoples}
- Budget: ${tripDetails.budgetRange}
- Special Requests: ${tripDetails.specialRequests || "None"}
- Destination(s): ${destination}
- Preferences: ${preferences}

City Breakdown:
${cityDetailsFormatted}`
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    res.status(200).json({ message: "Request received and emails sent successfully." });
  } catch (error) {
    console.error("Failed to send tour request emails:", error);
    res.status(500).json({ message: "Email sending failed", error: error.message });
  }
});

router.post('/feedback', async (req, res) => {
  const { name, email, message } = req.body;
const mailToAdmin = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Feedback from ${name}`,
    html: `
      <h3>New Feedback Received</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message}</p>
    `
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Your Feedback!',
    html: `
      <p>Hi ${name},</p>
      <p>Thanks a lot for your feedback. We truly appreciate it!</p>
      <p>- Team TravelSphere</p>
    `
  };

  try {
      await Promise.all([
      transporter.sendMail(mailToUser),
      transporter.sendMail(mailToAdmin),
    ]);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

export default router;