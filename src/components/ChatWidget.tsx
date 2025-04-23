'use client'

import { useState } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#9DC45F] text-white rounded-full p-4 shadow-lg hover:bg-[#8AB54E] transition-colors flex items-center space-x-2"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <span>Chat with our expert</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[360px] h-[480px] flex flex-col">
          <div className="bg-[#9DC45F] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with our expert</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 p-4 bg-gray-50">
            <div className="text-center text-gray-500 mt-4">
              Our experts will be with you shortly...
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatWidget 