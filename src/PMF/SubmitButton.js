import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-auto px-3 py-2 text-center text-white rounded-md text-sm font-medium bg-purple-600 shadow-md transition-all duration-300 ease-in-out hover:bg-purple-700"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
