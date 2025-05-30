import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import PackageManager from './PackageManager';
import BookingManager from './BookingManager';
import AuthContext from '../../../context/AuthContext';
const AdminDashboard = () => {
  const navigate = useNavigate();
  const{ user,setUser} = useAuth();
 const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <div className="p-6 space-y-10 ">
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
     <button className="bg-orange-500 text-white px-5 py-2 rounded-xl cursor-pointer text-sm hover:bg-orange-600" onClick={logout}>Logout</button>
      </div>
      <PackageManager/>
      <BookingManager />
    </div>
  );
};

export default AdminDashboard;
