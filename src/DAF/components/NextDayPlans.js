import React from "react";

const NextDayPlans = ({ nextDayPlans, setNextDayPlans }) => {
  // Function to add a new row
  const addRow = () => {
    const newPlan = {
      id: Date.now(),
      coordination: "",
      startTime: "",
      endTime: "",
      totalHours: "",
      toDo: "",
    };
    // Update the state to add the new plan
    setNextDayPlans((prevPlans) => [...prevPlans, newPlan]);
  };

  // Function to remove a specific row by its ID
  const removeRow = (id) => {
    if (nextDayPlans.length > 1) {
      setNextDayPlans((prevPlans) =>
        prevPlans.filter((plan) => plan.id !== id)
      );
    }
  };

  // Function to calculate total hours based on start and end time
  const calculateTotalHours = (startTime, endTime) => {
    if (!startTime || !endTime) return "";

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let diff = (end - start) / 1000 / 3600; 

    if (diff < 0) {
      diff += 24; 
    }

    return diff.toFixed(2); 
  };

  // Handle changes to start and end times
  const handleTimeChange = (id, field, value) => {
    setNextDayPlans((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };

          // Calculate total hours if both startTime and endTime are provided
          if (updatedItem.startTime && updatedItem.endTime) {
            updatedItem.totalHours = calculateTotalHours(updatedItem.startTime, updatedItem.endTime);
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-100">
        Next Day Planning
      </h2>
      {nextDayPlans.map((plan) => (
        <div
          key={plan.id}
          className="bg-gray-700 p-4 rounded-lg mb-4 border border-gray-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Coordination */}
            <div className="flex flex-col text-left">
              <label
                htmlFor={`coordination-${plan.id}`}
                className="block text-gray-100 mb-1"
              >
                Coordination
              </label>
              <input
                id={`coordination-${plan.id}`}
                type="text"
                value={plan.coordination}
                placeholder="Coordination"
                className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600  focus:border-purple-500 focus:outline-none"
                onChange={(e) =>
                  setNextDayPlans((prev) =>
                    prev.map((item) =>
                      item.id === plan.id
                        ? { ...item, coordination: e.target.value }
                        : item
                    )
                  )
                }
              />
            </div>

                {/* Start Time */}
                <div className="flex flex-col text-left">
                  <label
                    htmlFor={`start-time-${plan.id}`}
                    className="block text-gray-100 mb-1"
                  >
                    Start Time
                  </label>
                  <input
                    id={`start-time-${plan.id}`}
                    type="time"
                    value={plan.startTime}
                    className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600 custom-time-picker  focus:border-purple-500 focus:outline-none"
                    onChange={(e) =>
                      handleTimeChange(plan.id, "startTime", e.target.value)
                    }
                  />
                  <style jsx>{`
                    .custom-time-picker::-webkit-calendar-picker-indicator {
                      filter: invert(100%) brightness(100%); /* Makes the icon white */
                      cursor: pointer;
                    }
                  `}</style>
                </div>

                {/* End Time */}
                <div className="flex flex-col text-left">
                  <label
                    htmlFor={`end-time-${plan.id}`}
                    className="block text-gray-100 mb-1"
                  >
                    End Time
                  </label>
                  <input
                    id={`end-time-${plan.id}`}
                    type="time"
                    value={plan.endTime}
                    className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600 custom-time-picker  focus:border-purple-500 focus:outline-none"
                    onChange={(e) =>
                      handleTimeChange(plan.id, "endTime", e.target.value)
                    }
                  />
                </div>


                {/* Total Hours */}
                <div className="flex flex-col text-left">
                  <label
                    htmlFor={`total-hours-${plan.id}`}
                    className="block text-gray-100 mb-1"
                  >
                    Total Hours
                  </label>
                  <input
                    id={`total-hours-${plan.id}`}
                    type="text"
                    value={plan.totalHours ? `${plan.totalHours} hrs` : ""}
                    className="bg-gray-800 text-gray-200 p-2 h-11 rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none placeholder-gray-400"
                    placeholder="Hrs"
                    readOnly
                  />
                </div>


            {/* To Do */}
            <div className="flex flex-col text-left">
              <label
                htmlFor={`to-do-${plan.id}`}
                className="block text-gray-100 mb-1 "
              >
                To Do
              </label>
              <textarea
                id={`to-do-${plan.id}`}
                value={plan.toDo}
                placeholder="To Do"
                className="bg-gray-800 text-gray-200 p-2 h-11 rounded-md border border-gray-600  focus:border-purple-500 focus:outline-none"
                onChange={(e) =>
                  setNextDayPlans((prev) =>
                    prev.map((item) =>
                      item.id === plan.id
                        ? { ...item, toDo: e.target.value }
                        : item
                    )
                  )
                }
              />
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-md"
              onClick={() => removeRow(plan.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission
          addRow(); // Call the addRow function
        }}
      >
        Add Plan
      </button>
    </div>
  );
};

export default NextDayPlans;
