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

  return <h2>✅ Thank you! Your booking was successful.</h2>;
};

export default PaymentSuccess;
