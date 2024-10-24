import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../Redux/Actions/FirstAction'; // Make sure you have this action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {
    const Navegate = useNavigate();
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(changePassword(newPassword));
      toast.success('Password changed successfully');
      Navegate('/login')
    } catch (error) {
      toast.error('Error changing password');
      console.error('Error changing password:', error);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Change Password</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <div className="relative">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <BiHide className="w-5 h-5" /> : <BiShow className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
