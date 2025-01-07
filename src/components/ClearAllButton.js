import React from "react";

const ClearAllButton = ({ handleClear }) => {
  return (
    <button
      type="button"
      onClick={handleClear}
      className="bg-pink-500 text-white py-3 px-5 text-sm rounded-md hover:bg-pink-600"
    >
      Clear All
    </button>
  );
};

export default ClearAllButton;
