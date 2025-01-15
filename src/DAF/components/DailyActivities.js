import React from "react";

const DailyActivities = ({ dailyActivities, setDailyActivities }) => {
  const addRow = () => {
    const newActivity = {
      id: Date.now(),
      startTime: "",
      endTime: "",
      totalHours: "",
      activity: "",
      remarks: "",
      remarksText: "", 
    };
    setDailyActivities((prevActivities) => [...prevActivities, newActivity]);
  };

  const removeRow = (id) => {
    if (dailyActivities.length > 1) {
      setDailyActivities((prevActivities) =>
        prevActivities.filter((activity) => activity.id !== id)
      );
    }
  };

  const calculateTotalHours = (startTime, endTime) => {
    if (startTime && endTime) {
      const [startHours, startMinutes] = startTime.split(":").map(Number);
      const [endHours, endMinutes] = endTime.split(":").map(Number);

      const start = startHours * 60 + startMinutes; 
      const end = endHours * 60 + endMinutes; 

      const duration = end - start; 
      if (duration > 0) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}.${minutes.toString().padStart(2, "0")}`; 
      }
    }
    return "";
  };

  const handleTimeChange = (id, type, value) => {
    setDailyActivities((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedActivity = { ...item, [type]: value };
          if (type === "startTime" || type === "endTime") {
            updatedActivity.totalHours = calculateTotalHours(
              updatedActivity.startTime,
              updatedActivity.endTime
            );
          }
          return updatedActivity;
        }
        return item;
      })
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-100">
        Daily Activities
      </h2>
      {dailyActivities.map((activity) => (
        
        <div
          key={activity.id}
          
          className="bg-gray-700 p-4 rounded-lg mb-4 border border-gray-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">


            {/* Start Time */}
            <div>
            <style jsx>{`
                    .custom-time-picker::-webkit-calendar-picker-indicator {
                      filter: invert(100%) brightness(100%); /* Makes the icon white */
                      cursor: pointer;
                    }
            `}</style>

                    <div className="flex flex-col text-left">
                      <label
                        htmlFor={`start-time-${activity.id}`}
                        className="block text-gray-100 mb-1 "
                      >
                        Start Time
                      </label>
                      <input
                        id={`start-time-${activity.id}`}
                        type="time"
                        value={activity.startTime}
                        className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600 w-full custom-time-picker focus:border-purple-500 focus:outline-none"
                        onChange={(e) =>
                          handleTimeChange(activity.id, "startTime", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* End Time */}
                <div className="flex flex-col text-left">
                    <label
                      htmlFor={`end-time-${activity.id}`}
                      className="block text-gray-100 mb-1"
                    >
                      End Time
                    </label>
                    <input
                      id={`end-time-${activity.id}`}
                      type="time"
                      value={activity.endTime}
                      className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600 w-full custom-time-picker  focus:border-purple-500 focus:outline-none"
                      onChange={(e) =>
                        handleTimeChange(activity.id, "endTime", e.target.value)
                      }
                    />
                    <style jsx>{`
                      .custom-time-picker::-webkit-calendar-picker-indicator {
                        filter: invert(100%) brightness(100%); /* Makes the icon white */
                        cursor: pointer;
                      }
                    `}</style>
                  </div>

              {/* Total Hours */}
              <div className="flex flex-col text-left">
                <label className="block text-gray-100 mb-1">Total Hours</label>
                <input
                  type="text"
                  value={activity.totalHours ? `${activity.totalHours} hrs` : ""} // Append "hrs" to the total hours value
                  readOnly
                  placeholder="Hrs" // Placeholder in gray
                  className="bg-gray-800 text-gray-200 p-2 rounded-md border border-gray-600 w-full focus:border-purple-500 focus:outline-none placeholder-gray-400"
                />
              </div>



            {/* Activity */}
            <div className="flex flex-col text-left">
              <label className="block text-gray-100 mb-1 text-sm">Activity</label>
              <textarea
                value={activity.activity}
                placeholder="Activity"
                rows="2" // Set default height
                className="bg-gray-800 text-gray-200 text-sm p-2 w-full h-11 rounded-md border border-gray-600 resize-y  focus:border-purple-500 focus:outline-none"
                onChange={(e) =>
                  setDailyActivities((prev) =>
                    prev.map((item) =>
                      item.id === activity.id
                        ? { ...item, activity: e.target.value }
                        : item
                    )
                  )
                }
              />
            </div>

            {/* Remarks */}
            <div className="flex flex-col text-left">
              <label className="block text-gray-100 mb-1 text-sm">Remarks</label>
              <select
                value={activity.remarks}
                onChange={(e) => {
                  setDailyActivities((prev) =>
                    prev.map((item) =>
                      item.id === activity.id
                        ? { ...item, remarks: e.target.value, remarksText: "" }
                        : item
                    )
                  );
                }}
                className="bg-gray-800 text-gray-200 text-sm p-2 h-11 rounded-md border border-gray-600  focus:border-purple-500 focus:outline-none"
              >
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Other">Other</option>
              </select>

              {/* Conditionally show the text box if "Other" is selected */}
              {activity.remarks === "Other" && (
                <input
                  type="text"
                  value={activity.remarksText || ""} // Separate state for the text input
                  onChange={(e) =>
                    setDailyActivities((prev) =>
                      prev.map((item) =>
                        item.id === activity.id
                          ? { ...item, remarksText: e.target.value } // Store the custom text
                          : item
                      )
                    )
                  }
                  placeholder="Enter your remark"
                  className="bg-gray-800 text-gray-200 text-sm p-1 h-8 rounded-md border border-gray-600 mt-2"
                />
              )}
            </div>
          </div>

          {/* Remove Button */}
          <div className="flex justify-end mt-2">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              onClick={() => removeRow(activity.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Add Activity Button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
        onClick={(e) => {
          e.preventDefault();
          addRow();
        }}
      >
        Add Activity
      </button>
    </div>
  );
};

export default DailyActivities;
