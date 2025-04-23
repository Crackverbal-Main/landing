'use client'

import { 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon, 
  BeakerIcon,
  AcademicCapIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BookOpenIcon,
    title: 'Relatable Teaching',
    description: 'We translate GMAT jargon into real-world analogies.'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '"Ah-Ha" Mentors',
    description: 'Industry veterans make tricky concepts click in minutes.'
  },
  {
    icon: BeakerIcon,
    title: 'AI-Powered Insights',
    description: 'Algorithm spots your patterns; humans give you the fix.'
  },
  {
    icon: AcademicCapIcon,
    title: '99th-Percentile Mindset',
    description: 'Train to think like elite scorers, not just memorize tricks.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'MBA-Ready Roadmap',
    description: 'Test prep + essays + interviews—one seamless journey.'
  }
]

const WhyCrackVerbal = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why CrackVerbal?</h2>
        <p className="text-gray-600 text-center mb-12">
          Our unique approach has helped thousands of professionals achieve their dream scores.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyCrackVerbal