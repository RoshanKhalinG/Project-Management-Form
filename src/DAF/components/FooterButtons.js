import React from "react";

const FooterButtons = ({ clearAll }) => {
  return (
    <div className="flex justify-end space-x-4">
      <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
        Generate PDF
      </button>
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded-md"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default FooterButtons;
