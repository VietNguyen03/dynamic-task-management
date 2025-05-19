import React from 'react';


const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.text} ({task.priority.charAt(0).toUpperCase() + task.priority.slice(1)})
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white text-xl rounded-full p-2 hover:bg-red-600 border-red-700 shadow"
      title="Delete Task"
>
  🗑️
</button>
    </div>
  );
};

export default TaskItem;
