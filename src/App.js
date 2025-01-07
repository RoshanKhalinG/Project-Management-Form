import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import FormHeading from "./components/FormHeading";
import SubmitButton from "./components/SubmitButton";
import ClearAllButton from "./components/ClearAllButton";

const App = () => {
  const {
    register,
    handleSubmit,
    reset, // To clear the form fields
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully!");
  };

  const handleClear = () => {
    reset(); // Clears all the form fields
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-700 to-black p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg rounded-md w-full max-w-3xl"
      >
        {/* Form Title */}
        <FormHeading title="Project Registration Form" />

        {/* Form Fields - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <InputField
            label="Name"
            name="name"
            placeholder="Enter your name"
            register={register}
            error={errors.name}
          /> */}

          <InputField
            label="Project ID"
            name="projectId"
            placeholder="Enter Project ID"
            register={register}
            error={errors.projectId}
          />

          <InputField
            label="Project Name"
            name="projectName"
            placeholder="Enter Project Name"
            register={register}
            error={errors.projectName}
          />

          <InputField
            label="Project Manager"
            name="projectManager"
            placeholder="Enter Project Manager"
            register={register}
            error={errors.projectManager}
          />

          <InputField
            label="Team Member"
            name="teamMember"
            placeholder="Enter Team Member Names"
            register={register}
            error={errors.teamMember}
          />

          <InputField
            label="Start Date"
            name="startDate"
            type="date"
            register={register}
            error={errors.startDate}
          />

          <InputField
            label="End Date"
            name="endDate"
            type="date"
            register={register}
            error={errors.endDate}
          />

         <SelectField
            label="Current Status"
            name="currentStatus"
            options={["Completed", "Uncompleted", "Other"]}
            register={register}
            error={errors.currentStatus}
          />
          <InputField
            label="Progress (%)"
            name="progress"
            placeholder="Enter Progress in %"
            register={register}
            error={errors.progress}
          />
          <InputField
            label="Priority Level"
            name="priority"
            placeholder="Enter Priority Level"
            register={register}
            error={errors.priorityLevel}
          />
          <InputField
            label="Budjet(NPR)"
            name="budjet"
            placeholder="Enter Budget"
            register={register}
            error={errors.budjet}

          />          
          <InputField
            label="Milestone Achieved"
            name="milestone"
            placeholder="Enter Achieved Milestone"
            register={register}
            error={errors.milestone}
          />
          <InputField
            label="Next Milestone"
            name="nextmilestone"
            placeholder="Enter Next Milestone"
            register={register}
            error={errors.nextmilestone}
          />
          <InputField
            label="Risks & Challenges"
            name="riskchallenge"
            placeholder="Enter Risks/Challenges"
            register={register}
            error={errors.riskchallenge}
          />
          <InputField
            label="Client/stakeholder"
            name="client"
            placeholder="Enter Client "
            register={register}
            error={errors.client}
          />
          <InputField
            label="Tools & Technology"
            name="tools"
            placeholder="Enter Required Tools and Technology "
            register={register}
            error={errors.tools}
          />          
        </div>

        {/* Submit and Clear All Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <SubmitButton label="Submit" />
          <ClearAllButton handleClear={handleClear} />
        </div>
      </form>
    </div>
  );
};

export default App;
