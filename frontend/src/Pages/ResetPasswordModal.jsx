import React, { useState ,useEffect} from "react";
import axios from "axios";
import Button from "../Components/Button";
import { useAuth } from "../../context/AuthContext";

export default function PasswordResetRequest() {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const {user}=useAuth();
  

  useEffect(() => {
     if (user &&  user.userEmail) {
       setEmail(user.userEmail);
     }
   }, [user]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/resetPasswordLink`,
        { email }
       

      );
      setSubmitted(true)
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      
      setDisabled(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded border  w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-4">
          Reset Password
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            If that email is registered, a reset link has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-red-500">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <p className="text-red-500 text-center text-sm  h-2.5 mb-2">
              {error}
            </p>
            <Button
              type="submit"
              disabled={disabled}
              text={disabled ? "Sending....." : "Send Reset Link"}
              className="w-full"
            />
          </form>
        )}
      </div>
    </div>
  );
}
