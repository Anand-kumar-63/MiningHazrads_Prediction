import React, { useState } from "react";

const RegisterManager = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    adhaar: "",
    age: "",
    gender: "",
    password: "",
    phone: "",
    mine: "",
    organisation: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    alert("Manager registered successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-mono">
      <div className="flex flex-row w-full max-w-3xl border-2 rounded-xl overflow-hidden bg-white">
        {/* Form Section */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Register as Manager</h2>
          <p className="text-gray-500 mb-8 text-sm">Create your manager account</p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Manager ID</label>
                <input type="text" name="id" value={form.id} onChange={handleChange} required placeholder="Enter your Manager ID" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Adhaar ID</label>
                <input type="text" name="adhaar" value={form.adhaar} onChange={handleChange} required placeholder="Enter your Adhaar ID" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Age</label>
                <input type="number" name="age" value={form.age} onChange={handleChange} required min="18" placeholder="Enter your age" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Phone Number</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter your phone number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Mine</label>
                <input type="text" name="mine" value={form.mine} onChange={handleChange} required placeholder="Mine you are working at" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Organisation</label>
                <input type="text" name="organisation" value={form.organisation} onChange={handleChange} required placeholder="Organisation you are hired by" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700 text-sm">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 text-sm">Gender</label>
                <div className="flex gap-8 mt-1">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} className="accent-blue-500" />
                    Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} className="accent-blue-500" />
                    Female
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Other" checked={form.gender === "Other"} onChange={handleChange} className="accent-blue-500" />
                    Prefer not to say
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded text-sm transition duration-200 mb-4">Register</button>
            <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-2 text-gray-400 text-xs">Or continue with</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="flex gap-4 justify-center mb-4">
              <button type="button" className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center gap-2 text-sm"><span></span> Apple</button>
              <button type="button" className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center gap-2 text-sm"><span>G</span> Google</button>
              <button type="button" className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center gap-2 text-sm"><span>∞</span> Other</button>
            </div>
            <div className="text-center text-gray-600 text-sm">
              Already registered? <a href="/login" className="text-blue-600 underline hover:text-blue-800">Login here</a>
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

export default RegisterManager;
