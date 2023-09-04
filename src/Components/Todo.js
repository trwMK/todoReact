import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <h3
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </h3>
      <div>
        <button className="change-btn" onClick={() => editTodo(task.id)}>
          Update
        </button>
        <button className="change-btn" onClick={() => deleteTodo(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
