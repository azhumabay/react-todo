import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { ButtonGroup, Button } from "@mui/material";

export default function TodoFilter() {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <ButtonGroup variant="contained" sx={{ marginBottom: 3 }}>
      <Button
        onClick={() => setFilter("all")}
        color={filter === "all" ? "primary" : "default"}
      >
        Все
      </Button>
      <Button
        onClick={() => setFilter("completed")}
        color={filter === "completed" ? "primary" : "default"}
      >
        Выполненные
      </Button>
      <Button
        onClick={() => setFilter("pending")}
        color={filter === "pending" ? "primary" : "default"}
      >
        Невыполненные
      </Button>
    </ButtonGroup>
  );
}
