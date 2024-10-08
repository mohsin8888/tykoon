import React, { useState, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { addpartnershipitem } from "../data/addpartnershipsData"; // assuming the JSON file is in the same directory

export const Partnership = () => {
  const [partnerships, setPartnerships] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [newPartnership, setNewPartnership] = useState({
    title: "",
    companyName: "",
    deliverables: "",
    platform: "",
    amount: "",
    companyLogo: null,
  });

  useEffect(() => {
    setPartnerships(addpartnershipitem); // Assuming fetching data
  }, []);

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
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[70%] h-[80%] sm:h-[70%]  ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add Partnership
      </h2>
      <div>
        <label className="block mb-2">Partnership Title</label>
        <input
          type="text"
          name="title" required
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


      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Partnership
        </h2>
        <div className="overflow-y-auto overflow-x-auto w-full">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="text-left text-[#828282] text-lg border-b  border-gray-200">
                <th className="px-4 py-4 ">Company logo</th>
                <th className="px-4 py- ">Title</th>
                <th className="px-4 py-2 text-gray-600 whitespace-normal">
                  Partnership <br /> Company Name
                </th>
                <th className="px-4 py-2 text-gray-600">Deliverables</th>
                <th className="px-4 py-2 text-gray-600">Platform</th>
                <th className="px-4 py-2 text-gray-600">Amount</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {partnerships.map((partnership, index) => (
                 <tr
                 key={index}
                 className={`px-4 py-2 ${index !== partnerships.length - 1 ? 'border-b border-gray-200' : ''}`}
               >
                  <td className="px-4 py-2">
                    {typeof partnership.companyLogo === "string" ? (
                      // Display if it's a URL string or image path
                      <img
                        src={partnership.companyLogo}
                        alt="Logo"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : partnership.companyLogo instanceof File ? (
                      // Display if it's a File object
                      <img
                        src={URL.createObjectURL(partnership.companyLogo)}
                        alt="Uploaded Logo"
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      // Fallback to default logo if no logo is provided
                      <img
                        src="/default-logo.png"
                        alt="Default Logo"
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </td>

                  <td className="px-4 py-2">{partnership.title}</td>
                  <td className="px-4 py-2">{partnership.companyName}</td>
                  <td className="px-4 py-2">{partnership.deliverables}</td>
                  <td className="px-4 py-2">{partnership.platform}</td>
                  <td className="px-4 py-2">{partnership.amount}</td>
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
