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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <img src={headerlogo} alt="Logo" className="h-10 mx-auto" />
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 top-7 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="text-gray-600 focus:outline-none focus:text-gray-900"
                  >
                    {showPassword ? (
                      <BiShow className="w-5 h-5" />
                    ) : (
                      <BiHide className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={formData.remember_me}
                  onChange={handleChange}
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="/reset"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              {loading ? (
                <ButtonLoading customClass=" bg-gray-500" />
              ) : (
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={loading} // Disable button when loading
                >
                  Login
                </button>
              )}
            </div>
            <div className="text-center mt-4">
              <a
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create an Account 
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
