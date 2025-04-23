'use client'

import { useEffect, useRef } from 'react'

const schools = [
  { name: 'Tepper', logo: '/school-logos/tepper.png' },
  { name: 'Columbia Business School', logo: '/school-logos/columbia.png' },
  { name: 'Berkeley Haas', logo: '/school-logos/berkeley.png' },
  { name: 'Harvard', logo: '/school-logos/harvard.png' },
  { name: 'HEC Paris', logo: '/school-logos/hec.png' },
  { name: 'IIMA', logo: '/school-logos/iima.png' }
]

const SchoolLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl text-cyan-500 mb-12">
          Our students have got admits to
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {schools.map((school) => (
            <div 
              key={school.name} 
              className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center"
            >
              {/* Placeholder for school logos */}
              <div className="text-gray-400 text-sm">{school.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-blue-700 text-xl font-semibold">
            95% score-improvement success rate
          </p>
        </div>
      </div>
    </section>
  )
}

export default SchoolLogos 