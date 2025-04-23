'use client'

import { BookOpenIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const TailoredPlans = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Tailored Plans</h2>
        <p className="text-gray-600 text-center mb-12">
          Customized learning pathways designed for your specific needs and goals
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First-Time Test Taker Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <BookOpenIcon className="h-8 w-8 text-blue-700" />
              <h3 className="text-xl font-semibold ml-4">First-Time Test Taker</h3>
            </div>
            <p className="text-gray-600 mb-6">New to the GMAT?</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">1</span>
                Master every section with bite-sized lessons
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">2</span>
                Weekly checkpoints keep you on track
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">3</span>
                Unlimited mentor chat for doubts
              </li>
            </ul>
            <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
              Show Me the Plan
            </button>
          </div>

          {/* Retaker Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <ArrowPathIcon className="h-8 w-8 text-blue-700" />
              <h3 className="text-xl font-semibold ml-4">Retaker</h3>
            </div>
            <p className="text-gray-600 mb-6">Taking another swing?</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">1</span>
                Deep-dive error analytics pin-point score leaks
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">2</span>
                Score-rebound curriculum in 4-6 weeks
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-4">3</span>
                Mindset reset—turn nerves into numbers
              </li>
            </ul>
            <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
              Fix My Score
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TailoredPlans 