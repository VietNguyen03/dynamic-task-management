import React, { useMemo } from 'react';
import { Calendar } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup date-fns localizer
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const StatsPanel = ({ tasks }) => {
  // Convert tasks into calendar events
  const events = useMemo(() => {
    return tasks.map((task) => ({
      title: task.text,
      start: new Date(task.date),
      end: new Date(task.date),
      allDay: true,
    }));
  }, [tasks]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Task Calendar</h2>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          views={['month', 'week', 'day']}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: '#10B981',
              borderRadius: '6px',
              color: 'white',
              padding: '4px',
            },
          })}
        />
      </div>
    </div>
  );
};

export default StatsPanel;
