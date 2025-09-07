import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// SVG Icons to replace react-icons/fa
const FaUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 w-12 h-12 opacity-30">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
  </svg>
);
const FaUserCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 w-12 h-12 opacity-30">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.416 0 2.78.604 3.765 1.549A1.288 1.288 0 0 1 16.5 4.5v1.5a.75.75 0 0 1-1.5 0V4.896a2.983 2.983 0 0 0-1.92-1.014c-.604-.15-.994-.218-1.58-.23a4.502 4.502 0 0 0-3.328 1.34c-.878.966-1.396 2.246-1.396 3.652v5.108c.004.298.026.596.066.892A18.683 18.683 0 0 0 12 22.5c2.786 0 5.433-.608 7.812-1.7a.75.75 0 0 1 .437-.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695ZM15 11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
  </svg>
);
const FaUserTimes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-red-400 w-12 h-12 opacity-30">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.751 7.29a.75.75 0 0 0-1.06 1.06L10.94 12l-1.68 1.68a.75.75 0 1 0 1.06 1.06L12 13.06l1.68 1.68a.75.75 0 1 0 1.06-1.06L13.06 12l1.68-1.68a.75.75 0 0 0-1.06-1.06L12 10.94l-1.68-1.68Z" clipRule="evenodd" />
  </svg>
);
const FaChartBar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-600">
    <path d="M11 3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0V3ZM16 7a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V7ZM7 11a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V11Zm10-6a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0V5Z" />
  </svg>
);
const FaChartPie = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-600">
    <path d="M13.5 1.055a6.75 6.75 0 0 0-6.75 6.75V15h7.5A6.75 6.75 0 0 0 13.5 1.055ZM6.75 15a6.75 6.75 0 0 0 6.75 6.75v-7.5H6.75Zm.75-7.5a6 6 0 0 0-6 6h6v-6Z" />
  </svg>
);
const FaChartLine = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-600">
    <path d="M22.5 10.5h-10.5a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 13.5a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM6 6.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75ZM18 10.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-6-7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6 18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);
const FaClipboardList = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-600">
    <path fillRule="evenodd" d="M12.975 21.43l-.75-3.03.957-.478a18.254 18.254 0 0 1-1.096-6.425a.75.75 0 0 0-.25-.48l-2.074-1.921a.75.75 0 0 0-.961 1.04l2.074 1.921a.75.75 0 0 1 .25.48c.16.812.285 1.631.378 2.457a.75.75 0 0 0 1.25.132l.75-3.03Zm1.272-10.743a.75.75 0 0 1 .15-.658.75.75 0 0 1 .658-.15l3.963 1.98a.75.75 0 0 1 .459.697c.009.682.022 1.365.04 2.049a.75.75 0 0 1-1.294.015L14.247 10.687Z" clipRule="evenodd" />
    <path d="M4.5 3a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 4.5 21h8.25a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6a.75.75 0 0 0 1.5 0V5.25A2.25 2.25 0 0 0 19.5 3h-15Z" />
  </svg>
);
const FaTasks = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-600">
    <path fillRule="evenodd" d="M12.975 21.43l-.75-3.03.957-.478a18.254 18.254 0 0 1-1.096-6.425a.75.75 0 0 0-.25-.48l-2.074-1.921a.75.75 0 0 0-.961 1.04l2.074 1.921a.75.75 0 0 1 .25.48c.16.812.285 1.631.378 2.457a.75.75 0 0 0 1.25.132l.75-3.03ZM12 18.75a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 0 1 1.5 0v6.75a.75.75 0 0 1-.75.75ZM6 18a.75.75 0 0 1 .75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75Z" clipRule="evenodd" />
  </svg>
);


// Dummy data for the dashboard
const data = {
  labourers: 350,
  activeLabourers: 280,
  inactiveLabourers: 70,
  skills: [
    { name: 'Supervisor', count: 90 },
    { name: 'Electrician', count: 65 },
    { name: 'Welder', count: 50 },
    { name: 'Mechanic', count: 75 },
    { name: 'Operator', count: 70 },
  ],
  status: [
    { name: 'Active', value: 280 },
    { name: 'Inactive', value: 70 },
    { name: 'On-Leave', value: 30 },
  ],
  experience: [
    { group: '0-2 Years', count: 120 },
    { group: '3-5 Years', count: 150 },
    { group: '6-10 Years', count: 50 },
    { group: '10+ Years', count: 30 },
  ],
  jobTrends: [
    { month: 'Jan', jobs: 50, applications: 120 },
    { month: 'Feb', jobs: 60, applications: 150 },
    { month: 'Mar', jobs: 75, applications: 180 },
    { month: 'Apr', jobs: 80, applications: 210 },
    { month: 'May', jobs: 95, applications: 250 },
  ],
  activity: [
    { type: 'status', message: 'Labourer Ravi Kumar marked as Active' },
    { type: 'registration', message: 'New labourer Sunil Singh registered' },
    { type: 'job', message: 'Manager posted a new job' },
    { type: 'profile_update', message: 'Labourer Amit Patel updated profile' },
    { type: 'job_filled', message: 'Job ID #1234 filled by Priya Sharma' },
    { type: 'status', message: 'Labourer Ankit Yadav marked as On-Leave' },
    { type: 'new_company', message: 'New Company "Global Mining Inc." registered' },
  ],
  topPerformers: [
    { name: 'Ravi Kumar', skill: 'Supervisor', score: 9.5 },
    { name: 'Sunil Singh', skill: 'Electrician', score: 9.2 },
    { name: 'Priya Sharma', skill: 'Welder', score: 8.9 },
    { name: 'Amit Patel', skill: 'Mechanic', score: 8.8 },
    { name: 'Ankit Yadav', skill: 'Operator', score: 8.7 },
  ]
};

const PIE_COLORS = ['#3B82F6', '#EF4444', '#F59E0B'];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">Dashboard</h1>
        
        {/* Overall Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-3xl font-bold text-blue-600 mb-1">{data.labourers}</div>
              <div className="text-gray-500">Total Labourers</div>
            </div>
            <FaUsers />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-3xl font-bold text-green-600 mb-1">{data.activeLabourers}</div>
              <div className="text-gray-500">Active Labourers</div>
            </div>
            <FaUserCheck />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-3xl font-bold text-red-600 mb-1">{data.inactiveLabourers}</div>
              <div className="text-gray-500">Inactive Labourers</div>
            </div>
            <FaUserTimes />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Labourers by Skill */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaChartBar /> Labourers by Skill</div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.skills} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3B82F6" name="No. of Labourers" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Experience Level Distribution */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaChartBar /> Experience Level Distribution</div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.experience} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#10B981" name="No. of Labourers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Labourer Status Breakdown */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaChartPie /> Labourer Status Breakdown</div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.status}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.status.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Job Posting vs. Applications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaChartLine /> Job Posting & Applications</div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.jobTrends} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jobs" stroke="#EF4444" name="Jobs Posted" />
                <Line type="monotone" dataKey="applications" stroke="#3B82F6" name="Applications" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Recent Activity and Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaClipboardList /> Recent Activity</div>
            <ul className="space-y-4">
              {data.activity.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-sm">
                    {item.type === 'status' && <FaUserCheck />}
                    {item.type === 'registration' && <FaUsers />}
                    {item.type === 'job' && <FaTasks />}
                    {item.type === 'profile_update' && <FaUserTimes />}
                    {item.type === 'job_filled' && <FaChartLine />}
                    {item.type === 'new_company' && <FaTasks />}
                  </span>
                  <div>
                    {item.message}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Top 5 Labourers by Performance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-lg font-bold text-gray-700 mb-4"><FaTasks /> Top 5 Labourers</div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.topPerformers.map((performer, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{performer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{performer.skill}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{performer.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
