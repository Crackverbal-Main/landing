'use client'

import { CalculatorIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const SmartTools = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Smart Tools for Your GMAT Journey
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Use our interactive tools to make informed decisions and track your progress
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GMAT Score Calculator */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <CalculatorIcon className="h-12 w-12 text-blue-100" />
              <h3 className="text-xl font-semibold ml-4">GMAT Score Calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Slide your section scores and see your predicted total instantly.
            </p>
            <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
              Try the Calculator
            </button>
          </div>

          {/* GMAT vs GRE Comparison */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <ChartBarIcon className="h-12 w-12 text-blue-100" />
              <h3 className="text-xl font-semibold ml-4">GMAT vs GRE Comparison</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Compare based on your profile in 30 seconds to choose the right test.
            </p>
            <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
              Compare Tests
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartTools 