import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const dashboardItems = [
    { title: 'Select University Programs', icon: '🎓', link: '/select-university-programs' },
    { title: 'Upload Documents', icon: '📄', link: '#' },
    { title: 'Grades & Requirements Tracker', icon: '🅰️', link: '/grades-requirements-tracker' },
    { title: 'Personality & Interests Profile', icon: '🎯', link: '/personality-interests-profile' },
    { title: 'Compare Universities & Programs', icon: '💭', link: '/compare-universities-programs' },
    { title: 'Essay Assistance', icon: '📎', link: '/essay-assistance' },
  ];

  return (
    <div className="min-h-screen bg-violet-600 p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white">Welcome, _______!</h1>
        <Link to="/" className="bg-white text-violet-600 px-6 py-2 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
          Sign out
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardItems.map((item, index) => (
          <Link to={item.link} key={index} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-200">
            <div className="text-6xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-colors">
        Chatbot
      </div>
    </div>
  );
};

export default DashboardPage;
