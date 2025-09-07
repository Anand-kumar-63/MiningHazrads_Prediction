import React from "react";
import { useAuth } from "../../AuthContext.jsx";

const dummyNotifications = [
  {
    type: "Work Timing",
    message: "Your shift starts at 8:00 AM and ends at 4:00 PM."
  },
  {
    type: "Location Update",
    message: "Today's work location: Sector 5, Block A."
  },
  {
    type: "Payment Status",
    message: "You have been paid for last week's work."
  },
  {
    type: "Manager Alert",
    message: "Safety meeting at 2:00 PM. Attendance is mandatory."
  }
];

const LabourSidebar = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return null;
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 font-mono z-50 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
      <ul className="space-y-4">
        {dummyNotifications.map((note, idx) => (
          <li key={idx} className="bg-gray-100 p-4 rounded border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700 mb-1">{note.type}</p>
            <p className="text-gray-700 text-sm">{note.message}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LabourSidebar;
