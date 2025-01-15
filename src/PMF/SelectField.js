import React, { useState } from "react";

const SelectField = ({ label, options, register, name, error }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showTextBox, setShowTextBox] = useState(false);
  const [additionalText, setAdditionalText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowTextBox(value === "Other");
    if (value !== "Other") {
      setAdditionalText(""); // Clear additional text if "Other" is deselected
    }
  };

  const handleRemove = () => {
    setShowTextBox(false);
    setAdditionalText("");
    setSelectedOption(""); // Reset the selected option
  };

  return (
    <div className="mb-6">
      <label className="block dark:text-white font-medium mb-2">{label}</label>
      <select
        {...register(name, { required: `${label} is required` })}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md bg-transparent focus:outline-none`}
        style={{ color: "gray" }}
        onChange={handleChange}
        value={selectedOption} // Bind to the state
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-pink-500 text-sm mt-1">{error.message}</p>}

      {showTextBox && (
        <div className="mt-2 relative">
          <textarea
            placeholder="Specify other"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
            value={additionalText}
            onChange={(e) => setAdditionalText(e.target.value)}
            rows={3} // Initial size
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full px-2 py-1 text-sm"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectField;
