import React from "react";

const ClearAllButton = ({ handleClear }) => {
  return (
    <button
      type="button"
      onClick={handleClear}
      className="w-auto px-3 py-2 text-center text-white rounded-md text-sm font-medium bg-gray-700 shadow-md transition-all duration-300 ease-in-out hover:bg-gray-800"
    >
      Clear All
    </button>
  );
};

export default ClearAllButton;
