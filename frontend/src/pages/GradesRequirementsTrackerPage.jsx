import React from 'react';

const GradesRequirementsTrackerPage = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '67%' }}></div>
          </div>
          <span className="ml-4 text-lg font-semibold text-green-700">67% complete!</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Courses Trend */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Current Courses Trend</h2>
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">Graph Placeholder</div>
          </div>

          {/* Calculus - MHF1D1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Calculus - MHF1D1</h2>
              <select className="border rounded px-2 py-1">
                <option>...</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-gray-700">
                <span>Knowledge & Understanding</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full"><div className="bg-red-500 h-4 rounded-full" style={{ width: '80%' }}></div></div>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Application</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full"><div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div></div>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Communication</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full"><div className="bg-green-500 h-4 rounded-full" style={{ width: '90%' }}></div></div>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Thinking</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full"><div className="bg-purple-500 h-4 rounded-full" style={{ width: '60%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Course Requirements Checklist */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Course Requirements Checklist</h2>
              <select className="border rounded px-2 py-1">
                <option>University of Toronto - Computer Engineering</option>
              </select>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">English</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">Advanced Functions</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">Calculus (MHF)</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">Physics</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">Chemistry</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">1 U Course</span>
              </li>
            </ul>
          </div>

          {/* Graduation Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Graduation Requirements</h2>
              <select className="border rounded px-2 py-1">
                <option>Unionville High School - Markham, Ontario</option>
              </select>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">30 Credits</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">40 Volunteer Hours</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">Grade 12 English</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">1 Arts Credit</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">1 Gym Credit</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700">2 Sciences</span>
              </li>
            </ul>
          </div>

          {/* Offer Conditionals */}
          <div className="bg-gray-50 p-4 rounded-lg shadow col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Offer Conditionals</h2>
              <select className="border rounded px-2 py-1">
                <option>Western University - Ivey AEO & Computer Science</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">80% in Advanced Functions</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">80% in Calculus and Vectors</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">75% in English</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" checked className="form-checkbox h-5 w-5 text-green-500" readOnly /><span className="ml-2 text-gray-700">70% Overall Sem 2 Average</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-400" readOnly /><span className="ml-2 text-gray-700"></span>
                </li>
              </ul>
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">Course History Bar Chart Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesRequirementsTrackerPage;
