import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext();

const init = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const TodoProvider = ({ children }) => {
  const [todoList, todoDispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
