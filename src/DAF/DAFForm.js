import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import DailyActivities from "./components/DailyActivities";
import NextDayPlans from "./components/NextDayPlans";
import FooterButtons from "./components/FooterButtons";

const DAF = () => {
  const [dailyActivities, setDailyActivities] = useState([
    {
      id: 1,
      startTime: "",
      endTime: "",
      totalHours: "",
      activity: "",
      remarks: "",
    },
  ]);

  const [nextDayPlans, setNextDayPlans] = useState([
    {
      id: 1,
      coordination: "",
      startTime: "",
      endTime: "",
      totalHours: "",
      toDo: "",
    },
  ]);

  const addRow = (setFunction, dataStructure) => {
    setFunction((prev) => [...prev, { id: prev.length + 1, ...dataStructure }]);
  };

  const removeRow = (setFunction, id) => {
    setFunction((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setDailyActivities([
      {
        id: 1,
        startTime: "",
        endTime: "",
        totalHours: "",
        activity: "",
        remarks: "",
      },
    ]);
    setNextDayPlans([
      {
        id: 1,
        coordination: "",
        startTime: "",
        endTime: "",
        totalHours: "",
        toDo: "",
      },
    ]);
  };

  return (
    <div className="flex justify-center items-center w-full h-full p-4 sm:p-6">
      <form
        className="bg-gray-800 text-gray-200 p-6 sm:p-8 md:p-10 shadow-lg rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-4xl"
      >
        <h1 className="bg-gray-800 text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-gray-100">
          Daily Activity Tracker
        </h1>

        {/* General Information */}
        <GeneralInfo />

        {/* Daily Activities */}
        <DailyActivities
          dailyActivities={dailyActivities}
          setDailyActivities={setDailyActivities}
          addRow={addRow}
          removeRow={removeRow}
        />

        {/* Next Day Planning */}
        <NextDayPlans
          nextDayPlans={nextDayPlans}
          setNextDayPlans={setNextDayPlans}
          addRow={addRow}
          removeRow={removeRow}
        />

        {/* Footer Buttons */}
        <FooterButtons clearAll={clearAll} />
      </form>
    </div>
  );
};

export default DAF;
