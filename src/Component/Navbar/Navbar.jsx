import React, { useState } from "react";
import { Link } from "react-router-dom";


function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center relative">
      <button
        className="flex flex-col justify-center items-center w-10 h-10 bg-gray-600 rounded focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      {open && (
        <div className="absolute right-0 h-screen top-12 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-50 flex flex-col">
          <Link to="/login-worker" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Worker Login</Link>
          <Link to="/register-worker" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Worker Register</Link>
          <Link to="/login-manager" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Manager Login</Link>
          <Link to="/register-manager" className="px-4 py-2 hover:bg-gray-100">Manager Register</Link>
          <Link to="/aboutus" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">About Us</Link>
          <Link to="/contactus" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Contact Us</Link>
          <Link to="/dashboard" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Dashboard</Link>
          <Link to="/labourers" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Labourers</Link>
          <Link to="/manager" className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">Manager</Link>
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="select-none font-mono flex flex-row justify-between items-center py-3 px-2 bg-gray-400 text-white">
      {/*  create navbar that includes Aboutus , Contact us ,  Dashboard , Login , signup , and Labourers */}
      <section>
        <Link to="/">
        <h1 className="text-2xl font-bold">Sahayak</h1>
      </Link>
      </section>

      <section>
        <ul className="hidden md:flex flex-row gap-4 space-x-4 text-lg font-mono mr-10">
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/labourers">Labourers</Link>
          <Link to="/manager">Manager</Link>
        </ul>
      </section>

      {/* Hamburger menu for Login/Register */}
      <section className="relative">
        <HamburgerMenu />
      </section>

      {/* Removed Post a Job button from Navbar */}
    </div>
  );
};

export default Navbar;
