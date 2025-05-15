import React, { useState } from 'react';

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      text: title, // Fix: match what StatsPanel expects
      priority,
      completed: false,
      date: new Date() // Fix: add today's date
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setPriority('medium');
  };

  return (
    <form onSubmit={addTask} className="mb-4">
      <input
        type="text"
        placeholder="Enter task here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
