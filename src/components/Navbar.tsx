'use client'

import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold text-blue-700">CrackVerbal</div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/why-us" className="text-gray-700 hover:text-blue-700">
            Why Us
          </Link>
          <Link href="/compare" className="text-gray-700 hover:text-blue-700">
            Compare
          </Link>
          <Link href="/success-stories" className="text-gray-700 hover:text-blue-700">
            Success Stories
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-700">
            FAQ
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="tel:+919019199800" 
            className="hidden md:flex items-center text-gray-700 hover:text-blue-700"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            +91 9019199800
          </a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 