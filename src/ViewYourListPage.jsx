import React, { useState } from 'react'

export default function ViewYourListPage({ onBackToSelectUniversity, onNavigateToAddUniversities, selectedUniversities = [], selectedPrograms = [] }) {
  const [activeTab, setActiveTab] = useState('viewList')

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  // Sample data structure - you can enhance this based on actual selections
  const sampleData = {
    university: "University of Toronto - St. George Campus",
    programs: [
      { name: "Mathematical and Physical Sciences", status: "OFFER", color: "green" },
      { name: "Rotman Commerce", status: "REJECTED", color: "red" },
      { name: "Architecture", status: "OFFER", color: "green" },
      { name: "Forensic Sciences", status: "", color: "gray" },
      { name: "Computer Engineering", status: "Recommended", color: "purple", isRecommended: true },
      { name: "Computer Science", status: "Recommended", color: "purple", isRecommended: true }
    ]
  }

  const getStatusColor = (color) => {
    switch (color) {
      case 'green': return 'bg-green-500'
      case 'red': return 'bg-red-500'
      case 'purple': return 'bg-purple-500'
      default: return 'bg-gray-300'
    }
  }

  const getStatusTextColor = (color) => {
    switch (color) {
      case 'green': return 'text-white'
      case 'red': return 'text-white'
      case 'purple': return 'text-white'
      default: return 'text-gray-600'
    }
  }

  const handleTabClick = (tab) => {
    if (tab === 'addUniversities') {
      onNavigateToAddUniversities()
    } else {
      setActiveTab(tab)
    }
  }

  return (
    <div className="min-h-screen bg-purple-600 p-6">
      {/* Navigation Tabs */}
      <div className="flex mb-8">
        <button
          onClick={() => handleTabClick('addUniversities')}
          className={`px-6 py-3 rounded-t-lg font-semibold transition-colors duration-200 ${
            activeTab === 'addUniversities' 
              ? 'bg-white text-purple-600' 
              : 'bg-purple-500 text-white hover:bg-purple-400'
          }`}
          style={fredokaStyle}
        >
          Add Universities & Programs
        </button>
        <button
          onClick={() => handleTabClick('viewList')}
          className={`px-6 py-3 rounded-t-lg font-semibold transition-colors duration-200 ${
            activeTab === 'viewList' 
              ? 'bg-white text-purple-600' 
              : 'bg-purple-500 text-white hover:bg-purple-400'
          }`}
          style={fredokaStyle}
        >
          View List
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center" style={fredokaStyle}>
          List of Your Selected Universities & Programs
        </h1>

        {/* University Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-purple-600 mb-4" style={fredokaStyle}>
            {sampleData.university}
          </h2>
          
          {/* Programs List */}
          <div className="space-y-4">
            {sampleData.programs.map((program, index) => (
              <div key={index} className="flex items-center space-x-4 py-3 border-b border-gray-200">
                {/* Checkbox */}
                <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                
                {/* Program Name */}
                <span className={`flex-1 font-medium ${program.isRecommended ? 'text-gray-400' : 'text-gray-800'}`} style={fredokaStyle}>
                  {program.isRecommended ? `Recommended: ${program.name}` : program.name}
                </span>
                
                {/* Status Label */}
                {program.status && (
                  <div className={`px-3 py-1 rounded text-sm font-semibold transform -rotate-12 ${getStatusColor(program.color)} ${getStatusTextColor(program.color)}`}>
                    {program.status}
                  </div>
                )}
                
                {/* Add Button for Recommended Programs */}
                {program.isRecommended && (
                  <button className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={onBackToSelectUniversity}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
            style={fredokaStyle}
          >
            Back
          </button>
          
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2">
            <span style={fredokaStyle}>Next</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
