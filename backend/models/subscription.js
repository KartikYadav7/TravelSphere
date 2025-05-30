import mongoose from 'mongoose';
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicates
  },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // <-- This creates the reference
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model('Subscriber', subscriberSchema);
