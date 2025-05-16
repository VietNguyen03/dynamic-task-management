import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.text} ({task.priority.charAt(0).toUpperCase() + task.priority.slice(1)})
        </span>
        <span
          className={`ml-2 text-sm font-semibold px-2 py-1 rounded ${
            task.priority === 'low' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
    </div>
  );
};

export default TaskItem;
