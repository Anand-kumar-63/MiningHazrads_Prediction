import React, { useState } from "react";

const emergencyContacts = [
  { type: "Police Station", name: "Sector 5 Police", phone: "100", location: "Sector 5, City Center" },
  { type: "Police Station", name: "Central Police", phone: "101", location: "Main Road, Downtown" },
  { type: "Fire Department", name: "City Fire Dept.", phone: "102", location: "Fire Lane, City Center" },
  { type: "Fire Department", name: "North Fire Dept.", phone: "103", location: "North Avenue" },
  { type: "Hospital", name: "City Hospital", phone: "104", location: "Health Street, City Center" },
  { type: "Hospital", name: "Metro Hospital", phone: "105", location: "Metro Road" },
];

const EmergencyPage = () => {
  const [alertSent, setAlertSent] = useState(false);

  const handleSendAlert = () => {
    setAlertSent(true);
    // Here you would integrate with backend or notification system
    setTimeout(() => setAlertSent(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Emergency Contacts & Alert System</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nearby Emergency Numbers</h2>
        <ul className="divide-y divide-gray-200">
          {emergencyContacts.map((contact, idx) => (
            <li key={idx} className="py-4 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <span className="font-bold text-gray-700">{contact.type}:</span> {contact.name}
                <span className="block text-sm text-gray-500">{contact.location}</span>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="font-mono text-lg text-blue-700">{contact.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button
          onClick={handleSendAlert}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg transition duration-200"
        >
          Send Emergency Alert to All Labourers & Departments
        </button>
        {alertSent && (
          <div className="mt-4 text-green-600 font-semibold">Emergency alert sent to all labourers and nearby departments!</div>
        )}
      </div>
    </div>
  );
};

export default EmergencyPage;
