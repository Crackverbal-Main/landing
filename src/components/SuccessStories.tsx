'use client'

import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Dr. Pratik',
    score: '685',
    image: '/testimonials/pratik.jpg',
    text: '"As a working professional, I needed an efficient prep plan. CrackVerbal delivered with their focused approach – 685!"'
  },
  {
    name: 'Akshit',
    score: '715',
    image: '/testimonials/akshit.jpg',
    text: '"CrackVerbal helped me achieve a 715 score, which was more than I hoped for. The personalized approach made all the difference."'
  },
  {
    name: 'Akshat',
    score: '705',
    image: '/testimonials/akshat.jpg',
    text: '"From struggling with Quant to scoring a 705 – the mentors really understand how to address each student\'s weaknesses."'
  }
]

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold">Success Stories</h2>
        </div>
        
        <p className="text-center text-gray-600 mb-12">
          People from all walks of life have hit their dream GMAT scores –<br />
          here's how the right mentorship made the difference.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">
                      {testimonial.score}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
              <button className="text-blue-700 mt-4 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button className="w-10 h-10 rounded-full border-2 border-blue-700 flex items-center justify-center">
            <span className="sr-only">Previous</span>
            ←
          </button>
          <button className="w-10 h-10 rounded-full border-2 border-blue-700 flex items-center justify-center">
            <span className="sr-only">Next</span>
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories 