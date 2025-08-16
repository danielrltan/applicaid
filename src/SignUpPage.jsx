import React, { useState } from 'react'

export default function SignUpPage({ onSignUp, onBackToLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    highSchool: '',
    email: '',
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSignUp) {
      onSignUp(formData)
    }
  }

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-3" style={fredokaStyle}>my uni-life</h1>
          <p className="text-2xl font-semibold text-purple-600" style={fredokaStyle}>Register</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name & Last Name - Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
                style={fredokaStyle}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
                style={fredokaStyle}
                required
              />
            </div>
          </div>

          {/* High School Institution */}
          <div>
            <input
              type="text"
              name="highSchool"
              placeholder="High School Institution"
              value={formData.highSchool}
              onChange={handleInputChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          {/* Create a User Name */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Create a User Name"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          {/* Create a Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Create a Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg"
            style={fredokaStyle}
          >
            Register
          </button>
        </form>

        {/* Footer - Back to Login */}
        <div className="mt-8 text-center text-base">
          <div className="text-gray-600" style={fredokaStyle}>
            Already have an account?{' '}
            <button 
              onClick={onBackToLogin}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              style={fredokaStyle}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
