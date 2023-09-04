import React, { useState } from "react";

export const EditForm = ({ editTodo, task }) => {
  const [editVal, setEditVal] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(editVal, task.id);
    setEditVal("");
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="update task"
        value={editVal}
        onChange={(e) => setEditVal(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};
