import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/navData";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for toggling
import logo from "../assets/images/logo.svg";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Toggle Button for smaller screens */}
      <button
        className="lg:hidden fixed top-6 left-4 z-50 text-orange-500"
        onClick={handleToggle}
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] lg:w-[18%] bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 border-r border-gray-200`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="px-4 py-4">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">Admin Panel</span>
            </div>
            <nav className="mt-16 space-y-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(!isOpen)} // This should be inside onClick
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "text-black"
                    }`
                  }
                >
                  {/* Add class to control the icon size */}
                  <span className="text-xl text-gray-500">{item.icon}</span>
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 flex bg-black opacity-50 lg:hidden z-30"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};
