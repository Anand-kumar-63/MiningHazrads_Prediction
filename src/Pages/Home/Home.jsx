import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center px-4">
  <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Sahayak Mining Safety Portal</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your all-in-one platform for mining site safety, hazard prediction, emergency alerts, wage management, and more. Empowering managers and labourers to work safer and smarter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Link to="/manager" className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Manager Dashboard</Link>
          <Link to="/labourers" className="bg-green-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">Labourers Section</Link>
          <Link to="/pit-upload" className="bg-yellow-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-yellow-600 transition">Pit Image Upload</Link>
          <Link to="/emergency" className="bg-red-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition">Emergency Contacts</Link>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Link to="/wages" className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 font-medium">Wages</Link>
          <Link to="/notifications" className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 font-medium">Notifications</Link>
          <Link to="/hazard-history" className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 font-medium">Hazard History</Link>
          <Link to="/admin-dashboard" className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200 font-medium">Admin Dashboard</Link>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">&copy; 2025 Sahayak Mining Safety Portal</footer>
    </div>
  );
};

export default Home;
