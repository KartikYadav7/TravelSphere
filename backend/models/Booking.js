import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tourPackage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
  },
  contactInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  travelDate: {
    type: Date,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
    min: 1,
  },
  note: {
    type: String,
    default: '',
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'booked', 'cancelled','error','inProgress'],
    default: 'inProgress',
  },
 payment: {
    amount: {
      type: Number, 
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed','refunded','partially_refunded', 'cancelled', 'Error'],
      default: 'pending',
    },
  },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
