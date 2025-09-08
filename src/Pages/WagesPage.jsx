import React, { useState } from "react";

export const wagesData = [
  { id: 1, name: "Ravi Kumar", amount: 12000, status: "Paid", date: "2025-09-01" },
  { id: 2, name: "Sunil Singh", amount: 11000, status: "Pending", date: "2025-09-01" },
  { id: 3, name: "Amit Patel", amount: 11500, status: "Paid", date: "2025-08-01" },
  { id: 4, name: "Meena Sharma", amount: 10500, status: "Paid", date: "2025-09-01" },
  { id: 5, name: "Vikram Joshi", amount: 13000, status: "Pending", date: "2025-09-01" },
  { id: 6, name: "Priya Singh", amount: 12500, status: "Paid", date: "2025-08-01" },
  { id: 7, name: "Rakesh Yadav", amount: 11800, status: "Paid", date: "2025-07-01" },
  { id: 8, name: "Suman Kumari", amount: 11200, status: "Pending", date: "2025-09-01" },
  { id: 9, name: "Deepak Verma", amount: 12700, status: "Paid", date: "2025-08-01" },
  { id: 10, name: "Anita Das", amount: 10900, status: "Paid", date: "2025-07-01" },
];

const WagesPage = () => {
  const [wages, setWages] = useState(wagesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  // Summary stats
  const totalPaid = wages.filter(w => w.status === "Paid").reduce((acc, w) => acc + w.amount, 0);
  const totalPending = wages.filter(w => w.status === "Pending").reduce((acc, w) => acc + w.amount, 0);
  const paidCount = wages.filter(w => w.status === "Paid").length;
  const pendingCount = wages.filter(w => w.status === "Pending").length;
  const avgWage = Math.round(wages.reduce((acc, w) => acc + w.amount, 0) / wages.length);
  // Assume manager starts with 200,000 INR for demo
  const managerFunds = 200000 - totalPaid;
  const workersLeft = wages.filter(w => w.status === "Pending");

  // Filter wages by search
  const filteredWages = searchTerm
    ? wages.filter(w => w.name.toLowerCase().includes(searchTerm.toLowerCase()) || String(w.id) === searchTerm)
    : wages;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl mt-10 border border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-green-700 text-center">Wages System</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by name or ID"
          className="px-4 py-2 border border-gray-300 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">Wages System</h1>
      <p className="text-center text-gray-600 mb-6">Track payments, pending wages, and trends for all labourers.</p>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-green-50 rounded-lg p-4 shadow text-center">
          <div className="text-lg font-bold text-green-700">Total Paid</div>
          <div className="text-2xl font-extrabold text-green-800">₹{totalPaid}</div>
          <div className="text-xs text-gray-500">{paidCount} payments</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 shadow text-center">
          <div className="text-lg font-bold text-red-700">Total Pending</div>
          <div className="text-2xl font-extrabold text-red-800">₹{totalPending}</div>
          <div className="text-xs text-gray-500">{pendingCount} pending</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 shadow text-center">
          <div className="text-lg font-bold text-blue-700">Average Wage</div>
          <div className="text-2xl font-extrabold text-blue-800">₹{avgWage}</div>
          <div className="text-xs text-gray-500">per labourer</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 shadow text-center">
          <div className="text-lg font-bold text-yellow-700">Last Payment Date</div>
          <div className="text-xl font-bold text-yellow-800">{wages[0].date}</div>
          <div className="text-xs text-gray-500">Most recent</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 shadow text-center">
          <div className="text-lg font-bold text-purple-700">Manager's Funds Left</div>
          <div className="text-2xl font-extrabold text-purple-800">₹{managerFunds}</div>
          <div className="text-xs text-gray-500">After payments</div>
        </div>
      </div>
  <div className="overflow-x-auto mb-8">
        <table className="w-full mb-8 border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredWages.map((w, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-4 font-semibold text-gray-800">{w.name}</td>
                <td className="py-2 px-4 text-blue-700 font-bold">₹{w.amount}</td>
                <td className={`py-2 px-4 font-bold ${w.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>{w.status}</td>
                <td className="py-2 px-4 text-gray-600">{w.date}</td>
                <td className="py-2 px-4">
                  {w.status === 'Pending' && (
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                      onClick={() => setSelectedPayment(w)}
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelectedPayment(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Payment Gateway</h2>
            <div className="mb-2 text-gray-700">Pay <span className="font-bold">{selectedPayment.name}</span> (ID: {selectedPayment.id})</div>
            <div className="mb-4 text-lg font-bold text-blue-700">Amount: ₹{selectedPayment.amount}</div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Select Payment Method</label>
              <select className="w-full px-3 py-2 border rounded">
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>
              </select>
            </div>
            <button
              className="w-full py-2 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition"
              onClick={() => { setSelectedPayment(null); alert('Payment Successful (Demo)!'); }}
            >
              Pay ₹{selectedPayment.amount}
            </button>
          </div>
        </div>
      )}
      <div className="bg-red-50 rounded-lg p-4 shadow mb-4">
        <h2 className="text-lg font-bold text-red-700 mb-2">Workers Left to Get Wages ({workersLeft.length})</h2>
        {workersLeft.length === 0 ? (
          <div className="text-green-600 font-semibold">All workers have been paid!</div>
        ) : (
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {workersLeft.map(w => (
              <li key={w.id} className="font-semibold">{w.name} <span className="text-xs text-gray-500">(₹{w.amount})</span></li>
            ))}
          </ul>
        )}
      </div>
      <div className="bg-gray-50 rounded-lg p-4 shadow mt-4">
        <h2 className="text-lg font-bold text-gray-700 mb-2">Wage Facts</h2>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          <li>Wages are paid monthly, with most payments completed on the 1st of each month.</li>
          <li>Pending wages are highlighted for quick action by managers.</li>
          <li>Average wage per labourer is ₹{avgWage}.</li>
          <li>Last payment was made to {wages[0].name} on {wages[0].date}.</li>
          <li>All transactions are securely logged for audit and compliance.</li>
        </ul>
      </div>
    </div>
  );
};

export default WagesPage;
