import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./context/TodoProvider";
import { Box } from "@mui/material";

export default function App() {
  return (
    <TodoProvider>
      <Box sx={{ padding: 2 }}>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </Box>
    </TodoProvider>
  );
}
