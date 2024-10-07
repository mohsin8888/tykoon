// src/components/FaqList.js

import React from 'react';
import FaqItem from '../pages/Faq';

const FaqList = () => {
  const faqs = [
    {
      question: 'If you could be any age for the rest of your life, which would you choose?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
    
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
