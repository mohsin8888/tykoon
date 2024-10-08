import React, { useState } from "react";

export const TermConditions = () => {
  // State to track edit mode and content
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.

    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`
  );

  // Toggle between edit and view modes
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  // Handle save functionality
  const handleSaveClick = () => {
    // Handle the save logic here (e.g., API request to save the updated content)
    setIsEditable(false);
    // alert("Terms & Conditions saved successfully!"); // For demonstration
  };

  // Handle content change when editing
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="w-[100%] mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Terms & Conditions Header */}
      <h2 className="text-[2rem] font-bold mb-4">Terms & Conditions</h2>
      <p className="text-gray-600 mb-4">Updated June 2024</p>

      {/* Scrollable Content Section */}
      <div className="h-[300px] overflow-y-auto border p-4 bg-gray-50">
        {isEditable ? (
          <textarea
            className="w-full h-full bg-gray-50 text-gray-700 p-2"
            value={content}
            onChange={handleContentChange}
          />
        ) : (
          <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
        )}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-start gap-2 mt-4">
        {/* Edit Button */}
        <button
          className="bg-black text-white px-12 py-2 rounded-md"
          onClick={handleEditClick}
        >
          {isEditable ? "Cancel" : "Edit"}
        </button>

        {/* Save Button */}
        <button
          className={`px-12 py-2 rounded-md ${
            isEditable ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"
          }`}
          onClick={handleSaveClick}
          disabled={!isEditable}
        >
          Save
        </button>
      </div>
    </div>
  );
};
