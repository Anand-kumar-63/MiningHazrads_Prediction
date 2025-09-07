import React, { useState } from "react";

// Dummy ML prediction function
function getPrediction(imageUrl) {
  // Simulate ML output
  const hazardLevels = ["Safe", "Warning", "Danger"];
  return hazardLevels[Math.floor(Math.random() * hazardLevels.length)];
}

const PitImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadUrl, setUploadUrl] = useState("");
  const [predictions, setPredictions] = useState({});

  const handleUpload = (e) => {
    e.preventDefault();
    if (!uploadUrl.trim()) return;
    setImages([uploadUrl, ...images]);
    setPredictions(prev => ({ ...prev, [uploadUrl]: getPrediction(uploadUrl) }));
    setUploadUrl("");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Pit Image Upload & Hazard Prediction</h1>
      <form onSubmit={handleUpload} className="flex gap-4 mb-8">
        <input
          type="url"
          value={uploadUrl}
          onChange={e => setUploadUrl(e.target.value)}
          placeholder="Paste image URL of pit..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded">Upload</button>
      </form>
      <div>
        {images.length === 0 ? (
          <p className="text-gray-500 text-center">No pit images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center">
                <img src={img} alt={`Pit ${idx + 1}`} className="w-full h-48 object-cover rounded mb-3 border-2 border-blue-300" />
                <div className="text-lg font-semibold mb-2">Hazard Prediction:</div>
                <div className={`text-xl font-bold px-4 py-2 rounded ${predictions[img] === 'Safe' ? 'bg-green-100 text-green-700' : predictions[img] === 'Warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{predictions[img]}</div>
                {predictions[img] === 'Danger' && (
                  <div className="mt-2 text-red-600 font-bold">Alert! Immediate action required.</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PitImageUpload;
