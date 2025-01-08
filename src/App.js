import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useForm } from "react-hook-form";
import InputField from "./components/InputField";
import FormHeading from "./components/FormHeading";
import SubmitButton from "./components/SubmitButton";
import ClearAllButton from "./components/ClearAllButton";
import Progress from "./components/Percentage/Progress.jsx";
import Budget from "./components/Budget/Budget.jsx"
import CurrentStatus from "./components/DropDown/CurrentStatus.jsx"
import PriorityLevel from "./components/DropDown/PriorityLevel.jsx"




  const App = () => {
    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
    useEffect(() => {
      localStorage.setItem('current_theme', theme);
    }, [theme]);
  
    const {
      register,
      handleSubmit,
      reset, // To clear the form fields
      formState: { errors },
      trigger
    } = useForm();
  
    const [tools, setTools] = useState([]); // To hold selected tools
    const [toolInput, setToolInput] = useState(""); // To hold user input
  
    const predefinedTools = ["React", "Node.js", "MongoDB", "Python", "Java", "AWS"];
  
    const addTool = (tool) => {
      if (tool && !tools.includes(tool)) {
        setTools([...tools, tool]);
      }
      setToolInput(""); // Clear input after adding
    };
  
    const removeTool = (tool) => {
      setTools(tools.filter((t) => t !== tool));
    };
  
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];
  
    const onSubmit = (data) => {
      console.log(data);
      alert("Form Submitted Successfully!");
    };
  
    const handleClear = () => {
      reset(); // Clears all the form fields
    };
  return (
    <div className={`container ${theme}`}>
      {/*Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />


      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-700 to-black p-5">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-gray-800 p-6 sm:p-8 shadow-lg rounded-3xl w-full max-w-lg md:max-w-3xl"
  >
    {/* Form Title */}
    <FormHeading title="Project Management Form 🚀" />

    {/* Form Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
        onFocus={() => trigger("projectName")}
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
        defaultValue={currentDate}
      />

      <InputField
        label="End Date"
        name="endDate"
        type="date"
        register={register}
        error={errors.endDate}
      />

      <CurrentStatus />
      <Progress />
      <PriorityLevel />
      <Budget />

      <InputField
        label="Milestone Achieved"
        name="milestone"
        placeholder="Enter Achieved Milestone"
        register={register}
        error={errors.milestone}
      />

      <InputField
        label="Next Milestone"
        name="nextMilestone"
        placeholder="Enter Next Milestone"
        register={register}
        error={errors.nextMilestone}
      />

      <InputField
        label="Risks & Challenges"
        name="riskChallenge"
        placeholder="Enter Risks/Challenges"
        register={register}
        error={errors.riskChallenge}
      />

      <InputField
        label="Client/Stakeholder"
        name="client"
        placeholder="Enter Client"
        register={register}
        error={errors.client}
      />

{/* Tools & Technology Field */}
<div className="col-span-1 md:col-span-2">
  <label className="block text-gray-300 font-medium mb-2 text-left">
    Tools & Technology
  </label>
  <div className="flex flex-col sm:flex-row gap-2 mb-3 items-center">
    <select
      className="bg-gray-700 text-gray-200 p-2 rounded-md w-full"
      onChange={(e) => addTool(e.target.value)}
      value=""
    >
      <option value="" disabled>
        Select a tool/technology
      </option>
      {predefinedTools.map((tool, index) => (
        <option key={index} value={tool}>
          {tool}
        </option>
      ))}
    </select>
    <div className="flex w-full sm:w-auto gap-2 items-center">
      <input
        type="text"
        placeholder="Add custom tool"
        className="bg-gray-700 text-gray-200 p-2 rounded-md flex-grow"
        value={toolInput}
        onChange={(e) => setToolInput(e.target.value)}
      />
      <button
        type="button"
        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        onClick={() => addTool(toolInput)}
      >
        Add
      </button>
    </div>
  </div>
  {tools.length > 0 && (
    <div className="bg-gray-700 p-3 rounded-md">
      <p className="text-gray-300 mb-2">Selected Tools/Technologies:</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-600 text-white px-3 py-1 rounded-md flex items-center gap-2"
          >
            {tool}
            <button
              type="button"
              className="text-red-500 font-bold"
              onClick={() => removeTool(tool)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

    </div>

{/* Submit and Clear All Buttons */}
<div className="mt-6 flex justify-center items-center gap-2">
  <SubmitButton label="Submit" />
  <ClearAllButton handleClear={handleClear} />
</div>


  </form>
</div>
  



      {/* Footer */}
      <footer className={`footer ${theme}`}>
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
