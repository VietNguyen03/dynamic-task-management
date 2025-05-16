import { TrashIcon } from '@heroicons/react/24/solid';
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
      <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
  <TrashIcon className="h-5 w-5" />
</button>
    </div>
  );
};

export default TaskItem;
