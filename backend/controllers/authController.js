import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import transporter from "../middlewares/mailMiddleware.js";


const FRONTEND_URL = process.env.FRONTEND_URL;

export const register = async (req, res) => {
  const { userName, email, password,} = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email Already Exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ userName, email, password: hashedPassword, });
    await user.save();

    return res.status(200).json({ message: "Registration Successful" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "All fields are required" });

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email Doesn't Exist" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ userId: user._id, userEmail: user.email,userRole:user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({ token, userId: user._id, userName: user.userName, userEmail: user.email, userRole: user.role });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const resetPasswordLink = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "10m" });
    const resetLink = `${FRONTEND_URL}/resetpassword/${token}`;

    // Send email
    const mailOptions = {
      from: `${process.env.EMAIL_USER}`,
      to: `${user.email}`,
      subject: "Password Reset Request",
      text: `You requested a password reset.\n\nClick the link to reset your password:\n${resetLink}\n\nIf you did not request this, please ignore this email.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending reset email." });
      }
      return res.json({ message: "Password reset link sent to your email." });
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error." });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ message: "Invalid or Expired token." });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return res.json({ message: "Your password has been updated successfully." });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(400).json({ message: "Try Again with a New ResetLink" });
    }
    return res.status(500).json({ message: "Internal Server Error." });
  }
};
