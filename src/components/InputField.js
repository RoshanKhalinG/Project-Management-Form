import React from "react";

const InputField = ({ label, type = "text", placeholder, register, name, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        {...register(name, { required: `${label} is required` })}
        type={type}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
