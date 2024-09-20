import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

// Создаем контекст
export const TodoContext = createContext();

// Функция инициализации состояния
const init = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Компонент-провайдер для управления глобальным состоянием
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  // Синхронизация с localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
