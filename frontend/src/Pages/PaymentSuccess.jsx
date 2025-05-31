import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { user } = useAuth();

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/confirm-payment`, {
          sessionId,
        },{headers:{Authorization:`${user.token}`}});

        if (res.data.success) {
          console.log('✅ Booking confirmed!');
        }
      } catch (error) {
        console.error('❌ Failed to confirm booking:', error);
      }
    };

    if (sessionId) confirmPayment();
  }, [sessionId]);

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        <div
          className="text-6xl text-green-500 mb-4 select-none"
          aria-label="Success checkmark"
        >
          ✓
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your booking. We’ve received your payment and confirmed your reservation.
        </p>
        <a href="/"
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
