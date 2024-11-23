// SocialMedia.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocialMedia, addSocialMedia, uploadFile, deleteSocialMedia } from "../Redux/Actions/FirstAction";
import { MdUploadFile } from "react-icons/md";

export const SocialMedia = () => {
  const dispatch = useDispatch();
  const socialPlatforms = useSelector((state) => state.social.platforms);

  const [showAddCard, setShowAddCard] = useState(false);
  const [newPlatform, setNewPlatform] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(fetchSocialMedia());
  }, [dispatch]);

  // Handle file selection
  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  // Handle save action with sequential API calls
 // Handle save action with sequential API calls
 const handleSave = async () => {
  if (newPlatform && file) {
    try {
      // Upload file and check if file path is returned
      const uploadedFileData = await dispatch(uploadFile(file));
     // console.log("Uploaded file datacc:", uploadedFileData);

      if (!uploadedFileData || !uploadedFileData.data) {
        throw new Error("File upload failed, no file path returned.");
      }

      // Add social media entry with correct file path
      const response = await dispatch(addSocialMedia({ 
        socialmedianame: newPlatform, 
        iconFile: uploadedFileData.data
      }));

      if (!response || response.error) {
        throw new Error(response.error || "Failed to add social media.");
      }

      // Reset form
      setShowAddCard(false);
      setNewPlatform("");
      setUploadedFileName("");
      setFile(null);
    } catch (error) {
      console.error("Error in adding platform:", error);
      alert(error.message);
    }
  } else {
    alert("Please provide both platform name and file");
  }
};



  const platformsDataz = socialPlatforms && socialPlatforms.data ? socialPlatforms.data : [];

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] bg-white px-4 py-6">
        <h2 className="text-[2rem] font-bold mb-4">Social Media Details</h2>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Added Social Platforms</h3>
          <button
            onClick={() => setShowAddCard(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-8 rounded"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {platformsDataz.length > 0 ? (
            platformsDataz.map((platform) => (
              <div
                key={platform.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={`http://localhost:5000/${platform.iconFile}`}
                    alt="Platform Icon"
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-medium text-black">
                    {platform.socialmedianame}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => dispatch(deleteSocialMedia(platform._id))}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No social media platforms available.</p>
          )}
        </div>
      </div>

      {showAddCard && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] sm:w-[40%] p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Social Platform</h2>

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
              <label htmlFor="upload" className="flex items-center cursor-pointer">
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
                Add
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
    </div>
  );
};
