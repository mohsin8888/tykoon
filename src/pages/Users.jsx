import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import {Useritem} from "../data/UserData"; // Import the JSON file

export const Users = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
        <div className="overflow-y-auto overflow-x-auto w-full">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="text-left text-sm font-semibold text-[#828282] border-b border-gray-200">
                <th className="p-4">Company logo</th>
                <th className="p-4">Home Town</th>
                <th className="p-4">Date of Birth</th>
                <th className="p-4">School Name</th>
                <th className="p-4">
                  School Graduation <br /> Year
                </th>
                <th className="p-4">Sports</th>
                <th className="p-4">Sports Position</th>
                <th className="p-4">Interests</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Useritem.map((user, index) => (
                <tr key={index} className="text-sm text-black border-b border-gray-200">
                  <td className="p-2">
                    <div className="flex items-center">
                      <img src={user.logo} alt="logo" className="w-full rounded-full" />
                      <div className="flex flex-col min-w-[150px] ml-4">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-[12px] text-black whitespace-normal">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{user.homeTown}</td>
                  <td className="p-4">{user.dob}</td>
                  <td className="p-4">{user.schoolName}</td>
                  <td className="p-4">{user.graduationYear}</td>
                  <td className="p-4">{user.sports}</td>
                  <td className="p-4">{user.position}</td>
                  <td className="p-4">{user.interests}</td>
                  <td className="px-4 py-2 text-right">
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
