import React, { useState } from "react";

const NotificationPanel = () => {
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setNotifications([...notifications, { text: message, time: new Date().toLocaleString() }]);
      setMessage("");
    }
  };

  // Dummy workers data
  const workers = [
    { id: "W001", name: "Amit Singh", role: "Loader" },
    { id: "W002", name: "Sunil Das", role: "Supervisor" },
    { id: "W003", name: "Priya Sharma", role: "Technician" },
    { id: "W004", name: "Rahul Verma", role: "Driver" },
    { id: "W005", name: "Meena Kumari", role: "Safety Officer" },
  ];
  const [searchId, setSearchId] = useState("");

  const filteredWorkers = searchId.trim()
    ? workers.filter(w => w.id.toLowerCase().includes(searchId.trim().toLowerCase()))
    : workers;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 w-full max-w-md">      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Notify Workers</h2>      
      <form onSubmit={handleSend} className="flex gap-2 mb-4">        
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Send</button>
      </form>
      <div>
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications sent yet.</p>
        ) : (
          <ul className="space-y-2">
            {notifications.map((note, idx) => (
              <li key={idx} className="bg-blue-50 p-2 rounded text-gray-700">
                <span className="font-semibold">{note.text}</span>
                <span className="ml-2 text-xs text-gray-500">({note.time})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Workers List Section */}
      <div className="mt-6">        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Workers List</h3>        
        <input
          type="text"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
          placeholder="Search by Worker ID..."
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ul className="divide-y divide-gray-200">
          {filteredWorkers.length === 0 ? (
            <li className="py-2 text-gray-500">No workers found.</li>
          ) : (
            filteredWorkers.map(worker => (
              <li key={worker.id} className="py-2 flex flex-col">
                <span className="font-bold text-gray-700">{worker.name}</span>
                <span className="text-xs text-gray-500">ID: {worker.id} | Role: {worker.role}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NotificationPanel;
