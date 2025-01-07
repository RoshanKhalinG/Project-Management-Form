import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-purple-600 hover:bg-pink-500 text-white font-semibold text-white py-3 px-5 text-sm rounded-md hover:bg-green-400"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
