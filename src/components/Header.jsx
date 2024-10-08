import React from 'react'
import { MdNotifications } from 'react-icons/md';
export const Header = () => {
  return (
    <>
    <div className=''>
     <div className="  flex justify-between items-center  p-8 sm:p-4 bg-white  border-b border-gray-200 sm:ml-60">
      <div className="flex items-center ">
        <p className=" text-sm sm:text-lg font-semibold">Hello, Abdullah</p>
      </div>
      <div className="flex items-center">
        {/* Notification Icon */}
        <MdNotifications className="w-6 h-6 text-gray-600 mr-4" />
        {/* Profile Section */}
        <img src="profile-image-url.jpg" alt="User Profile" className="w-8 h-8 rounded-full mr-2" />
        <div className="text-sm">
          <p className="font-semibold">Abdullah</p>
          <p className="text-gray-500">abdullah@gmail.com</p>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}
