import React, { useState } from 'react';
import { Nav } from '../Navbar';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';
import ChatBot  from './ChatBot';

export default function HelpPage() {
  
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showForm,setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);


   const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, formData);
      setStatus('Thank you! Feedback sent.');
    } catch (err) {
      setStatus('Error sending feedback.');
    }
    setLoading(false);
  };
  return (
    
   <div className='min-h-screen bg-gray-900 text-white'>
      <Nav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-4xl  text-center font-bold mb-10">Help & Support</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
         <div className='space-y-4'>
            <FAQItem
  question="How do I know what’s included in the package?"
  answer="Each package clearly lists inclusions such as accommodations, meals, transport, and activities. Flights are included only if specified."
/>
<FAQItem
  question="Can I customize my tour package?"
  answer="Yes, many of our tours are customizable. You can contact our support team to tailor destinations, duration, or activities."
/>
<FAQItem
  question="What is the best time to book a tour?"
  answer="We recommend booking 2–3 months in advance, especially during peak seasons, to secure the best rates and availability."
/>
<FAQItem
  question="What payment methods do you accept?"
  answer="We accept credit/debit cards, UPI, net banking, and select wallets. International customers can use PayPal or Stripe."
/>
<FAQItem
  question="What is your cancellation policy?"
  answer="Cancellations made 7+ days before departure are fully refundable. Less than 7 days may incur charges. Please refer to the cancellation terms on the package."
/>
<FAQItem
  question="Are tours safe for solo travelers or families?"
  answer="Absolutely. We ensure verified partners, trusted guides, and safe accommodations for all traveler types."
/>
<FAQItem
  question="Do I need travel insurance?"
  answer="While not mandatory, we highly recommend travel insurance for international trips to cover emergencies, delays, or lost luggage."
/>
<FAQItem
  question="Do I need a visa for international destinations?"
  answer="Visa requirements vary. We assist with guidance and documentation."
/>
<FAQItem
  question="Will I have a guide throughout the tour?"
  answer="Most tours include a local guide for key attractions."
/>
<FAQItem
  question="Can I get support while traveling?"
  answer="Yes, our 24/7 support team is available by call or chat for any assistance during your trip."
/>

         </div>
        </section>


        <section>
          <h2 className="text-2xl font-semibold mb-4">Send Us Feedback</h2>
          <p className="mb-4">We value your suggestions. Help us improve your experience!</p>
          <button className="bg-[#FF5722] text-white px-6 py-2 rounded hover:bg-[#e64a19] transition" onClick={() => setShowForm(true)}>
            Send Feedback
          </button>
          {showForm && (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
              
                <input
                  type="text"
                  placeholder='Enter your name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                />
              </div>
              <div>
               
                <input
                  type="email"
                  name="email"
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                />
              </div>
              <div>
               
                <textarea
                  name="message"
                  placeholder='Enter your feedback'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF5722] text-white px-6 py-2 rounded hover:bg-[#e64a19] transition hover:cursor-pointer"
                disabled={loading} 
              >
                {loading? "sending..." :"Submit Feedback"}
              </button>
            </form>
          )}
        </section>
      </div>
     <div><ChatBot/></div>
   </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-black flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-sm text-gray-700 bg-white">
          {answer}
        </div>
      )}
    </div>
   
  );
}