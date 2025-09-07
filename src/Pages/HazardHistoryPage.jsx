import React from "react";

const hazardHistory = [
  { date: "2025-09-01", prediction: "Safe", incidents: 0 },
  { date: "2025-09-02", prediction: "Warning", incidents: 1 },
  { date: "2025-09-03", prediction: "Danger", incidents: 2 },
  { date: "2025-09-04", prediction: "Safe", incidents: 0 },
];

const HazardHistoryPage = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Hazard History & Analytics</h1>
    <table className="w-full mb-8 border">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Prediction</th>
          <th className="py-2 px-4">Incidents</th>
        </tr>
      </thead>
      <tbody>
        {hazardHistory.map((h, idx) => (
          <tr key={idx} className="border-t">
            <td className="py-2 px-4">{h.date}</td>
            <td className={`py-2 px-4 font-bold ${h.prediction === 'Danger' ? 'text-red-600' : h.prediction === 'Warning' ? 'text-yellow-600' : 'text-green-600'}`}>{h.prediction}</td>
            <td className="py-2 px-4">{h.incidents}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HazardHistoryPage;
