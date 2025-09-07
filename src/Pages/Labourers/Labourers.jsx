
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import labourersData from './data';



const Labourers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchId, setSearchId] = useState("");
  const [messages, setMessages] = useState({}); // { [labourerId]: [msg1, msg2, ...] }
  const [messageInputs, setMessageInputs] = useState({}); // { [labourerId]: "text" }
  const itemsPerPage = 10;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {currentLabourers.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500 text-lg">No labourer found with that ID.</div>
        ) : (
          currentLabourers.map((labourer) => (
            <Link
              to={`/labourers/${labourer.id}`}
              key={labourer.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-shadow duration-200 cursor-pointer hover:bg-blue-50"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img
                src={labourer.image}
                alt={labourer.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-blue-300 shadow"
                onError={(e) => { e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg'; }}
              />
              <div className="text-xl font-semibold text-blue-700 mb-2">{labourer.name}</div>
              <div className="text-gray-600 mb-1">ID: <span className="font-mono">{labourer.id}</span></div>
              <div className="text-gray-600 mb-1">Skill: <span className="font-semibold">{labourer.skill}</span></div>
              <div className={`mb-2 px-2 py-1 rounded text-xs font-bold ${labourer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{labourer.status}</div>
              <div className="text-gray-600 mb-1">Age: <span className="font-semibold">{labourer.age}</span></div>
              <div className="text-gray-600 mb-1">Experience: <span className="font-semibold">{labourer.experience} years</span></div>
              <div className="text-gray-600 mb-1">Location: <span className="font-semibold">{labourer.location}</span></div>
              <div className="text-gray-700 mt-2 text-center text-sm italic">{labourer.bio}</div>
              {/* Message sending system */}
              <div className="w-full mt-4">
                <input
                  type="text"
                  value={messageInputs[labourer.id] || ""}
                  onChange={e => handleMessageInputChange(labourer.id, e.target.value)}
                  placeholder="Type a message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  onClick={e => e.stopPropagation()}
                />
                <button
                  onClick={e => { e.preventDefault(); e.stopPropagation(); handleSendMessage(labourer.id); }}
                  className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
                {messages[labourer.id] && messages[labourer.id].length > 0 && (
                  <div className="mt-2 w-full">
                    <div className="text-xs font-bold text-gray-700 mb-1">Messages sent:</div>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {messages[labourer.id].map((msg, idx) => (
                        <li key={idx}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Link>
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