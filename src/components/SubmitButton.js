import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-[180px] px-4 py-3 text-center text-white rounded-[20px] text-lg font-semibold bg-purple-600 shadow-md transition-all duration-400 ease-in-out transform hover:scale-105 hover:shadow-lg text-white font-semibold text-white py-3 px-5 text-sm rounded-md"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
