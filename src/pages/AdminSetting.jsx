import React, { useState } from "react";
import { FaCamera } from 'react-icons/fa';

export const AdminSetting = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Function to handle image change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      {/* Profile Image Container */}
      <div className="relative">
        {profileImage ? (
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profileImage}
            alt="Profile"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <FaCamera className="text-gray-400 text-3xl" />
          </div>
        )}
        {/* Camera Icon Overlay */}
        <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-200">
          <FaCamera className="text-gray-600" />
          <input 
            type="file" 
            className="hidden" 
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Input Fields */}
      <div className="mt-12 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-4  md:space-y-0">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none "
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button className="px-20 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Save
          </button>
          <button className="px-20 py-1 bg-black text-white rounded-md hover:bg-gray-800">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
