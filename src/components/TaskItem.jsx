import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>
  {task.title}
  <span className="ml-2 text-sm px-2 py-1 rounded 
    ${
      task.priority === 'high' ? 'bg-red-500' 
      : task.priority === 'medium' ? 'bg-yellow-500' 
      : 'bg-green-500'
    } text-white">
    ({task.priority})
  </span>
</span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-white bg-red-700 hover:bg-red-800 px-3 py-1 rounded">Delete</button>  //Delete button color
    </div>
  );
};

export default TaskItem;
