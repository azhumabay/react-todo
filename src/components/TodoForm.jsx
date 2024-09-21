import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import {
  Button,
  Box,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export default function TodoForm() {
  const { todoDispatch } = useContext(TodoContext);
  const [inputTitle, setInputTitle] = useState("");

  const addTask = () => {
    if (inputTitle.trim()) {
      todoDispatch({ type: "addTask", payload: inputTitle });
      setInputTitle("");
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}
    >
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="input-with-icon-adornment">
          Добавить задачу
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AddIcon color="primary" />
            </InputAdornment>
          }
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </FormControl>

      <Button variant="contained" size="small" onClick={addTask}>
        Добавить задачу
      </Button>
    </Box>
  );
}
