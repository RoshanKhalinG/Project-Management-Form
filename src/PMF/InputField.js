import React from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
  defaultValue,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block dark:text-white font-medium mb-2 text-left"
      >
        {label}
      </label>
      <input
        {...register(name, { required: `${label} is required` })}
        type={type}
        className={`w-full p-2 bg-transparent border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
        style={{
          color: "white",
        }}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {type === "date" && (
        <style jsx>{`
          input[type="date"]::-webkit-calendar-picker-indicator {
                      filter: invert(100%) brightness(100%); /* Makes the icon white */
                      cursor: pointer;
          }
        `}</style>
      )}
      {error && <p className="text-pink-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
