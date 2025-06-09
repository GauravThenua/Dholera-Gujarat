import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is Dholera safe for investment?",
    answer:
      "Yes, Dholera is a government-backed smart city project offering secure, transparent, and future-ready opportunities for investors.",
  },
  {
    question: "When will residents start moving in?",
    answer:
      "Residential occupancy is expected to begin in phases from 2025 onward, as infrastructure milestones are completed.",
  },
  {
    question: "What makes Dholera different from GIFT City?",
    answer:
      "While GIFT City focuses on finance and tech, Dholera is a multi-sector industrial smart city spanning a much larger area with diverse growth sectors.",
  },
  {
    question: "How is Dholera connected to major cities?",
    answer:
      "It’s connected via 6-lane expressways, a proposed metro to Ahmedabad, the Dedicated Freight Corridor, and the upcoming international airport.",
  },
  {
    question: "Can individuals buy residential property in Dholera?",
    answer:
      "Yes, both individuals and businesses can buy property through authorized developers or direct government allocation.",
  },
  {
    question: "What kind of industries are planned in Dholera?",
    answer:
      "Electronics, solar, defense, aerospace, biotech, and advanced manufacturing units are being encouraged here.",
  },
  {
    question: "Are there environmental sustainability measures?",
    answer:
      "Absolutely. Dholera incorporates smart grids, green zones, solar energy, and efficient waste and water management systems.",
  },
  {
    question: "Does Dholera offer incentives for businesses?",
    answer:
      "Yes, including tax exemptions, faster clearances, and world-class plug-and-play infrastructure tailored for industries.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" mx-auto px-6 py-20 bg-gradient-to-br from-indigo-300 via-sky-100 to-gray-200 ">
      <h2 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-12">
        ❓ Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-white via-gray-50 to-white border border-gray-200 rounded-2xl shadow-md transition hover:shadow-lg duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 px-6 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-base md:text-lg">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
