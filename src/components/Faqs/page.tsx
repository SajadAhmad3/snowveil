"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is the best time to visit Kashmir?",
    answer:
      "The best time to visit Kashmir is from March to August when the weather is pleasant and the natural beauty is at its peak.",
  },
  {
    question: "What are the top attractions in Kashmir?",
    answer:
      "Top attractions include Srinagar’s Dal Lake, Gulmarg, Pahalgam, and the beautiful gardens of Shalimar Bagh and Nishat Bagh.",
  },
  {
    question: "Is it safe to travel to Kashmir?",
    answer:
      "Travel safety can vary. It’s best to check current travel advisories and consult local guides to ensure a safe trip.",
  },
];

const Faqs: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] py-10 lg:py-20 mb-10 lg:mb-20 px-4">
      <div className="w-full max-w-[1300px] mx-auto">
        <h2 className="text-xxl md:text-xxxl lg:text-4xl font-bold text-white font-modicaMedium mb-5 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-4 lg:mx-0">
          {faqData.map((faq, index) => (
            <FAQItemComponent key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FAQItemComponentProps {
  index: number;
}

const FAQItemComponent: React.FC<FAQItemComponentProps> = ({ index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const { question, answer } = faqData[index];
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <button
        className={`w-full px-4 py-3 text-left flex items-center justify-between ${
          isOpen ? "text-green-600" : "text-black"
        } transition-colors duration-300`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-green-600" />
        ) : (
          <ChevronDown className="text-gray-800" />
        )}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[500px] px-4 py-3 bg-white border-t border-gray-200"
            : "max-h-0"
        }`}
      >
        {isOpen && <p className="text-gray-600">{answer}</p>}
      </div>
    </div>
  );
};

export default Faqs;
