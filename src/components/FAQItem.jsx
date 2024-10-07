import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillEdit } from "react-icons/ai";

export const FAQItem = ({ question, answer, onEdit, isEditing, onSave }) => {
    const [editQuestion, setEditQuestion] = useState(question);
    const [editAnswer, setEditAnswer] = useState(answer);
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <div
          className="flex justify-between items-center py-4 cursor-pointer"
          onClick={() => !isEditing && setIsOpen(!isOpen)}
        >
          <div className="flex items-center w-full">
            <div className="flex items-center justify-center mr-4">
              {isOpen ? (
                <AiOutlineMinus className="text-white bg-red-600 rounded-lg h-[1rem] w-[1rem]" />
              ) : (
                <AiOutlinePlus className="text-white bg-black rounded-lg h-[1rem] w-[1rem]" />
              )}
            </div>
            {isEditing ? (
              <input
                className="border border-gray-300 rounded p-1 text-sm w-full mr-2"
                value={editQuestion}
                onChange={(e) => setEditQuestion(e.target.value)}
                placeholder="Edit question"
              />
            ) : (
              <p className="font-semibold w-full">{question}</p>
            )}
          </div>
          {isEditing ? (
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm ml-2"
              onClick={() => onSave(editQuestion, editAnswer)}
            >
              Save
            </button>
          ) : (
            <AiFillEdit
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={onEdit}
            />
          )}
        </div>
        {isOpen && (
          <div className="pl-6 pb-4 text-gray-600">
            {isEditing ? (
              <textarea
                className="border border-gray-300 rounded p-2 text-sm w-full"
                value={editAnswer}
                onChange={(e) => setEditAnswer(e.target.value)}
                placeholder="Edit answer"
              />
            ) : (
              <p>{answer}</p>
            )}
          </div>
        )}
      </div>
    );
  };