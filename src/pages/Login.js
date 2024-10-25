import React, { useState } from "react";
import headerlogo from "../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Actions/FirstAction";
import { useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import ButtonLoading from "../components/Buttons/ButtonLoading"; // Ensure you have this component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const response = await dispatch(loginUser(formData));
      
      localStorage.setItem("accessToken", response.data.accessToken);
     
      navigate("/");
     
     // toast("Login successful!");
      setFormData({
        email: "",
        password: "",
        remember_me: false,
      });
    } catch (error) {
      toast.error("Error logging in. Please try again.");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-300 to-black text-white">
  <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl border border-gray-800">
    <div className="text-center mb-6">
      <img src={headerlogo} alt="Logo" className="h-12 mx-auto mb-4" />
      <h2 className="text-[1.5rem] font-bold text-yellow-400">Welcome Back</h2>
      <p className="text-sm text-gray-400">Sign in to access exclusive content</p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email-address" className="block text-base font-semibold mb-1 text-gray-300">Email Address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="block w-full px-4 py-2 text-gray-200 bg-gray-800 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <label htmlFor="password" className="block text-base font-semibold mb-1 text-gray-300">Password</label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Your Password"
          className="block w-full px-4 py-2 text-gray-200 bg-gray-800 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={toggleShowPassword} className="absolute inset-y-0 right-4 top-7 text-yellow-400">
          {showPassword ? <BiShow /> : <BiHide />}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center text-xs text-gray-400">
          <input
            type="checkbox"
            name="remember_me"
            checked={formData.remember_me}
            onChange={handleChange}
            className="bg-gray-800 rounded-full border-gray-600 focus:ring-yellow-400"
          />
          <span className="ml-2">Remember me</span>
        </label>
        <a href="/reset" className="text-xs font-medium text-yellow-400 hover:underline">Forgot password?</a>
      </div>
      <div>
        {loading ? (
          <ButtonLoading customClass="bg-gray-700" />
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-base font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Login
          </button>
        )}
      </div>
      <div className="text-center mt-4">
        <a href="/signup" className="font-semibold text-yellow-400 hover:underline">Create an Account</a>
      </div>
    </form>
  </div>
</div>







    </>
  );
};
