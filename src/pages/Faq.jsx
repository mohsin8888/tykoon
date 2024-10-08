import React, { useState } from "react";
import {FAQItem} from "../components/FAQItem"
const FAQ = () => {
  const [faqData, setFaqData] = useState([
    {
      question:
        "If you could be any age for the rest of your life, which would you choose?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      question:
        "If you could be any age for the rest of your life, which would you choose?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    // Add more questions here...
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const  handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (updatedQuestion, updatedAnswer) => {
    const updatedFaqs = faqData.map((faq, index) =>
      index === editingIndex
        ? { ...faq, question: updatedQuestion, answer: updatedAnswer }
        : faq
    );
    setFaqData(updatedFaqs);
    setEditingIndex(null); // Exit editing mode
  };

  const handleAddQuestion = () => {
    if (newQuestion && newAnswer) {
      setFaqData([...faqData, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion("");
      setNewAnswer("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-[100%]  p-8 bg-white h-full">
      <h1 className="text-[2rem] font-bold mb-4">FAQs</h1>
      <div className="flex justify-between items-center mb-6">
        <p className="text-[#828282] text-lg">Updated June 2024</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isEditing={editingIndex === index}
          onEdit={() => handleEdit(index)}
          onSave={handleSave}
          
        />
      ))}
       
      {/* Modal for adding a new question */}
      {isModalOpen && (
        <div className="  fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 lg:pl-44 px-2">
          <div className="bg-white p-6 rounded shadow-lg lg:w-[40%]  ">
            <h2 className="text-[1.3rem] font-bold mb-4">Add Questions</h2>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full mb-4"
              placeholder="Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full mb-5"
              placeholder="Answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
                onClick={handleAddQuestion}
              >
                Add
              </button>
              <button
                className="bg-b text-white px-6 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
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

export default FAQ;
