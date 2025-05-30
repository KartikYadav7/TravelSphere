import React, {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from '../Components/Button'
import { PasswordInput } from "./Signup";
import { useAuth } from "../../context/AuthContext.jsx";

const Login = () => {
 
  const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true)
    setError("");

    try {
      const success = await login(email, password
      );
       if (success?.role === "admin") {
        navigate("/admin"); // redirect admin to admin dashboard
      } else {
        navigate("/"); // redirect normal users to homepage or user dashboard
      }
       
    }
    catch (error) {
      setError(error.message || "Check Creditionals");
    }
    finally{
      setDisabled(false)
    }
  };
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow-md ">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-500">Login</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-red-500" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="relative mb-2">
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
                <p className="text-red-500 text-center text-sm  h-2.5 mb-2">{error}</p>
        <Button type="submit" text={disabled ? "Logged In......." : "Login"}
        className="w-full"
        disabled={disabled}
        />
      </form>
      <div className="mt-4 text-center">
        <a href="/resetpassword" className=" text-red-600 hover:underline">Forgot Password?</a>
      </div>
      <div className="mt-2 text-center">
        <p>Don't have an account? <a href="/signup" className="text-red-600 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;


