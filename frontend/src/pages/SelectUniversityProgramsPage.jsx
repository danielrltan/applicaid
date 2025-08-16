import React from 'react';
import { Link } from 'react-router-dom';

const SelectUniversityProgramsPage = () => {
  return (
    <div className="min-h-screen bg-violet-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-10">Select a University</h1>
        <div className="relative mb-10">
          <select className="w-full p-4 border border-gray-300 rounded-md text-gray-700 appearance-none bg-white pr-10 text-lg">
            <option>Choose from below...</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 8.707l-1.414-1.414L10 10.586l-3.293-3.293L5.586 8.707 9.293 12.95z"/></svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-violet-800 mb-10">Select a Program</h1>
        <div className="relative mb-12">
          <select className="w-full p-4 border border-gray-300 rounded-md text-gray-700 appearance-none bg-white pr-10 text-lg">
            <option>Choose from below...</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 8.707l-1.414-1.414L10 10.586l-3.293-3.293L5.586 8.707 9.293 12.95z"/></svg>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Want to view which universities & programs you already selected? 
          <Link to="/view-selected-universities" className="text-blue-600 hover:underline font-semibold">Click here to view your list.</Link>
        </p>
        <p className="text-lg text-gray-700">
          Don't know what university or program is right for you? 
          <Link to="/compare-universities-programs" className="text-blue-600 hover:underline font-semibold">Check out Compare Universities & Programs.</Link>
        </p>
      </div>
    </div>
  );
};

export default SelectUniversityProgramsPage;
