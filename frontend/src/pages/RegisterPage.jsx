import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-600 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-8">my unilife</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
        <div className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="High School Institution" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Create a User Name" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="password" placeholder="Create a Password" className="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <button className="mt-8 w-full bg-violet-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-violet-700 transition-colors">
          Register
        </button>
        <div className="mt-6 text-sm">
          Already have an account? <a href="/" className="text-blue-600 hover:underline"><span className="font-semibold">Log In</span></a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
