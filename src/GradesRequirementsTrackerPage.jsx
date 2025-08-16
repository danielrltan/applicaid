import React, { useState } from 'react'

export default function GradesRequirementsTrackerPage({ onBackToDashboard }) {
  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  return (
    <div className="min-h-screen bg-purple-600 p-6">
      {/* Top Section - Progress Bar */}
      <div className="mb-8">
        <div className="bg-white rounded-lg p-6">
          <div className="relative">
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-8 relative overflow-hidden">
              <div className="bg-green-500 h-8 rounded-full flex items-center justify-center" style={{ width: '67%' }}>
                <span className="text-white font-bold text-sm" style={fredokaStyle}>67% complete!</span>
              </div>
            </div>
            
            {/* Running Figure */}
            <div className="absolute top-0 left-0 transform -translate-y-2" style={{ left: '60%' }}>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏃</span>
              </div>
            </div>
            
            {/* Flag */}
            <div className="absolute top-0 right-0 transform -translate-y-2">
              <div className="w-6 h-12 bg-red-500 rounded-t-full flex items-center justify-center">
                <span className="text-white text-xs">🚩</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Section - Two Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Current Courses Trend */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4" style={fredokaStyle}>Current Courses Trend</h3>
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
            {/* Simple Line Graph */}
            <svg className="w-full h-full" viewBox="0 0 300 200">
              <path d="M20,150 Q75,100 150,120 T280,80" stroke="black" strokeWidth="2" fill="none"/>
              <path d="M20,120 Q75,80 150,100 T280,60" stroke="red" strokeWidth="2" fill="none"/>
              <path d="M20,90 Q75,50 150,70 T280,30" stroke="blue" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Calculus Course */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-600" style={fredokaStyle}>Calculus - MHF1D1</h3>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Four Sub-panels */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2" style={fredokaStyle}>Knowledge & Understanding</h4>
              <div className="h-16 bg-white rounded">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <path d="M10,50 Q25,40 50,45 T90,35" stroke="black" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2" style={fredokaStyle}>Application</h4>
              <div className="h-16 bg-white rounded">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <path d="M10,45 Q25,50 50,48 T90,40" stroke="red" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2" style={fredokaStyle}>Communication</h4>
              <div className="h-16 bg-white rounded">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <path d="M10,40 Q25,50 50,45 T90,35" stroke="green" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded p-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-2" style={fredokaStyle}>Thinking</h4>
              <div className="h-16 bg-white rounded">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <path d="M10,45 Q25,35 50,40 T90,30" stroke="blue" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Two Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Course Requirements Checklist - Notebook Style */}
        <div className="relative bg-yellow-200 rounded-lg p-6 shadow-lg border-l-8 border-yellow-500" style={{backgroundColor: '#fef3c7'}}>
          {/* Notebook Cover */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-600" style={fredokaStyle}>Course Requirements Checklist</h3>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-yellow-800 mb-4" style={fredokaStyle}>University of Toronto - Computer Engineering</h4>
            
            {/* Lined Paper Effect */}
            <div className="space-y-3 bg-white p-4 rounded shadow-inner border border-gray-200">
              {[
                { name: "English", completed: true },
                { name: "Advanced Functions", completed: true },
                { name: "Calculus (MHF)", completed: false },
                { name: "Physics", completed: false },
                { name: "Chemistry", completed: true },
                { name: "1 U Course", completed: false }
              ].map((course, index) => (
                <div key={index} className="flex items-center space-x-3 py-1 border-b border-gray-100 last:border-b-0">
                  <div className={`w-5 h-5 rounded border-2 ${course.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                    {course.completed && (
                      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-800 font-medium" style={fredokaStyle}>{course.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graduation Requirements - Notebook Style */}
        <div className="relative bg-pink-200 rounded-lg p-6 shadow-lg border-l-8 border-pink-500" style={{backgroundColor: '#fce7f3'}}>
          {/* Notebook Cover */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-600" style={fredokaStyle}>Graduation Requirements</h3>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-purple-800 mb-4" style={fredokaStyle}>Unionville High School - Markham, Ontario</h4>
            
            {/* Lined Paper Effect */}
            <div className="space-y-3 bg-white p-4 rounded shadow-inner border border-gray-200">
              {[
                { name: "30 Credits", completed: true },
                { name: "40 Volunteer Hours", completed: true },
                { name: "Grade 12 English", completed: false },
                { name: "1 Arts Credit", completed: true },
                { name: "1 Gym Credit", completed: false },
                { name: "2 Sciences", completed: false }
              ].map((req, index) => (
                <div key={index} className="flex items-center space-x-3 py-1 border-b border-gray-100 last:border-b-0">
                  <div className={`w-5 h-5 rounded border-2 ${req.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                    {req.completed && (
                      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-800 font-medium" style={fredokaStyle}>{req.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Two Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Offer Conditionals - Notebook Style */}
        <div className="relative bg-blue-200 rounded-lg p-6 shadow-lg border-l-8 border-blue-500" style={{backgroundColor: '#dbeafe'}}>
          {/* Notebook Cover */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-600" style={fredokaStyle}>Offer Conditionals</h3>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-800 mb-4" style={fredokaStyle}>Western University - Ivey AEO & Computer Science</h4>
            
            {/* Lined Paper Effect */}
            <div className="space-y-3 bg-white p-4 rounded shadow-inner border border-gray-200">
              {[
                { name: "80% in Advanced Functions", completed: true },
                { name: "80% in Calculus and Vectors", completed: false },
                { name: "75% in English", completed: true },
                { name: "70% Overall Sem 2 Average", completed: true },
                { name: "Additional Requirement 1", completed: false },
                { name: "Additional Requirement 2", completed: false }
              ].map((conditional, index) => (
                <div key={index} className="flex items-center space-x-3 py-1 border-b border-gray-100 last:border-b-0">
                  <div className={`w-5 h-5 rounded border-2 ${conditional.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                    {conditional.completed && (
                      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-800 font-medium" style={fredokaStyle}>{conditional.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course History */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4" style={fredokaStyle}>Course History</h3>
          <div className="h-48 flex items-end justify-center space-x-4">
            {[
              { height: "60%", color: "bg-red-500", label: "60%" },
              { height: "70%", color: "bg-yellow-500", label: "70%" },
              { height: "48%", color: "bg-green-500", label: "48%" },
              { height: "93%", color: "bg-blue-500", label: "93%" }
            ].map((bar, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 ${bar.color} rounded-t-lg`} style={{ height: bar.height }}></div>
                <span className="text-sm font-semibold text-gray-700 mt-2" style={fredokaStyle}>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Dashboard Button */}
      <div className="text-center">
        <button 
          onClick={onBackToDashboard}
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          style={fredokaStyle}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

