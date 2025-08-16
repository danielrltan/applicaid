import React, { useState, useEffect, useRef } from 'react'

export default function PersonalityInterestsPage({ onBackToDashboard }) {
  const [formData, setFormData] = useState({
    studyPreference: '',
    careerPaths: [],
    hobbies: ['', '', ''],
    goals: ['', '', ''],
    academicFact: '',
    selfDescription: []
  })

  const studyOptions = [
    'On-campus',
    'Online',
    'Hybrid',
    'Part-time',
    'Full-time',
    'International'
  ]

  const careerOptions = [
    'Computer Science',
    'Engineering',
    'Medicine',
    'Business',
    'Arts & Humanities',
    'Social Sciences',
    'Natural Sciences',
    'Education',
    'Law',
    'Healthcare',
    'Technology',
    'Finance'
  ]

  const personalityOptions = [
    'Creative',
    'Analytical',
    'Leadership',
    'Team Player',
    'Independent',
    'Detail-oriented',
    'Big Picture Thinker',
    'Problem Solver',
    'Innovative',
    'Reliable',
    'Adaptable',
    'Passionate'
  ]

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }
  const careerDropdownRef = useRef(null)
  const personalityDropdownRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (careerDropdownRef.current && !careerDropdownRef.current.contains(event.target)) {
        document.getElementById('careerDropdown')?.classList.add('hidden')
      }
      if (personalityDropdownRef.current && !personalityDropdownRef.current.contains(event.target)) {
        document.getElementById('personalityDropdown')?.classList.add('hidden')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (field, index = null, value = null) => {
    if (index !== null) {
      // Handle array fields (hobbies, goals)
      const newArray = [...formData[field]]
      newArray[index] = value
      setFormData({ ...formData, [field]: newArray })
    } else if (value !== null) {
      // Handle single value fields
      setFormData({ ...formData, [field]: value })
    } else {
      // Handle event objects
      setFormData({ ...formData, [field]: event.target.value })
    }
  }

  const handleMultiSelect = (field, value) => {
    const currentValues = formData[field]
    if (currentValues.includes(value)) {
      setFormData({ ...formData, [field]: currentValues.filter(item => item !== value) })
    } else {
      setFormData({ ...formData, [field]: [...currentValues, value] })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // In a real app, this would save the data to a database
  }

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
          Personality & Interests Profile
        </h1>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white" style={fredokaStyle}>
          Tell us a little bit about yourself! :)
        </h2>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Study Preference */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              Where do you prefer to study?
            </label>
            <div className="relative">
              <select
                value={formData.studyPreference}
                onChange={(e) => handleInputChange('studyPreference', null, e.target.value)}
                className="w-full p-4 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 appearance-none"
                style={fredokaStyle}
              >
                <option value="" className="text-gray-400" style={fredokaStyle}>Choose from below...</option>
                {studyOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Career Paths */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              What career path(s) are you interested in?
            </label>
            <div className="relative" ref={careerDropdownRef}>
              <div className="w-full p-4 bg-white text-gray-500 rounded-lg border-0 focus-within:ring-2 focus-within:ring-purple-300 cursor-pointer min-h-[60px] flex items-center justify-between" onClick={() => document.getElementById('careerDropdown').classList.toggle('hidden')}>
                <span className={formData.careerPaths.length > 0 ? 'text-gray-900' : 'text-gray-400'} style={formData.careerPaths.length > 0 ? {} : fredokaStyle}>
                  {formData.careerPaths.length > 0 ? formData.careerPaths.join(', ') : 'Select all that apply'}
                </span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="careerDropdown" className="hidden absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
                {careerOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer hover:bg-purple-50 ${formData.careerPaths.includes(option) ? 'bg-purple-100' : ''}`}
                    onClick={() => handleMultiSelect('careerPaths', option)}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.careerPaths.includes(option)}
                        onChange={() => {}}
                        className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                      />
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              What are 3 main hobbies and/or interests?
            </label>
            <div className="space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg">{index + 1}.</span>
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    value={formData.hobbies[index]}
                    onChange={(e) => handleInputChange('hobbies', index, e.target.value)}
                    className="flex-1 p-4 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-400"
                    style={fredokaStyle}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              List 3 goals you have for the semester
            </label>
            <div className="space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg">{index + 1}.</span>
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    value={formData.goals[index]}
                    onChange={(e) => handleInputChange('goals', index, e.target.value)}
                    className="flex-1 p-4 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-400"
                    style={fredokaStyle}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Academic Fact */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              Tell us one academic fact about yourself!
            </label>
            <input
              type="text"
              placeholder="Type your answer here..."
              value={formData.academicFact}
              onChange={(e) => handleInputChange('academicFact', null, e.target.value)}
              className="w-full p-4 bg-white text-gray-900 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-gray-400"
              style={fredokaStyle}
            />
          </div>

          {/* Self Description */}
          <div className="space-y-3">
            <label className="block text-white text-lg font-semibold" style={fredokaStyle}>
              Describe yourself in words
            </label>
            <div className="relative" ref={personalityDropdownRef}>
              <div className="w-full p-4 bg-white text-gray-500 rounded-lg border-0 focus-within:ring-2 focus-within:ring-purple-300 cursor-pointer min-h-[60px] flex items-center justify-between" onClick={() => document.getElementById('personalityDropdown').classList.toggle('hidden')}>
                <span className={formData.selfDescription.length > 0 ? 'text-gray-900' : 'text-gray-400'} style={formData.selfDescription.length > 0 ? {} : fredokaStyle}>
                  {formData.selfDescription.length > 0 ? formData.selfDescription.join(', ') : 'Select all that apply'}
                </span>
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="personalityDropdown" className="hidden absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto z-10">
                {personalityOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer hover:bg-purple-50 ${formData.selfDescription.includes(option) ? 'bg-purple-100' : ''}`}
                    onClick={() => handleMultiSelect('selfDescription', option)}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.selfDescription.includes(option)}
                        onChange={() => {}}
                        className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                      />
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              style={fredokaStyle}
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
