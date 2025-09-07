import React, { useState } from "react";

const dummyQueries = [
  {
    question: "How do I register as a worker?",
    answer: "Go to the Register Worker page and fill out the form with your details."
  },
  {
    question: "How can I contact the manager?",
    answer: "You can find manager contact details on the Manager Dashboard."
  },
  {
    question: "What documents are required for registration?",
    answer: "You need your Adhaar ID, phone number, and email address."
  }
];

const Contactus = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-mono p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h1>
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">Dummy Number: <span className="font-semibold">+91 98765 43210</span></p>
          <p className="text-lg text-gray-700">Dummy Email: <span className="font-semibold">support@sahayak.com</span></p>
        </div>
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block mb-2 text-gray-700 text-sm">Your Query</label>
          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            required
          />
          <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit Query</button>
          {submitted && <p className="mt-2 text-green-600">Your query has been submitted!</p>}
        </form>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Recently Asked Queries</h2>
          <ul className="space-y-4">
            {dummyQueries.map((q, idx) => (
              <li key={idx} className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-gray-700">Q: {q.question}</p>
                <p className="text-gray-600">A: {q.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
