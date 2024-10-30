import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../Redux/Actions/FirstAction'; // Ensure you have this action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await dispatch(resetPassword(email));
      if (response && response.data) {
        localStorage.setItem("encryptOpts", response.data.otp);
        localStorage.setItem("email", response.data.email);
        navigate("/verify");
        toast.success('Password reset link sent to your email');
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      toast.error('Error sending password reset link');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Reset Password</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
