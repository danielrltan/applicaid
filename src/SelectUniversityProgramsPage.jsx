import React, { useState } from 'react'

export default function SelectUniversityProgramsPage({ onBackToDashboard, onViewList }) {
  const [selectedUniversity, setSelectedUniversity] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [activeTab, setActiveTab] = useState('addUniversities')

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value)
  }

  const handleProgramChange = (e) => {
    setSelectedProgram(e.target.value)
  }

  const handleViewList = () => {
    if (onViewList) {
      onViewList()
    }
  }

  const handleTabClick = (tab) => {
    if (tab === 'viewList') {
      onViewList()
    } else {
      setActiveTab(tab)
    }
  }

  return (
    <div className="min-h-screen bg-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
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

        {/* Select a University Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center" style={fredokaStyle}>
            Select a University
          </h2>
          <select
            value={selectedUniversity}
            onChange={handleUniversityChange}
            className="w-full px-6 py-4 bg-white rounded-lg text-gray-500 text-lg"
            style={fredokaStyle}
          >
            <option value="">Choose from below...</option>
            <option value="university-of-toronto">University of Toronto</option>
            <option value="mcgill-university">McGill University</option>
            <option value="university-of-british-columbia">University of British Columbia</option>
            <option value="university-of-alberta">University of Alberta</option>
            <option value="queens-university">Queen's University</option>
            <option value="western-university">Western University</option>
            <option value="university-of-waterloo">University of Waterloo</option>
            <option value="university-of-ottawa">University of Ottawa</option>
          </select>
        </div>

        {/* Select a Program Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-center" style={fredokaStyle}>
            Select a Program
          </h2>
          <select
            value={selectedProgram}
            onChange={handleProgramChange}
            className="w-full px-6 py-4 bg-white rounded-lg text-gray-500 text-lg"
            style={fredokaStyle}
          >
            <option value="">Choose from below...</option>
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="medicine">Medicine</option>
            <option value="law">Law</option>
            <option value="arts">Arts</option>
            <option value="science">Science</option>
            <option value="nursing">Nursing</option>
          </select>
        </div>

        {/* Informational Text and Links */}
        <div className="space-y-4 text-center">
          <div className="text-black text-lg" style={fredokaStyle}>
            Want to view which universities & programs you already selected?{' '}
            <button 
              onClick={handleViewList}
              className="text-white hover:text-gray-200 underline font-semibold"
              style={fredokaStyle}
            >
              Click here to view your list.
            </button>
          </div>
          
          <div className="text-black text-lg" style={fredokaStyle}>
            Don't know what university or program is right for you?{' '}
            <button 
              onClick={handleViewList}
              className="text-white hover:text-gray-200 underline font-semibold"
              style={fredokaStyle}
            >
              Check out Compare Universities & Programs.
            </button>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={onBackToDashboard}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            style={fredokaStyle}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
