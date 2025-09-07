
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const MineCharts = ({ production, safetyIncidents }) => {
  const prodData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Production (tons)",
        data: production,
        fill: false,
        backgroundColor: "#2563eb",
        borderColor: "#2563eb",
        tension: 0.4,
      },
    ],
  };

  const safetyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Safety Incidents",
        data: safetyIncidents,
        backgroundColor: "#f87171",
      },
    ],
  };

  return (
    <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Weekly Production</h3>
        <Line data={prodData} />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Safety Incidents</h3>
        <Bar data={safetyData} />
      </div>
    </div>
  );
};

export default MineCharts;
