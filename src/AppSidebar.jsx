import React, { useState } from "react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { path: "/admin-dashboard", label: "Dashboard" },
  { path: "/pit-upload", label: "Pit Image Upload" },
  { path: "/wages", label: "Wages System" },
  { path: "/notifications", label: "Notifications" },
  { path: "/hazard-history", label: "Hazard History" },
  { path: "/emergency", label: "Emergency" },
  { path: "/labourers", label: "Labourers" },
  { path: "/manager", label: "Manager" },
];

const AppSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Menu" : "Open Menu"}
      </button>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Sahayak Menu</h2>
        </div>
        <nav className="flex flex-col gap-2 p-6">
          {sidebarLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 rounded hover:bg-blue-100 text-gray-800 font-semibold transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
