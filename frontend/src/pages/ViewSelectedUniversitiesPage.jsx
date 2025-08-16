import React from 'react';
import { Link } from 'react-router-dom';

const ViewSelectedUniversitiesPage = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-8 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
        <div className="flex justify-around bg-gray-100 rounded-t-lg">
          <Link to="/select-university-programs" className="w-1/2 py-4 text-center text-xl font-semibold text-gray-600 border-b-4 border-transparent hover:border-violet-600 transition-colors">Add Universities & Programs</Link>
          <div className="w-1/2 py-4 text-center text-xl font-semibold text-violet-800 border-b-4 border-violet-600">View List</div>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-violet-800 mb-8">List of Your Selected Universities & Programs</h1>
          <ul className="space-y-6">
            <li className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">University of Toronto - St. George Campus</h2>
                <div className="flex items-center mt-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">OFFER</span>
                  <span className="text-lg text-gray-700">Mathematical and Physical Sciences</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Rotman Commerce</h2>
                <div className="flex items-center mt-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">REJECTED</span>
                  <span className="text-lg text-gray-700">Rotman Commerce</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Architecture</h2>
                <div className="flex items-center mt-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-2">OFFER</span>
                  <span className="text-lg text-gray-700">Architecture</span>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-violet-600 mr-3" />
                <span className="text-lg text-gray-700">Forensic Sciences</span>
              </div>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-violet-600 mr-3" />
                <span className="text-lg text-gray-700">Recommended: Computer Engineering</span>
              </div>
              <button className="text-violet-600 text-2xl font-bold">+</button>
            </li>
            <li className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-violet-600 mr-3" />
                <span className="text-lg text-gray-700">Recommended: Computer Science</span>
              </div>
              <button className="text-violet-600 text-2xl font-bold">+</button>
            </li>
          </ul>
          <div className="flex justify-end mt-8">
            <Link to="#" className="text-violet-600 text-lg font-semibold flex items-center">
              Next <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSelectedUniversitiesPage;
