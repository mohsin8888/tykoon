import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillEdit } from 'react-icons/ai';

const FAQItem = ({ question, answer, onEdit, isEditing, onSave }) => {
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

const FAQ = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'If you could be any age for the rest of your life, which would you choose?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    },
    // Add more questions here...
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleEdit = (index) => {
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
      setNewQuestion('');
      setNewAnswer('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
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
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add Questions</h2>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full mb-4"
              placeholder="Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full mb-4"
              placeholder="Answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                onClick={handleAddQuestion}
              >
                Add
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded"
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
