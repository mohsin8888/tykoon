import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyOtp } from '../Redux/Actions/FirstAction'; // Make sure you have this action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        localStorage.setItem("otp", otp);
        // const storedOtp = localStorage.getItem("otp");
        // console.log("Stored OTP:", storedOtp);
     const response = await dispatch(verifyOtp(otp));
     navigate("/newpassword");
      toast.success('OTP verified successfully');
    
    } catch (error) {
      toast.error('Error verifying OTP');
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Verify OTP</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
