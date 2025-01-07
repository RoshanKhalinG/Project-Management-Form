import React from "react";

const SelectField = ({ label, options, register, name, error }) => {
  return (
    <div className="mb-6">
      <label className="block dark:text-white font-medium mb-2">{label}</label>
      <select
        {...register(name, { required: `${label} is required` })}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md bg-transparent focus:outline-none`}
        style={{ color: 'gray' }}
      >
        <option className="" value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-pink-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default SelectField;
