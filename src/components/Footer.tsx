'use client'

import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">CrackVerbal</div>
            <p className="text-gray-400 text-sm">
              India's premier GMAT prep and MBA admissions consulting company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gmat-preparation" className="text-gray-400 hover:text-white">
                  GMAT Preparation
                </Link>
              </li>
              <li>
                <Link href="/mba-admissions" className="text-gray-400 hover:text-white">
                  MBA Admissions
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-white">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/free-practice-test" className="text-gray-400 hover:text-white">
                  Free Practice Test
                </Link>
              </li>
              <li>
                <Link href="/gmat-study-material" className="text-gray-400 hover:text-white">
                  GMAT Study Material
                </Link>
              </li>
              <li>
                <Link href="/mba-application-tips" className="text-gray-400 hover:text-white">
                  MBA Application Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:+918884544443" className="text-gray-400 hover:text-white">
                  +91 888 454 4443
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a href="mailto:info@crackverbal.com" className="text-gray-400 hover:text-white">
                  info@crackverbal.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-1" />
                <span className="text-gray-400">
                  Crackverbal Learning Pvt Ltd,<br />
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 