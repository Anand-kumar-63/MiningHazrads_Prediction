import React from "react";

const AdminDashboard = () => (
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Admin/Manager Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <div className="text-2xl font-bold text-blue-600 mb-2">120</div>
        <div className="text-gray-700">Total Labourers</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <div className="text-2xl font-bold text-green-600 mb-2">85</div>
        <div className="text-gray-700">Active Labourers</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <div className="text-2xl font-bold text-red-600 mb-2">35</div>
        <div className="text-gray-700">Inactive Labourers</div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-6 mb-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Alerts</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Safety alert: Landslide risk detected!</li>
        <li>Wages for August processed</li>
        <li>New job posted</li>
      </ul>
    </div>
  </div>
);

export default AdminDashboard;
