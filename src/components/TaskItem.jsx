import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className="mb-3">
          <label
            className={`flex items-center gap-3 px-4 py-2 rounded-full border shadow-sm cursor-pointer transition-all
              ${task.completed ? 'bg-green-100 border-green-400 text-green-800' : 'bg-white border-gray-300 text-gray-800'}
            `}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="accent-green-600"
            />
            <span className={task.completed ? 'line-through' : ''}>
              {task.title}
              <span className="ml-2 text-xs text-gray-500">
                ({task.priority})
              </span>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
              className="ml-auto text-white bg-red-600 hover:bg-red-700 px-3 py-1 text-xs rounded"
            >
              Delete
            </button>
          </label>
        </div>
      );
      

export default TaskItem;
