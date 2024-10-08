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

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users Partnerships this user</h2>
        <div className="overflow-y-auto overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full text-[#828282] border-b border-gray-200 py-4">
                <th className="px-4 py-4 text-left">Company logo</th>
                <th className="px-4 py-2 text-left">Partnership Title</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Phone Number</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {partnershipitem.map((item, index) => (
                <tr
                  key={index}
                  className={`px-4 py-2 ${index !== partnershipitem.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <td className="px-4 py-2">
                    <img src={item.companyLogo} alt="Logo" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="px-4 py-2">{item.partnershipTitle}</td>
                  <td className="px-4 py-2">{item.userName}</td>
                  <td className="px-4 py-2">{item.phoneNumber}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        item.status
                          ? 'text-green-600 bg-green-100' // Status true, Completed
                          : 'text-red-600 bg-red-100'     // Status false, In Progress or Failed
                      }`}
                    >
                      {item.status ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                  <td className="px-4 py-2">
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
