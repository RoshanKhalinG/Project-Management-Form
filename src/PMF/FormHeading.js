import React from "react";

const FormHeading = ({ title}) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
      {/* {subtitle && <p className="text-gray-600">{subtitle}</p>} */}
    </div>
  );
};

export default FormHeading;
