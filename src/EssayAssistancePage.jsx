import React, { useState } from 'react'

export default function EssayAssistancePage({ onBackToDashboard }) {
  const [essayText, setEssayText] = useState('')
  const [botFeedback, setBotFeedback] = useState('Your essay looks great so far! One thing I would suggest is adding a more creative approach to your sentences, as admission officers at Queen\'s University look for what makes a candidate unique. **live typing**')

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  const handleSmartCheck = () => {
    // Simulate SmartCheck functionality
    console.log('SmartCheck activated for essay:', essayText)
    // In a real app, this would send the essay to an AI service for analysis
  }

  const handleFileUpload = () => {
    // Simulate file upload functionality
    console.log('File upload requested')
    // In a real app, this would open a file picker
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <button 
          onClick={onBackToDashboard}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          style={fredokaStyle}
        >
          ← Back to Dashboard
        </button>
        <h1 className="text-4xl font-bold text-white" style={fredokaStyle}>
          Essay Editor
        </h1>
      </div>

      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={fredokaStyle}>
          Welcome to the essay editor! Feel free to submit your responses to university supplementary application questions, and receive feedback from our bot!
        </h2>
      </div>

      {/* Main Essay Input Area */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          {/* Text Input */}
          <textarea
            placeholder="Type or paste your text here..."
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            className="w-full h-96 p-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            style={fredokaStyle}
          />
          
          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleFileUpload}
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
              style={fredokaStyle}
            >
              Upload File
            </button>
            
            <button
              onClick={handleSmartCheck}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
              style={fredokaStyle}
            >
              SmartCheck
            </button>
          </div>
        </div>
      </div>

      {/* Bot Feedback Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-400 rounded-2xl shadow-lg p-8 relative -mt-4">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-4" style={fredokaStyle}>
              Bot Feedback
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              {botFeedback}
            </p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
