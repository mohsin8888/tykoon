import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export const Chat = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[80%]">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to Tykonn</h2>
          <form autoComplete="off">
            <div className="mb-4">
              <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <input 
                  type="email" 
                  id="user_email" 
                  name="user_email"  // Changed name attribute
                  placeholder="Enter your email" 
                  className="w-full focus:outline-none" 
                  autoComplete="off"
                />
                <FiMail className="text-gray-400 ml-2" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="user_password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  id="user_password" 
                  name="user_password"  // Changed name attribute
                  placeholder="Enter your password" 
                  className="w-full focus:outline-none" 
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 focus:outline-none"
                >
                  {passwordVisible ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-indigo-600 text-white w-[60%] py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-800">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
}
