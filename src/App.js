import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 shadow-lg rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Project Management Form
        </h2>

        {/* Name Field */}
        <InputField
          label="Name"
          name="name"
          placeholder="Enter your name"
          register={register}
          error={errors.name}
        />

        {/* Project ID */}
        <InputField
          label="Project ID"
          name="projectId"
          placeholder="Enter Project ID"
          register={register}
          error={errors.projectId}
        />

        {/* Project Name */}
        <InputField
          label="Project Name"
          name="projectName"
          placeholder="Enter Project Name"
          register={register}
          error={errors.projectName}
        />

        {/* Project Manager */}
        <InputField
          label="Project Manager"
          name="projectManager"
          placeholder="Enter Project Manager"
          register={register}
          error={errors.projectManager}
        />

        {/* Team Member */}
        <InputField
          label="Team Member"
          name="teamMember"
          placeholder="Enter Team Member Names"
          register={register}
          error={errors.teamMember}
        />

        {/* Start Date */}
        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          register={register}
          error={errors.startDate}
        />

        {/* End Date */}
        <InputField
          label="End Date"
          name="endDate"
          type="date"
          register={register}
          error={errors.endDate}
        />

        {/* Current Status */}
        <SelectField
          label="Current Status"
          name="currentStatus"
          options={["In Progress", "Completed", "On Hold"]}
          register={register}
          error={errors.currentStatus}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
