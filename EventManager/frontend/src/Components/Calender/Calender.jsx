import React, { useState } from "react";
import { addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import './Calender.css'
const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth))
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">◀</button>
        <h2 className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">▶</button>
      </div>
      <div className="grid grid-cols-7 text-center gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-600 border-b pb-2">{day}</div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 border rounded ${format(day, "MM") !== format(currentMonth, "MM") ? "text-gray-400" : "text-black"}`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
