import React from 'react';

const PersonalityInterestsProfilePage = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tell us a little bit about yourself! :)</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Where do you prefer to study?</label>
          <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
            <option>Choose from below...</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">What career path(s) are you interested in?</label>
          <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
            <option>Select all that apply</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">What are 3 main hobbies and/or interests?</label>
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md mb-3" />
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md mb-3" />
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">List 3 goals you have for the semester</label>
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md mb-3" />
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md mb-3" />
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Tell us one academic fact about yourself!</label>
          <input type="text" placeholder="Type your answer here..." className="w-full p-3 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Describe yourself in words</label>
          <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
            <option>Select all that apply</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalityInterestsProfilePage;
