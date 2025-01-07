import React from "react";

const ClearAllButton = ({ handleClear }) => {
  return (
    <button
      type="button"
      onClick={handleClear}
      className="w-[180px] px-4 py-3 text-center text-white rounded-[20px] text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-900 shadow-md transition-all duration-400 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 active:translate-y-[1px] active:shadow-none text-white py-3 px-5 text-sm rounded-md hover:bg-pink-600"
    >
      Clear All
    </button>
  );
};

export default ClearAllButton;
