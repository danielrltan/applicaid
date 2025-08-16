import React from 'react';

const EssayAssistancePage = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to the essay editor! Feel free to submit your responses to university supplementary application questions, and receive feedback from our bot!</h1>
        <div className="space-y-6">
          <textarea
            placeholder="Type or paste your text here..."
            rows="10"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg"
          ></textarea>
          <button className="bg-violet-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-violet-700 transition-colors">
            Upload File
          </button>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
              SmartCheck
            </button>
          </div>
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg shadow p-6 text-left">
          <p className="text-gray-800 text-lg">Your essay looks great so far! One thing I would suggest is adding a more creative approach to your sentences, as admission officers at Queen's University look for what makes a candidate unique. **live typing**</p>
          {/* ... more content ... */}
        </div>
      </div>
    </div>
  );
};

export default EssayAssistancePage;
