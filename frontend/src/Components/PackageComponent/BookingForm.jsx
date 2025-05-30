import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Button from '../Button'
import { useNavigate, } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../../../context/AuthContext';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


 function Input({ placeholder,value, onChange, required ,name ,type = "text"}) {
    return <input type={type} placeholder={placeholder}  required={required} name={name} value={value} onChange={onChange} className="w-full border border-gray-300 p-2 rounded" />;
  }
  
const BookingForm = ({ userId, tourPackageId }) => {
  const navigate = useNavigate();
  
    const {user}=useAuth();

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    numberOfPeople: '',
    note: ''
  });
 useEffect(() => {
  if (user) {
    setFormData(prev => ({
      ...prev,
      name: user.userName ,
      email: user.userEmail ,
    }));
  }
}, [user]);
    

 
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!user) {
    navigate('/login');
    return;
  }
     
     try {
      const bookingPayload = {
        user: userId,
        tourPackage: tourPackageId,
        travelDate: new Date(formData.travelDate),
        numberOfPeople: parseInt(formData.numberOfPeople),
        contactInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        note: formData.note,
      };
     
// console.log('Booking payload:', payload);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/create-checkout-session`, 
          bookingPayload,{headers:{Authorization:`${user.token}`}});

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: response.data.id });
    } catch (error) {
      console.error('Stripe checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
  };
    return (
      <div className="  bg-white max-w-7xl p-6 shadow-lg rounded-md h-fit w-1/2 mt-20 mx-auto">
        <h3 className="text-xl font-bold text-[#343434] mb-4">Book This Tour</h3>
         
        <form className="space-y-3 text-sm h-fit" onSubmit={handleSubmit}>
          <Input placeholder="Name" value={formData.name} onChange={handleChange} name="name" required/>
          <Input placeholder="Email" name="email" value={formData.email} onChange={handleChange} type="email" required/>
          {/* <Input placeholder="Confirm Email" /> */}
          <Input placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
          <Input placeholder="Date of Travelling" type="date" value={formData.travelDate} onChange={handleChange} required name="travelDate"/>
          <Input placeholder="Number of ticket" value={formData.numberOfPeople} onChange={handleChange} required name="numberOfPeople"/>
          <textarea placeholder="Additional Note" className="w-full border border-gray-300 p-2 rounded" value={formData.note} onChange={handleChange} name="note"/>
  
          
          <Button type="submit" text="Book Now" className="w-full"/>
        </form>
      </div>
    );
  }
  
 
export default BookingForm;