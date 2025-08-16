import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-600 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-8">my uni-life</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Log in</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <Link to="/dashboard" className="mt-8 w-full bg-violet-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-violet-700 transition-colors block">
          Login
        </Link>
        <div className="mt-6 text-sm flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
          <span className="text-gray-500">|</span>
          <Link to="/register" className="text-blue-600 hover:underline">Don't have an account? <span className="font-semibold">Sign Up</span></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
