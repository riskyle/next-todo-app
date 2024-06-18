"use client";

import { createContext, useReducer } from "react";

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODOS":
      return {
        todos: state.todos.filter((todo) => todo.id != action.payload.id),
      };
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: "" });

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
