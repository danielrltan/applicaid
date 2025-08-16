import React, { useState } from 'react'

export default function MainDashboard({ onSignOut, userName = "User", onNavigateToSelectUniversity, onNavigateToGradesTracker, onNavigateToCompareUniversities, onNavigateToEssayAssistance, onNavigateToPersonalityInterests }) {
  const [chatbotOpen, setChatbotOpen] = useState(true)
  const [chatMessage, setChatMessage] = useState('')

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      console.log('Chat message:', chatMessage)
      setChatMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-purple-600 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-2" style={fredokaStyle}>
            Welcome, <span className="underline">{userName}</span>!
          </h1>
        </div>
        <button 
          onClick={onSignOut}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          style={fredokaStyle}
        >
          Sign out
        </button>
      </div>

      {/* Main Content - Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-7xl mx-auto">
        {/* Select University Programs */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
          onClick={onNavigateToSelectUniversity}
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3" style={fredokaStyle}>
            Select University Programs
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-400 rounded-t-full border-2 border-purple-600 relative">
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Documents */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3" style={fredokaStyle}>
            Upload Documents
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="flex space-x-1">
              <div className="w-8 h-10 bg-gray-300 rounded transform rotate-12"></div>
              <div className="w-8 h-10 bg-purple-200 rounded transform -rotate-6"></div>
            </div>
          </div>
        </div>

        {/* Grades & Requirements Tracker */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
          onClick={onNavigateToGradesTracker}
        >
          <h3 className="text-lg font-bold text-purple-600 mb-2" style={fredokaStyle}>
            Grades & Requirements Tracker
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-base">
              A+
            </div>
          </div>
        </div>

        {/* Personality & Interests Profile */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
          onClick={onNavigateToPersonalityInterests}
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3" style={fredokaStyle}>
            Personality & Interests Profile
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="relative">
              <div className="w-14 h-14 border-4 border-purple-300 rounded-full"></div>
              <div className="w-10 h-10 border-4 border-blue-400 rounded-full absolute top-2 left-2"></div>
              <div className="w-5 h-5 bg-purple-600 rounded-full absolute top-4.5 left-4.5"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Compare Universities & Programs */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
          onClick={onNavigateToCompareUniversities}
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3" style={fredokaStyle}>
            Compare Universities & Programs
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-purple-400 rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-5 left-3 w-2 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Essay Assistance */}
        <div 
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer flex flex-col justify-between"
          style={{ width: '400px', height: '320px', minWidth: '400px', minHeight: '320px' }}
          onClick={onNavigateToEssayAssistance}
        >
          <h3 className="text-xl font-bold text-purple-600 mb-3" style={fredokaStyle}>
            Essay Assistance
          </h3>
          <div className="flex justify-center flex-1 items-center">
            <div className="w-14 h-12 bg-purple-400 rounded-full transform rotate-12 relative">
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Widget */}
      {chatbotOpen && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl w-80">
          {/* Chatbot Header */}
          <div className="bg-purple-600 text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
            <h4 className="font-semibold" style={fredokaStyle}>Chatbot</h4>
            <button 
              onClick={() => setChatbotOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Chat Input */}
          <div className="p-4">
            <form onSubmit={handleChatSubmit} className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                style={fredokaStyle}
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                style={fredokaStyle}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button (when closed) */}
      {!chatbotOpen && (
        <button
          onClick={() => setChatbotOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  )
}
