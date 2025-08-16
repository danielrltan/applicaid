import React, { useState } from 'react'

export default function LoginPage({ onLogin, onSignUp, onForgotPassword }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
    if (onLogin) {
      onLogin({ username, password })
    }
  }

  const fredokaStyle = { fontFamily: 'Fredoka One, cursive' }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-600 mb-3" style={fredokaStyle}>my uni-life</h1>
          <p className="text-2xl font-semibold text-purple-600" style={fredokaStyle}>Log in</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-lg"
              style={fredokaStyle}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg"
            style={fredokaStyle}
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-10 text-center text-base">
          <div className="flex items-center justify-center space-x-4 text-gray-600 whitespace-nowrap">
            <button 
              onClick={onForgotPassword}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              style={fredokaStyle}
            >
              Forgot your password?
            </button>
            <span className="text-gray-400" style={fredokaStyle}>|</span>
            <span className="text-gray-600" style={fredokaStyle}>
              Don't have an account?{' '}
              <button 
                onClick={onSignUp}
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                style={fredokaStyle}
              >
                Sign Up
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
