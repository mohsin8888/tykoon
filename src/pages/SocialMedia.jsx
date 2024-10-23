import React, { useState } from "react";
import Facebookicon from "../assets/images/Facebookicon.svg";
import Instagram from "../assets/images/Instagram.svg";
import { MdUploadFile } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const SocialMedia = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // Track whether we are editing
  const [editIndex, setEditIndex] = useState(null); // Track index of the item being edited
  const [socialPlatforms, setSocialPlatforms] = useState([
    { name: "Facebook", icon: Facebookicon, iconName: "Facebookicon.svg" },
    { name: "Instagram", icon: Instagram, iconName: "Instagram.svg" },
  ]);
  const [newPlatform, setNewPlatform] = useState("");
  const [newIcon, setNewIcon] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(""); // New state to store file name

  // Handle the Add button click
  const handleAddClick = () => {
    setShowAddCard(true);
    setIsEdit(false); // It's for adding, not editing
    setNewPlatform("");
    setNewIcon(null);
    setUploadedFileName(""); // Reset file name on opening modal
  };

  // Handle saving new platform or editing existing one
  const handleSave = () => {
    if (newPlatform && newIcon) {
      if (isEdit) {
        // Update the existing platform
        const updatedPlatforms = [...socialPlatforms];
        updatedPlatforms[editIndex] = { name: newPlatform, icon: newIcon, iconName: uploadedFileName };
        setSocialPlatforms(updatedPlatforms);
        setIsEdit(false); // Reset edit mode
        setEditIndex(null); // Reset edit index
        toast.success("Platform updated successfully!");
      } else {
        // Add new platform
        setSocialPlatforms([
          ...socialPlatforms,
          { name: newPlatform, icon: newIcon, iconName: uploadedFileName },
        ]);
        toast.success("Platform added successfully!"); // Show toast notification
      }
      setShowAddCard(false); // Close modal
    } else {
      toast.error("Please enter platform name and icon."); // Error toast if fields are empty
    }
  };

  // Handle Remove functionality
  const handleRemove = (index) => {
    const updatedPlatforms = socialPlatforms.filter((_, i) => i !== index);
    setSocialPlatforms(updatedPlatforms);
    toast.info("Platform removed successfully.");
  };

  // Handle Edit button click
  const handleEdit = (index) => {
    setShowAddCard(true);
    setIsEdit(true);
    setEditIndex(index); // Store the index of the platform being edited
    setNewPlatform(socialPlatforms[index].name); // Set current name in input field
    setNewIcon(socialPlatforms[index].icon); // Set current icon
    setUploadedFileName(socialPlatforms[index].iconName); // Display previously uploaded file name
  };

  // Handle file upload and store the file name
  const handleFileUpload = (e) => {
   
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      setNewIcon(URL.createObjectURL(file)); // Set new icon
      setUploadedFileName(file.name); // Store the file name
    }
  };

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className=" w-full sm:[70%] md:w-[60%] lg:w-[50%]  bg-white px-4 py-6">
          <h2 className="text-[2rem] font-bold mb-4">Social Media Details</h2>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Added Social Platforms</h3>
            <button
              onClick={handleAddClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-8 rounded"
            >
              Add
            </button>
          </div>

          <div className="space-y-4">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-8 h-8 "
                  />
                  <span className="text-lg font-medium">{platform.name}</span>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAddCard && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] sm:w-[40%] p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {isEdit ? "Edit Social Platform" : "Add Social Platform"}
            </h2>
            <label className="block text-sm font-medium mb-2">
              Social Media Name
            </label>
            <input
              type="text"
              value={newPlatform}
              onChange={(e) => setNewPlatform(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Enter platform name"
            />
            <label className="block text-sm font-medium mb-2">
              Upload Icon
            </label>
            <div className="w-full h-24 border-2 border-dashed border-orange-500 bg-orange-50 flex items-center px-4 py-2 rounded-lg justify-between cursor-pointer mb-4">
              <label
                htmlFor="upload"
                className="flex items-center cursor-pointer"
              >
                <MdUploadFile className="text-orange-500 w-10 h-10 mr-4" />
                <div>
                  <p className="text-orange-500 font-medium">
                    {uploadedFileName || "Click to upload."}
                  </p>
                  <p className="text-gray-400 text-sm">Upload your logo</p>
                </div>
              </label>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="upload"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSave}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
              >
                {isEdit ? "Update" : "Add"}
              </button>
              <button
                onClick={() => setShowAddCard(false)}
                className="bg-black text-white font-bold py-2 px-6 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container for notifications */}
      <ToastContainer />
    </>
  );
};
