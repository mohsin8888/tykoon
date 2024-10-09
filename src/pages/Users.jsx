import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Useritem } from "../data/UserData"; // Import the JSON file

export const Users = () => {
  const [users, setUsers] = useState(Useritem);
  const [clickedRowIndex, setClickedRowIndex] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState("below"); // Default dropdown position
  const tableRef = useRef(null); // Reference for the scrollable container

  // Handle Block User
  const handleBlockUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = "blocked"; // Assuming you have a 'status' field
    setUsers(updatedUsers);
    setClickedRowIndex(null); // Close the menu
  };

  // Handle Unblock User
  const handleUnblockUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = "active"; // Assuming 'active' status for unblocked
    setUsers(updatedUsers);
    setClickedRowIndex(null); // Close the menu
  };

  // Handle Delete User
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setClickedRowIndex(null); // Close the menu
  };

  const handleMenuClick = (index, rowRef) => {
    setClickedRowIndex(index);

    const tableBottom = tableRef.current.getBoundingClientRect().bottom;
    const rowBottom = rowRef.getBoundingClientRect().bottom;

    // If the row is near the bottom of the container, show the menu above the button
    if (rowBottom + 50 > tableBottom) { // Adjust the number if the dropdown is taller
      setDropdownPosition("above");
    } else {
      setDropdownPosition("below");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-6">Users</h2>
        <div ref={tableRef}>
          <div className="h-[440px] sm:h-[435px] overflow-y-auto overflow-x-auto"> {/* Set height and enable vertical scroll */}
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
                  <th className="px-2 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={`text-sm text-black ${
                      user.status === "blocked" ? "bg-gray-300" : "bg-white"
                    } ${index !== users.length - 1 ? "border-b border-gray-200" : ""}`}
                    style={{ position: 'relative' }} // Set position relative to each row
                    ref={(ref) => (user.rowRef = ref)} // Assign each row to its reference
                  >
                    <td className="p-2">
                      <div className="flex items-center">
                        <img src={user.logo} alt="logo" className="object-cover w-20 h-16 rounded-full" />
                        <div className="flex flex-col min-w-[130px] ml-2">
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-[12px] text-black whitespace-normal">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">{user.homeTown}</td>
                    <td className="px-4 py-2">{user.dob}</td>
                    <td className="px-4 py-2">{user.schoolName}</td>
                    <td className="px-4 py-2 text-center">{user.graduationYear}</td>
                    <td className="px-4 py-2">{user.sports}</td>
                    <td className="px-4 py-2">{user.position}</td>
                    <td className="px-4 py-2">{user.interests}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-gray-600 focus:outline-none"
                        onClick={() => handleMenuClick(index, user.rowRef)}
                      >
                        <FaEllipsisV />
                      </button>

                      {clickedRowIndex === index && (
                        <div
                          className={`absolute ${
                            dropdownPosition === "below" ? "mt-2" : "-mt-32"
                          } right-0 w-[6rem] bg-white border rounded-md shadow-lg z-10`}
                          onMouseLeave={() => setClickedRowIndex(null)}
                        >
                          <div className="py-1">
                            <button
                              className="block w-full px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleBlockUser(index)}
                            >
                              Block
                            </button>
                            <button
                              className="block w-full px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleUnblockUser(index)}
                            >
                              Unblock
                            </button>
                            <button
                              className="block w-full px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleDeleteUser(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
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
