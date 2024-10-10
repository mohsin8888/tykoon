import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { addpartnershipitem } from "../data/addpartnershipsData";
export const Partnership = () => {
  const [partnerships, setPartnerships] = useState(addpartnershipitem);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [clickedRowIndex, setClickedRowIndex] = useState(null); // Track which row's menu is clicked
  const [dropdownPosition, setDropdownPosition] = useState("below"); // Default dropdown position
  const tableRef = useRef(null); // Reference for the scrollable container
  const rowRefs = useRef([]); // Array to store references for each row

  const [newPartnership, setNewPartnership] = useState({
    title: "",
    companyName: "",
    deliverables: "",
    platform: "",
    amount: "",
    companyLogo: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPartnership({ ...newPartnership, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setNewPartnership({ ...newPartnership, companyLogo: e.target.files[0] });
  };

  // Handle form submission
  const handleAddPartnership = () => {
    const newPartnerships = [...partnerships, newPartnership];
    setPartnerships(newPartnerships);
    setShowModal(false);
  };

  // Handle row delete
  const handleDeletePartnership = (index) => {
    const updatedPartnerships = partnerships.filter((_, i) => i !== index);
    setPartnerships(updatedPartnerships);
    setClickedRowIndex(null); // Close the menu after delete
    rowRefs.current = rowRefs.current.slice(0, updatedPartnerships.length); // Update refs length
  };

  // Handle menu click
  const handleMenuClick = (index) => {
    setClickedRowIndex(index);

    const tableBottom = tableRef.current.getBoundingClientRect().bottom;
    const rowBottom = rowRefs.current[index]?.getBoundingClientRect().bottom;

    // If the row is near the bottom of the container, show the menu above the button
    if (rowBottom + 20 > tableBottom) {
      setDropdownPosition("above");
    } else {
      setDropdownPosition("below");
    }
  };

  return (
    <>
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none"
        >
          Add Partnership
        </button>
      </div>

      {/* Modal for adding a partnership */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center mx-auto md:ml-40 items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[70%] h-[80%] sm:h-[70%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Add Partnership
            </h2>
            <div>
              <label className="block mb-2">Partnership Title</label>
              <input
                type="text"
                name="title"
                value={newPartnership.title}
                onChange={handleInputChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2">Partnership Company Name</label>
              <input
                type="text"
                name="companyName"
                value={newPartnership.companyName}
                onChange={handleInputChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2">Deliverables</label>
              <textarea
                name="deliverables"
                value={newPartnership.deliverables}
                onChange={handleInputChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2">Platform</label>
              <input
                type="text"
                name="platform"
                value={newPartnership.platform}
                onChange={handleInputChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2">Amount</label>
              <input
                type="number"
                name="amount"
                value={newPartnership.amount}
                onChange={handleInputChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2">Add Company Logo</label>
              <input
                type="file"
                name="companyLogo"
                onChange={handleFileChange}
                className="border w-full p-2 mb-4 rounded"
              />

              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleAddPartnership}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                  Add Partnership
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 p-6">
          Partnership
        </h2>
        <div
          ref={tableRef}
          className="h-[430px] sm:h-96 overflow-y-auto overflow-x-auto"
        >
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-slate-200 text-[#828282] text-lg border-b border-gray-200">
                <th className="px-2 py-4">Company logo</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2 text-gray-600 whitespace-normal">
                  Partnership <br /> Company Name
                </th>
                <th className="px-4 py-2 text-gray-600">Deliverables</th>
                <th className="px-4 py-2 text-gray-600">Platform</th>
                <th className="px-4 py-2 text-gray-600">Amount</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partnerships.map((partnership, index) => (
                <tr
                  key={index}
                  className={`px-4 py-2 ${
                    index !== partnerships.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                  ref={(ref) => (rowRefs.current[index] = ref)} // Assign ref to each row
                  style={{ position: "relative" }}
                >
                  <td className="px-4 py-2">
                    {typeof partnership.companyLogo === "string" ? (
                      <img
                        src={partnership.companyLogo}
                        alt="Logo"
                        className="w-16 h-16 rounded-full"
                      />
                    ) : partnership.companyLogo instanceof File ? (
                      <img
                        src={URL.createObjectURL(partnership.companyLogo)}
                        alt="Uploaded Logo"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <img
                        src="/default-logo.png"
                        alt="Default Logo"
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </td>

                  <td className="px-4 py-2 text-center">{partnership.title}</td>
                  <td className="px-4 py-2 text-center">
                    {partnership.companyName}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {partnership.deliverables}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {partnership.platform}
                  </td>
                  <td className="px-4 py-2 text-center">{partnership.amount}</td>
                  <td
                    className="px-4 py-2 text-center"
                    onMouseLeave={() => setClickedRowIndex(null)}
                  >
                    <div>
                      <button
                        className="text-gray-600 focus:outline-none p-0"
                        onClick={() => handleMenuClick(index)}
                      >
                        <FaEllipsisV size={20} />
                      </button>

                      {clickedRowIndex === index && (
                        <div
                          className={`absolute ${
                            dropdownPosition === "below" ? "mt-2" : "-mt-16"
                          } right-16 w-[6rem] bg-white border rounded-md shadow-lg z-10`}
                          onMouseLeave={() => setClickedRowIndex(null)}
                        >
                          <div className="py-1">
                            <button
                              className="block w-full px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => handleDeletePartnership(index)}
                            >
                              Delete
                            </button>
                          </div>
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
    </>
  );
};
