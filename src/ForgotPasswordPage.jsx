import React, { useState } from 'react'

export default function ForgotPasswordPage({ onBackToLogin, onSubmitEmail }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmitEmail) {
      onSubmitEmail(email)
    }
  }

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-3" style={fredokaStyle}>my uni-life</h1>
          <p className="text-2xl font-semibold text-purple-600" style={fredokaStyle}>Forgot Password</p>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg" style={fredokaStyle}>
            We'll send instructions to your email on how to change your password.
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg"
            style={fredokaStyle}
          >
            Send Instructions
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center text-base">
          <div className="text-gray-600" style={fredokaStyle}>
            Remember your password?{' '}
            <button 
              onClick={onBackToLogin}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              style={fredokaStyle}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
