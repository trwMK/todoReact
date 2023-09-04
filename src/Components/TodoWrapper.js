import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useState } from "react";
import { EditForm } from "./EditForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <>
      <div className="todo-wrapper">
        <h1>Get Things done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </>
  );
};
