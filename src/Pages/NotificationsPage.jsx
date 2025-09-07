import React from "react";

const notifications = [
  { id: 1, message: "Safety alert: Landslide risk detected!", time: "2025-09-08 10:30" },
  { id: 2, message: "Wages for August have been processed.", time: "2025-09-07 18:00" },
  { id: 3, message: "New job posted by Manager.", time: "2025-09-06 14:20" },
];

const NotificationsPage = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Notifications Center</h1>
    <ul className="divide-y divide-gray-200">
      {notifications.map(note => (
        <li key={note.id} className="py-4">
          <div className="font-semibold text-gray-800">{note.message}</div>
          <div className="text-xs text-gray-500">{note.time}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default NotificationsPage;
