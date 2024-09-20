import { useContext } from "react";
import { List } from "@mui/material";
import { TodoContext } from "../../context/TodoProvider";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(TodoContext);

  return (
    <List>
      {state.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}
