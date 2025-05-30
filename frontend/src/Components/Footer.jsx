import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../context/AuthContext";
const Footer = () => {
  const navigate = useNavigate()
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (user && user.userEmail) {
      setEmail(user.userEmail);
    }
  }, [user]);
  const handleSubmit = async()=>{

    if (!user) navigate('/login');
    setDisabled(true);
    setError("");
    setSuccess("");
    try{
      const res = await axios.post(
  `${import.meta.env.VITE_BACKEND_URL}/api/subscribe`,
  { email }, // body
  {
    headers: {
      Authorization: `${user.token}`, 
    },
  }
);
      
      if (res.status === 200) {
        setSuccess("🎉 You're now subscribed! Check your inbox.");
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setSuccess("You're already subscribed to TravelSphere updates.");
      } else {
        setError("Failed to subscribe. Please try again later.");
      }
      console.error("Error subscribing to newsletter:", err);
    }

    setDisabled(false);
  };
  return (
    <>
      <footer className="bg-white border-t border-gray-200 px-6 md:px-24 pt-20 pb-10 text-[#212529]">
        <div className="grid grid-cols-1  md:flex gap-4 justify-evenly items-start">
          <div>
            <h3 className="font-bold text-xl mb-2">TravelSphere</h3>
            <p className="text-sm text-gray-500 mb-4">
              TravelSphere helps companies <br /> manage tourism easily.
            </p>
            <div className="flex gap-3 text-sm text-[#FD644F]">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebookMessenger />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Admin</li>
             <li>About Us</li>
              <li>Support</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Destinations</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Maldives</li>
              <li>Shimla</li>
              <li>Goa</li>
              <li>Himalayas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                placeholder="Your email address"
                className="w-full p-2 rounded-md border border-gray-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-[#FD644F] to-[#FF8871] text-white font-semibold rounded-md hover:cursor-pointer hover:shadow" onClick={handleSubmit} disabled={disabled}>
               {disabled ? "Sending" : "Subscribe"}
              </button>
            </div>
            {error ? (
        <p className="text-red-500 mt-2">{error.message}</p>
      ) : success ? (
        <p className="text-green-600 mt-2">{success}</p>
      ) : (
        <p className="text-xs text-gray-500 mt-2">
          *We’ll send you updates for your better tour packages.
        </p>
      )}
           
          </div>
        </div>
        <hr className=" width-2/3 my-8" />
        <div className="text-center text-sm md:text-base text-gray-500 mt-4">
          Copyright © Travel 2025. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
