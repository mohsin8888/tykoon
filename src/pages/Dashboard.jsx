import React from "react";
import { Usercard } from "../components/Card/Usercard";
import usericon from "../assets/images/usericon.svg";
import Partnershipicon from "../assets/images/Partnershipicon.svg";
import Accepticon from "../assets/images/acceptpartnershipicon.svg";
import { FaEllipsisV } from 'react-icons/fa';
import { partnershipitem } from '../data/partnershipsData'; // Import your data

export const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
        <Usercard Heading="Total Users" Text="200" Icon={usericon} />
        <Usercard
          Heading="Total Partnerships"
          Text="150"
          Icon={Partnershipicon}
        />
        <Usercard Heading="Accepted Partnerships" Text="30" Icon={Accepticon} />
      </div>

      <div className="bg-white  rounded-lg shadow-sm p-6">
        <div className=" text-2xl font-semibold text-gray-800 mb-4">
        <h2>Users Partnerships this user</h2>
        </div>
        <div className="overflow-y-auto overflow-x-auto ">
          <table className="min-w-[98%] mx-auto bg-white p-12">
            <thead>
              <tr className="w-full text-[#828282] border-b  border-gray-200  ">
                <th className="px-4 py-4 border-r-2 text-center ">Company logo</th>
                <th className="px-4 py-2  border-r-2  text-center">Partnership Title</th>
                <th className="px-4 py-2  border-r-2 text-center">User Name</th>
                <th className="px-4 py-2  border-r-2 text-center">Phone Number</th>
                <th className="px-4 py-2  border-r-2 text-center">Status</th>
                <th className="px-4 py-2"> Action</th>
              </tr>
            </thead>
            <tbody>
              {partnershipitem.map((item, index) => (
                <tr
                  key={index}
                  className={`${index !== partnershipitem.length - 1 ? 'border-b border-gray-' : ' '}`}
                >
                  <td className="px-4 py-4 border-r-2 text-center">
                    <img src={item.companyLogo} alt="Logo" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="px-4 py-2 border-r-2 text-center">{item.partnershipTitle}</td>
                  <td className="px-4 py-2 border-r-2 text-center">{item.userName}</td>
                  <td className="px-4 py-2 border-r-2 text-center">{item.phoneNumber}</td>
                  <td className="px-4 py- border-r-2 text-center">
                    <span
                      className={`px-3 py-2 text-xs font-semibold rounded-full ${
                        item.status
                          ? 'text-green-600 bg-green-100' // Status true, Completed
                          : 'text-red-600 bg-red-100'     // Status false, In Progress or Failed
                      }`}
                    >
                      {item.status ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="text-gray-600 focus:outline-none">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
