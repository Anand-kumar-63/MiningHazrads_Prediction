
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import labourersData from './data';
import { wagesData } from '../WagesPage';



const Labourers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchId, setSearchId] = useState("");
  const [messages, setMessages] = useState({}); // { [labourerId]: [msg1, msg2, ...] }
  const [messageInputs, setMessageInputs] = useState({}); // { [labourerId]: "text" }
  const itemsPerPage = 10;

  // Merge wage status for demo (real app: fetch from backend)
  const getWageStatus = (id) => {
    const wage = wagesData.find(w => w.id === id);
    return wage ? wage.status : "Unknown";
  };

  // Filter by search
  const filteredLabourers = searchId
    ? labourersData.filter(l => l.id === Number(searchId))
    : labourersData;

  // Calculate the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLabourers = filteredLabourers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredLabourers.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
    setCurrentPage(1);
  };

  const handleMessageInputChange = (id, value) => {
    setMessageInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleSendMessage = (id) => {
    const msg = messageInputs[id]?.trim();
    if (!msg) return;
    setMessages(prev => ({
      ...prev,
      [id]: prev[id] ? [...prev[id], msg] : [msg]
    }));
    setMessageInputs(prev => ({ ...prev, [id]: "" }));
  };

  return (
  <div className="labourers-container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Labourers</h1>
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="search-labourer-id" className="mb-2 text-lg font-medium text-gray-700">Search Labourer by ID</label>
        <input
          id="search-labourer-id"
          type="number"
          min="1"
          max="100"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Enter Labourer ID"
          className="px-4 py-2 border border-gray-300 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {currentLabourers.length === 0 ? (
          <div className="col-span-2 text-center text-gray-500 text-lg">No labourer found with that ID.</div>
        ) : (
          currentLabourers.map((labourer) => (
            <div
              key={labourer.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-200 cursor-pointer hover:bg-blue-50"
            >
              <div className="flex gap-4 items-center mb-2">
                <img
                  src={labourer.image}
                  alt={labourer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-300 shadow"
                  onError={(e) => { e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg'; }}
                />
                <div>
                  <div className="text-lg font-semibold text-blue-700">{labourer.name}</div>
                  <div className="text-gray-600">ID: <span className="font-mono">{labourer.id}</span></div>
                  <div className="text-gray-600">Skill: <span className="font-semibold">{labourer.skill}</span></div>
                  <div className={`mb-1 px-2 py-1 rounded text-xs font-bold ${labourer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{labourer.status}</div>
                </div>
                <div className={`ml-auto px-2 py-1 rounded text-xs font-bold ${getWageStatus(labourer.id) === 'Paid' ? 'bg-green-200 text-green-800' : getWageStatus(labourer.id) === 'Pending' ? 'bg-red-200 text-red-800' : 'bg-gray-200 text-gray-800'}`}>
                  Wage: {getWageStatus(labourer.id)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-gray-600">Age: <span className="font-semibold">{labourer.age}</span></div>
                <div className="text-gray-600">Experience: <span className="font-semibold">{labourer.experience} years</span></div>
                <div className="text-gray-600">Location: <span className="font-semibold">{labourer.location}</span></div>
              </div>
              <div className="text-gray-700 mb-2 text-sm italic">{labourer.bio}</div>
              <Link to={`/labourers/${labourer.id}`} className="text-blue-500 hover:underline text-sm mb-2">View Details</Link>
            </div>
          ))
        )}
      </div>
      {filteredLabourers.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-lg font-mono">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Labourers