'use client'

import { CheckIcon } from '@heroicons/react/24/solid'

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Master the GMAT with Personalized Strategy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              99th-percentile techniques • Flexible learning • Proven results
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <CheckIcon className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-gray-700">30k+ Students Trained</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <CheckIcon className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-gray-700">Mentored by GMAT Experts</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <CheckIcon className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-gray-700">Instant Study Plan</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="italic text-gray-700">"GMAT success is a learnable skill."</p>
                <p className="text-gray-600">— Arun Jagannathan</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Fast-Track Plan
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 flex items-center justify-center"
              >
                Continue
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 