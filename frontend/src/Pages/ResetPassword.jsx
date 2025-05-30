import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Components/Button"
import { PasswordInput } from "./Signup";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      // API call to reset password endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/resetpassword/${token}`,
        { newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Password reset successfully. Redirecting to login...");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(message || "Error resetting password.");
      }
    } catch (error) {
    if(  error.response && error.response.data && error.response.data.message
    )
      setMessage(error.response.data.message || "Error resetting password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">

    <div
      className=" w-full max-w-md p-8 space-y-2 bg-white shadow-lg rounded border"
     
    >
      <h2 className="text-2xl mb-4 font-bold text-center text-red-500">Reset Your Password</h2>
      <form onSubmit={handleSubmit}
      className="space-y-4">
         <div className="relative mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-red-500"
                  htmlFor="password"
                >
                  Password
                </label>
                <PasswordInput
                  className="w-full px-4 py-2 border rounded"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-red-500"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <PasswordInput
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Confirm Your Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
          <p className="text-sm h-2.5 mb-0">{message}</p>
          <Button
            type="submit"
            className="w-full"
           text="Reset Password"
          />
         
      </form>
      
    </div>
    </div>
  );
};

export default ResetPassword;
