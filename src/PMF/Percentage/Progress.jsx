import React, { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    // Remove any existing % sign to avoid duplication
    value = value.replace(/%/g, "").trim();
    
    // Ensure only numbers are accepted
    if (!isNaN(value) && value !== "") {
      // Ensure progress is between 0 and 100
      if (Number(value) <= 100) {
        setProgress(`${value}%`);
      } else {
        setProgress("100%");
      }
    } else if (value === "") {
      setProgress("");
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="progress" className="block text-white font-medium mb-2 text-left">Progress:</label>
      <input
        id="progress"
        placeholder="Enter Your Progress"
        value={progress}
        onChange={handleChange}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default Progress;
