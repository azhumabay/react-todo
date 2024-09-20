import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext();

const init = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
