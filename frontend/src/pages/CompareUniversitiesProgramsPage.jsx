import React from 'react';

const CompareUniversitiesProgramsPage = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-violet-800 mb-8">
          Type in the 2 university programs to compare, or click the drop-down to compare your current program offers...
        </h1>
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search or select programs..."
            className="w-full p-4 border border-gray-300 rounded-md text-gray-700 text-lg pr-10"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 8.707l-1.414-1.414L10 10.586l-3.293-3.293L5.586 8.707 9.293 12.95z"/></svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="bg-gray-50 rounded-lg shadow p-6 flex-1 text-left">
            <img src="/path/to/waterloo-logo.png" alt="University of Waterloo Logo" className="h-16 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Program: Life Sciences (Co-op)</h2>
            <p className="text-gray-600 mb-4">Waterloo, Ontario</p>
            <p className="text-gray-700 mb-4">University of Waterloo is a STEM focused university that ranks high globally...**live typing**</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Here are some of its top ranked subjects:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Computer Science</li>
              <li>Engineering</li>
              <li>Mathematics</li>
            </ul>
            <p className="text-gray-700">**Get an agent to search external sources (i.e. websites, databases) summarize in 1-2 sentence lines and bullet points to make it easier for the user to read. Also list some recommended programs from the university.**</p>
          </div>

          <div className="text-4xl font-bold text-violet-800 flex items-center justify-center h-full">VS</div>

          <div className="bg-gray-50 rounded-lg shadow p-6 flex-1 text-left">
            <img src="/path/to/mcmaster-logo.png" alt="McMaster University Logo" className="h-16 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Program: Honours Life Sciences</h2>
            <p className="text-gray-600 mb-4">Hamilton, Ontario</p>
            <p className="text-gray-700 mb-4">McMaster University is renowned for its strengths in the health sciences and life sciences programs...**live typing**</p>
            <p className="text-gray-700">**Get an agent to search external sources (i.e. websites, databases) summarize in 1-2 sentence lines and bullet points to make it easier for the user to read. Also list some recommended programs from the university.**</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareUniversitiesProgramsPage;
