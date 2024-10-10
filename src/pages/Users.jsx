import React, { useState } from "react";
import { Useritem } from "../data/UserData"; // Import the JSON file
import Button from "../components/Buttons/Button";
import ButtonLoading from "../components/Buttons/ButtonLoading";

export const Users = () => {
  const [users, setUsers] = useState(Useritem);
  const [deletingIndex, setDeletingIndex] = useState(null);

  // Handle Block/Unblock User
  const handleBlockUser = (index) => {
    const updatedUsers = [...users];
    // Toggle between 'blocked' and 'active' status
    updatedUsers[index].status =
      updatedUsers[index].status === "blocked" ? "active" : "blocked";
    setUsers(updatedUsers);
  };

  // Handle Delete User
  const handleDeleteUser = (index) => {
    setDeletingIndex(index); // Set loading state for current delete index
    setTimeout(() => {
      const updatedUser = users.filter((_, i) => i !== index);
      setUsers(updatedUser);
      setDeletingIndex(null); // Reset loading state after deletion
    }, 2000); // Simulate async delete with timeout (you can replace this with an API call)
  };

  return (
    <>
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-6">Users</h2>
        <div>
          <div className=" overflow-x-auto ">
            
            {/* Set height and enable vertical scroll */}
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-slate-200 text-left text-sm font-semibold text-[#828282] border-b border-gray-200">
                  <th className="px-6 py-4">Company logo</th>
                  <th className="px-2 py-4">Home Town</th>
                  <th className="px-2 py-4">Date of Birth</th>
                  <th className="px-2 py-4">School Name</th>
                  <th className="px-2 py-4">School Graduation Year</th>
                  <th className="p-4">Sports</th>
                  <th className="px-2 py-4">Sports Position</th>
                  <th className="px-2 py-4">Interests</th>
                  <th className="px-2 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={`text-sm text-black ${
                      user.status === "blocked" ? "bg-gray-300" : "bg-white"
                    } ${
                      index !== users.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <td className="px-4">
                      <div className="flex items-center">
                        <img
                          src={user.logo}
                          alt="logo"
                          className="object-cover w-20 h-16 rounded-full"
                        />
                        <div className="flex flex-col  ml-2">
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-[12px] text-black whitespace-normal">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">{user.homeTown}</td>
                    <td className="px-4 py-2">{user.dob}</td>
                    <td className="px-4 py-2">{user.schoolName}</td>
                    <td className="px-4 py-2 text-center">
                      {user.graduationYear}
                    </td>
                    <td className="px-4 py-2">{user.sports}</td>
                    <td className="px-4 py-2">{user.position}</td>
                    <td className="px-4 py-2">{user.interests}</td>
                    <td className="px-4 py-2">
  <div className="flex items-center"> {/* space-x-2 adds a small gap between buttons */}
    <button
      className={`${
        user.status === "blocked" ? "bg-green-500" : "bg-sky-400"
      } text-white px-2 py-1 rounded`}
      onClick={() => handleBlockUser(index)}
    >
      {user.status === "blocked" ? "Unblock" : "Block"}
    </button>
    
    {deletingIndex === index ? (
      <div className="w-[6rem] flex justify-center items-center"> {/* Loader same size as button */}
        <ButtonLoading customClasses="!bg-orange-900 !py-2 !px-4 !text-sm" />
      </div>
    ) : (
      <div className="w-[6rem] flex justify-center items-center"> {/* Button same size as loader */}
        <Button
          value="Delete"
          onClick={() => handleDeleteUser(index)}
          customClass="!bg-red-500 !py-2 !px-2 !w-full"
        />
      </div>
    )}
  </div>
</td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
