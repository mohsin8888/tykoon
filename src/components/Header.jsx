import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";

export const Header = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <>
      <div className="w-[80%] sm:w-[100%] mx-auto">
        <div className="flex justify-between items-center p-8 sm:p-4 bg-white border-b border-gray-200 sm:ml-16 lg:ml-60 xl:ml-70">
          <div className="flex items-center">
            <p className="text-base sm:text-lg font-semibold">
              Hello, Abdullah
            </p>
          </div>
          <div className="flex items-center">
            {/* Notification Icon */}
            <MdNotifications className="w-6 h-6 text-gray-600 mr-4" />
            {/* Profile Section */}
            <img
              src="profile-image-url.jpg"
              alt="User Profile"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="text-sm">
              <p className="font-semibold hidden sm:block">Abdullah</p>
              <p className="text-gray-500 hidden sm:block">
                abdullah@gmail.com
              </p>{" "}
              {/* Hidden on small screens */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
