import React from "react";

const Aboutus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-mono p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          <span className="font-semibold">Sahayak</span> is a platform designed to streamline the management and communication between mine managers and labourers. Our mission is to make mining operations safer, more efficient, and transparent by providing easy access to job postings, notifications, and real-time updates.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h2>
        <p className="text-gray-700 mb-6">
          We aim to empower both managers and workers with digital tools that simplify daily tasks, improve safety, and foster a collaborative environment.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Meet the Team</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Ramesh Kumar - Founder & Product Lead</li>
          <li>Priya Sharma - UX Designer</li>
          <li>Sunil Das - Backend Developer</li>
          <li>Meena Kumari - Frontend Developer</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Contact</h2>
        <p className="text-gray-700">Email: <span className="font-semibold">support@sahayak.com</span></p>
      </div>
    </div>
  );
};

export default Aboutus;
