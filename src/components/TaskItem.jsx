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
      </div>
      <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white text-xl rounded-full p-2 hover:bg-red-600 transition"
      title="Delete Task"
>
  🗑️
</button>
    </div>
  );
};

export default TaskItem;
