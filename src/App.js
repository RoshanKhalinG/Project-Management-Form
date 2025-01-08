import React,{useState} from "react";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-700 to-black p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="dark:bg-gray-800  p-8 shadow-lg rounded-3xl w-full max-w-3xl"
      >
        {/* Form Title */}
        <FormHeading title="Project Management Form 🚀" />

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
            defaultValue={currentDate} // Pass current date as default value
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
            options={["Completed", "Incompleted", "Other"]}
            register={register}
            error={errors.currentStatus}
          />



          <InputField
            label="Progress (%)"
            name="progress"
            placeholder="Enter Progress"
            register={register}
            error={errors.progress}
          />


          <InputField
            label="Priority Level"
            name="priority"
            placeholder="Enter Priority Level"
            register={register}
            error={errors.priority}
          />

          <InputField
            label="Budget (NPR)"
            name="budget"
            placeholder="Enter Budget"
            register={register}
            error={errors.budget}
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
        <div className="col-span-2">
            <label className="block text-gray-300 font-medium mb-2">
              Tools & Technology
            </label>
            <div className="flex gap-2 mb-3">
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
              <input
                type="text"
                placeholder="Add custom tool"
                className="bg-gray-700 text-gray-200 p-2 rounded-md w-full"
                value={toolInput}
                onChange={(e) => setToolInput(e.target.value)}
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() => addTool(toolInput)}
              >
                Add
              </button>
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
        <div className="mt-6 flex justify-center gap-6">
          <SubmitButton label="Submit" />
          <ClearAllButton handleClear={handleClear} />
        </div>
      </form>
    </div>
  );
};

export default App;
