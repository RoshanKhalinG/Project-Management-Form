import React, { useState, useEffect } from "react";

const GeneralInfo = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Get the current date in YYYY-MM-DD format
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const validateName = (nameInput) => {
    const words = nameInput.trim().split(" ");
    if (words.length < 2) {
      setError("Please enter your full name (first and last name).");
    } else if (words[1].length < 3) {
      setError("The last name must be at least 3 letters.");
    } else {
      setError(""); // Clear the error if validation passes
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateName(name); // Validate when the input loses focus
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateName(e.target.value); // Real-time validation
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="text-left">
        <label className="block text-white font-medium mb-1">Name</label>
        <input
          type="text"
          placeholder={isFocused ? "Enter Your Name" : "Enter Your name"}
          value={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleNameChange}
          className={`w-full bg-gray-700 text-gray-200 p-2 rounded-md border ${
            error ? "border-pink-500" : "border-gray-600"
          } focus:border-purple-500 focus:outline-none`}
        />
        {error && <p className="text-pink-500 text-sm mt-1">{error}</p>}
      </div>


      <div className="text-left">
        <label className="block text-white font-medium mb-1">Date</label>
        <input
          type="date"
          value={currentDate}
          onChange={handleDateChange}
          className="w-full bg-gray-700 text-gray-200 p-2 rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none"
        />
                <style jsx>{`
          input[type="date"]::-webkit-calendar-picker-indicator {
             filter: invert(100%) brightness(100%); /* Makes the icon white */
                        cursor: pointer;
          }
        `}</style>
      </div>


      <div className="text-left">
        <label className="block text-white font-medium mb-1">Designation</label>
        <select className="w-full bg-gray-700 text-gray-200 p-2 h-11 rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none">
          <option>Select designation</option>
          <option>Developer</option>
          <option>Manager</option>
          <option>Internship</option>
          <option>Designer</option>
          <option>Video Editor</option>
          <option>Social Media Manager</option>
          <option>Instructor</option>
          <option>Marketing</option>
          <option>Front Desk</option>
        </select>
      </div>
    </div>
  );
};

export default GeneralInfo;
