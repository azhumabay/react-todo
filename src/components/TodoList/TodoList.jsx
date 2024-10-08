import { useContext, useMemo } from "react";
import { List } from "@mui/material";
import { TodoContext } from "../../context/TodoProvider";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todoList, filter } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (filter === "completed") {
        return todo.status === true;
      } else if (filter === "pending") {
        return todo.status === false;
      }
      return true;
    });
  }, [todoList, filter]);

  return (
    <List>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}
