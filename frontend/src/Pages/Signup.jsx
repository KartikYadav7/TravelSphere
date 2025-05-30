import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"
const PasswordInput = ({
  className,
  onChange,
  placeholder = "Enter your Password",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="">
      <input
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className}`}
        required
      />
      <button
        type="button"
        className=" absolute right-4 top-12 transform -translate-y-1/2"
        onClick={() => {
          setShowPassword((prev) => !prev);
        }}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
}; 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setDisabled(false);
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
       userName:name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-500">
        Sign Up
      </h2>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block  mb-2 text-sm font-medium text-red-500"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            type="text"
            id="Name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2  text-sm font-medium  text-red-500"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="relative mb-4">
          <label
            className="block mb-2 text-sm font-medium text-red-500"
            htmlFor="password"
          >
            Password
          </label>
          <PasswordInput
            className="w-full px-4 py-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="relative mb-2">
          <label
            className="block mb-2 text-sm font-medium text-red-500"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <PasswordInput
            className="w-full px-4 py-2 border rounded "
            placeholder="Confirm Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
         <p className="text-red-500 text-center h-2.5 mb-2 text-sm">{error}</p>
        <Button type="submit" className="w-full " text={disabled? "Registering......": "SignUp"} 
        disabled={disabled}/>
      </form>

      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
  
};

export {PasswordInput}
export default SignUp;

