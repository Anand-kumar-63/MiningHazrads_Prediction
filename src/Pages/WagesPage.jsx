import React, { useState } from "react";

const wagesData = [
  { id: 1, name: "Ravi Kumar", amount: 12000, status: "Paid", date: "2025-09-01" },
  { id: 2, name: "Sunil Singh", amount: 11000, status: "Pending", date: "2025-09-01" },
  { id: 3, name: "Amit Patel", amount: 11500, status: "Paid", date: "2025-08-01" },
];

const WagesPage = () => {
  const [wages, setWages] = useState(wagesData);
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Wages System</h1>
      <table className="w-full mb-8 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {wages.map((w, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-4">{w.name}</td>
              <td className="py-2 px-4">₹{w.amount}</td>
              <td className={`py-2 px-4 font-bold ${w.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>{w.status}</td>
              <td className="py-2 px-4">{w.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WagesPage;
