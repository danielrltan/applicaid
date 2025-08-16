import React, { useState } from 'react'

export default function CompareUniversitiesPage({ onBackToDashboard }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [leftUniversity, setLeftUniversity] = useState({
    name: 'University of Waterloo',
    program: 'Life Sciences (Co-op)',
    location: 'Waterloo, Ontario',
    logo: '🏛️',
    description: 'University of Waterloo is a STEM focused university that ranks high globally... **live typing**',
    topSubjects: ['Computer Science', 'Engineering', 'Mathematics'],
    recommendations: ['Software Engineering', 'Computer Engineering', 'Mathematics']
  })
  
  const [rightUniversity, setRightUniversity] = useState({
    name: 'McMaster University',
    program: 'Honours Life Sciences',
    location: 'Hamilton, Ontario',
    logo: '🏛️',
    description: 'McMaster University is renowned for its strengths in the health sciences and life sciences programs... **live typing**',
    topSubjects: ['Health Sciences', 'Life Sciences', 'Medicine'],
    recommendations: ['Health Sciences', 'Biomedical Sciences', 'Medical Radiation Sciences']
  })

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  return (
    <div className="min-h-screen bg-purple-600 p-6">
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
          Compare Universities & Programs
        </h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Type in the 2 university programs to compare, or click the drop-down to compare your current program offers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            style={fredokaStyle}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-8">
          {/* Left University Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-2xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{leftUniversity.logo}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={fredokaStyle}>
                {leftUniversity.name}
              </h2>
              <p className="text-xl text-purple-600 font-semibold mb-1">
                Program: {leftUniversity.program}
              </p>
              <p className="text-gray-600">{leftUniversity.location}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {leftUniversity.description}
              </p>
              <p className="text-gray-700 mb-3">Here are some of its top ranked subjects:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {leftUniversity.topSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
              <p className="text-gray-500 mt-2">...</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Get an agent to search external sources (i.e. websites, databases) summarize in 1-2 sentence lines and bullet points to make it easier for the user to read. Also list some recommended programs from the university.</strong>
              </p>
            </div>
          </div>

          {/* VS Separator */}
          <div className="bg-purple-500 text-white px-6 py-4 rounded-full font-bold text-2xl" style={fredokaStyle}>
            VS
          </div>

          {/* Right University Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-2xl">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{rightUniversity.logo}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={fredokaStyle}>
                {rightUniversity.name}
              </h2>
              <p className="text-xl text-purple-600 font-semibold mb-1">
                Program: {rightUniversity.program}
              </p>
              <p className="text-gray-600">{rightUniversity.location}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {rightUniversity.description}
              </p>
              <p className="text-gray-700 mb-3">Here are some of its top ranked subjects:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {rightUniversity.topSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
              <p className="text-gray-500 mt-2">...</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Get an agent to search external sources (i.e. websites, databases) summarize in 1-2 sentence lines and bullet points to make it easier for the user to read. Also list some recommended programs from the university.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
