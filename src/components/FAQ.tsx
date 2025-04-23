'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: 'GMAT prep formats & pricing',
    answer: 'We offer flexible formats including online self-paced, live online classes, and private tutoring. Pricing starts from ₹24,999.'
  },
  {
    question: 'How your approach is different',
    answer: 'Our approach combines AI-powered analytics with human mentorship, focusing on understanding rather than memorization.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Get answers to the most common questions about our programs
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white p-6 rounded-lg shadow-sm flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg shadow-sm mt-px">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ