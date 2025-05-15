import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StatsPanel = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Optional: Highlight days with tasks
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasTask = tasks.some(
        (task) =>
          task.date &&
          new Date(task.date).toDateString() === date.toDateString()
      );
      return hasTask ? (
        <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
      ) : null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Task Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
};

export default StatsPanel;
