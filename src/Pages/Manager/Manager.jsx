import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Manager and Mine Data ---
// This data is included directly in the file to make the component self-contained.
const manager = {
  id: 'MGR-101',
  name: 'Anil Kumar',
  image: 'https://placehold.co/100x100/A0B9C9/000000?text=AK',
  contact: '+91 98765 43210',
  email: 'anil.kumar@miningcorp.com',
  joiningDate: '2015-08-20',
  shift: 'Day Shift'
};

const mine = {
  name: 'Golden Peak Mine',
  id: 'MP-007',
  location: 'Jharkhand, India',
  totalLabourers: 350,
  production: [
    { name: 'Jan', tons: 4000 },
    { name: 'Feb', tons: 3000 },
    { name: 'Mar', tons: 5000 },
    { name: 'Apr', tons: 4500 },
    { name: 'May', tons: 6000 },
  ],
  safetyIncidents: [
    { name: 'Jan', incidents: 3 },
    { name: 'Feb', incidents: 2 },
    { name: 'Mar', incidents: 1 },
    { name: 'Apr', incidents: 0 },
    { name: 'May', incidents: 1 },
  ]
};

// --- NotificationPanel Component ---
const NotificationPanel = () => {
  const notifications = [
    { id: 1, text: 'New job application for "Drill Operator"', time: '2 mins ago' },
    { id: 2, text: 'Safety briefing scheduled for 10:00 AM', time: '1 hr ago' },
    { id: 3, text: 'Equipment maintenance on jumbo drill required', time: '3 hrs ago' },
    { id: 4, text: 'Labourer Ankit Singh is on leave for 2 days', time: 'Yesterday' },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border border-gray-200 hover:shadow-2xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">Notifications</h2>
      <p className="text-sm text-gray-500 mb-4">Urgent updates and key alerts</p>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-4">
          {notifications.map(notif => (
            <li key={notif.id} className="p-4 bg-gray-100 rounded-lg transition duration-200 transform hover:scale-[1.02]">
              <p className="text-sm font-medium text-gray-800">{notif.text}</p>
              <span className="text-xs text-gray-500">{notif.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// --- MineCharts Component ---
const MineCharts = ({ production, safetyIncidents }) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 min-w-[350px] flex-1 border border-gray-200 hover:shadow-2xl transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Production (tons)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={production} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="tons" stroke="#4F46E5" fillOpacity={1} fill="#4F46E5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 min-w-[350px] flex-1 border border-gray-200 hover:shadow-2xl transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Incidents</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={safetyIncidents} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#EF4444" fillOpacity={1} fill="#EF4444" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

// --- ManagerDashboard Component (formerly Manager.jsx) ---
const ManagerDashboard = () => {
  return (
    <div className="manager-page min-h-screen bg-gray-50 font-['Segoe_UI',Arial,sans-serif] flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-wide">Manager Dashboard</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">A quick overview of your mine, workers, and management tools. All sections are clustered for fast access and decision making.</p>

      <div className="w-full max-w-7xl flex flex-row flex-wrap gap-8 justify-center items-stretch mb-8">
        {/* Manager and Mine Sections */}
        <section className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center min-w-[300px] flex-1 border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]">
          <div className="relative">
            <img src={manager.image} alt="Manager" className="w-28 h-28 rounded-full mb-2 border-4 border-blue-500 object-cover shadow-lg" />
            <span className="absolute bottom-3 right-3 block w-4 h-4 rounded-full bg-green-500 ring-2 ring-white"></span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{manager.name}</h2>
          <p className="text-sm text-gray-500 mb-4">Your profile and contact details</p>
          <div className="flex flex-col gap-2 text-gray-700 w-full text-sm">
            <div className="flex justify-between items-center"><span className="font-semibold">Manager ID:</span> <span className="text-blue-600 font-mono">{manager.id}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Contact:</span> <span className="text-gray-600">{manager.contact}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Email:</span> <span className="text-gray-600 truncate">{manager.email}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Joining Date:</span> <span className="text-gray-600">{manager.joiningDate}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Shift:</span> <span className="text-gray-600">{manager.shift}</span></div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8 min-w-[300px] flex-1 border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Mine Details</h2>
          <p className="text-sm text-gray-500 mb-4">Information about the mine you manage</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            <div className="flex justify-between items-center"><span className="font-semibold">Mine Name:</span> <span className="text-gray-600">{mine.name}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Mine ID:</span> <span className="text-gray-600">{mine.id}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Location:</span> <span className="text-gray-600">{mine.location}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Total Labourers:</span> <span className="text-blue-600 font-mono">{mine.totalLabourers}</span></div>
            <div className="flex justify-between items-center"><span className="font-semibold">Safety Record:</span> <span className="text-green-600 font-bold">Excellent</span></div>
          </div>
        </section>

        {/* Notification Section */}
        <section className="min-w-[300px] flex-1">
          <NotificationPanel />
        </section>

        {/* Post a Job Section */}
        <section className="post-job-section bg-white rounded-2xl shadow-lg p-8 min-w-[300px] flex-1 border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Post a Job</h2>
          <p className="text-sm text-gray-500 mb-4">Quickly add new job openings for your mine</p>
          <form className="post-job-form flex flex-col gap-4">
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-700"
            />
            <textarea
              placeholder="Job Description"
              name="description"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-700"
              rows={3}
            />
            <input
              type="number"
              placeholder="Number of Positions"
              name="positions"
              min="1"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Post Job
            </button>
          </form>
        </section>
      </div>

      {/* Charts Section */}
      <div className="w-full max-w-7xl overflow-x-auto mb-8">
        <div className="min-w-[700px] flex gap-8 justify-center items-stretch">
          <MineCharts production={mine.production} safetyIncidents={mine.safetyIncidents} />
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
