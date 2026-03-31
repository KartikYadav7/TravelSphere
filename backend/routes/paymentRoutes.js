import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import express from 'express'
const router = express.Router()
import  Package  from '../models/Package.js';
import Booking from '../models/Booking.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

router.post('/create-checkout-session',verifyToken('user'), express.json(), async (req, res) => {
  const { user, tourPackage, contactInfo, travelDate, numberOfPeople, note } = req.body;
   if (!user || !tourPackage || !travelDate || !numberOfPeople || !contactInfo?.name || !contactInfo?.email || !contactInfo?.phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }


  try {
    // 1. Fetch the selected tour package
    const tour = await Package.findById(tourPackage);
    if (!tour) {
      return res.status(404).json({ error: 'Tour package not found' });
    }

    // 2. Calculate total amount
    const pricePerTicketInCents = tour.price * 100; // 

    // 3. Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: tour.title,
            description: tour.description,
          },
          unit_amount: pricePerTicketInCents,
          
        },
        quantity: numberOfPeople,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
      metadata: {
        userId: user,
        tourPackageId: tourPackage,
        name: contactInfo.name,
        email: contactInfo.email,
        travelDate,
        numberOfPeople,
        note,
      },
    });

  const booking = new Booking({
      user,
      tourPackage,
      contactInfo,
      travelDate,
      numberOfPeople,
      note,
      stripeSessionId: session.id,
      status: 'inProgress',
      payment: {
        amount: tour.price * numberOfPeople,
        status: 'pending',
      },
    });

    await booking.save();

    
    res.json({ id: session.id });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

router.post('/confirm-payment',verifyToken('user') , express.json(), async (req, res) => {
  const { sessionId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      const booking = await Booking.findOne({ stripeSessionId: sessionId });

      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }

      booking.bookingStatus = 'booked';
      booking.payment.status = 'completed';
      await booking.save();

      res.json({ success: true, message: 'Booking confirmed.' });
    } else {
      res.status(400).json({ error: 'Payment not completed.' });
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;
