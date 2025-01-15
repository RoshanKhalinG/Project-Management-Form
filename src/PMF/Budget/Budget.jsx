import React, { useState } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Remove any non-numeric characters except for '₹'
    const numericValue = value.replace(/[^\d]/g, '');
    // Update the state with 'Rs' prefixed
    setBudget(numericValue ? `Rs. ${numericValue}` : '');
  };

  return (
    <div className="mb-4">
      <label htmlFor="budget" className="block text-white font-medium mb-2 text-left">Budget:</label>
      <input
        id="budget"
        placeholder="Enter Budget"
        value={budget}
        onChange={handleInputChange}
        className="w-full p-2 bg-transparent border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
      />
    </div>
  );
};

export default Budget;
