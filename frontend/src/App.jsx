// App.jsx
import React from "react";
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "./Components/HomeComponents/Home";
import About from "./Components/AboutComponents/About";
import Package from "./Components/PackageComponent/Package";
import HelpPage from "./Components/Help/HelpPage";
import ChatBot from "./Components/Help/chatbot";
import Login from "./Pages/login";
import SignUp from "./Pages/Signup";
import ResetPasswordModal from "./Pages/ResetPasswordModal";
import ResetPassword from "./Pages/ResetPassword";
import PaymentSuccess from "./Pages/PaymentSuccess";
import PaymentCancel from "./Pages/PaymentCancel";
import Trip from "./Components/UpcomingPackages/Trip.jsx";
import Upcoming from "./Components/UpcomingPackages/Upcoming.jsx";
import PackageView from "./Components/PackageComponent/PackageView.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
function App() {
  return (
    <BrowserRouter>
   <AuthProvider>
   
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resetpassword" element={<ResetPasswordModal />} />
      <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Package/>} />
         <Route path="/help"  element={
            <>
              <HelpPage />
              <ChatBot />
            </>
          }/>
        <Route path="/upcomingpackages" element={<Upcoming/>} />
        <Route path="/create-trip" element={<Trip/>} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
<Route path="/payment-cancel" element={<PaymentCancel />} />
         <Route path="/package/:title" element={<PackageView />} />
  <Route path="/admin" element={<AdminDashboard />} />
       

      </Routes>

    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
