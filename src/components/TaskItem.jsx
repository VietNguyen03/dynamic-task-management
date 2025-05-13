import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded shadow mb-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
        <span
          className={`ml-2 text-sm px-2 py-1 rounded ${
            task.priority === 'high'
              ? 'bg-red-500'
              : task.priority === 'medium'
              ? 'bg-yellow-500'
              : 'bg-green-500'
          } text-white`}
        >
          {task.priority}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-600">Delete</button>
    </div>
  );
};

export default TaskItem;
