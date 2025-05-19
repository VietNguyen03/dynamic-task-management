import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import StatsPanel from './components/StatsPanel';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved
      ? JSON.parse(saved).filter(task => task.text && task.date)
      : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-start mb-4">
        <img src="/Logo.png" alt="DTM Logo" className="h-16 w-auto max-w-[200px]"
/>
        </div>

        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <StatsPanel tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
