import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputTodo);
    setInputTodo("");
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="your todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};
