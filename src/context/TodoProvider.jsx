import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext();

const init = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const TodoProvider = ({ children }) => {
  const [todoList, todoDispatch] = useReducer(todoReducer, [], init);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, todoDispatch, filter, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};
