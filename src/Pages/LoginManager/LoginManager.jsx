import React, { useState } from "react";

const LoginManager = () => {
  const [form, setForm] = useState({
    managerId: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic here
    alert("Manager login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-mono">
      <div className="flex flex-row w-full max-w-3xl border-2 rounded-xl overflow-hidden bg-white">
        {/* Form Section */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Manager Login</h2>
          <p className="text-gray-500 mb-8 text-sm">Login to your manager account</p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 text-sm">Manager ID</label>
              <input type="text" name="managerId" value={form.managerId} onChange={handleChange} required placeholder="Enter your Manager ID" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-gray-700 text-sm">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded text-sm transition duration-200 mb-4">Login</button>
            <div className="text-center text-gray-600 text-sm">
              Don't have an account? <a href="/register-manager" className="text-blue-600 underline hover:text-blue-800">Register here</a>
            </div>
          </form>
        </div>
        {/* Image Section */}
        <div className="flex-1 bg-gray-100 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginManager;
