import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducer/todoReducer";
import * as React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Check, Close, Delete, Add as AddIcon } from "@mui/icons-material";

const init = () => {
  const savedTodos = localStorage.getItem("todoList");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export default function AppTodoReducer() {
  const [state, countDispatcher] = useReducer(todoReducer, [], init);
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state));
  }, [state]);

  return (
    <Box sx={{ padding: 2 }}>
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

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            countDispatcher({ type: "addTask", payload: inputTitle });
            setInputTitle("");
          }}
        >
          Добавить задачу
        </Button>
      </Box>

      <List>
        {state.map(({ id, title, status }) => (
          <ListItem
            key={id}
            secondaryAction={
              <>
                <IconButton
                  onClick={() =>
                    countDispatcher({ type: "changeStatus", payload: id })
                  }
                  color={status ? "success" : "default"}
                >
                  {status ? <Check /> : <Close />}
                </IconButton>

                <IconButton
                  edge="end"
                  onClick={() =>
                    countDispatcher({ type: "delete", payload: id })
                  }
                  color="error"
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={title}
              secondary={
                <Typography color={status ? "green" : "gray"}>
                  {status ? "Выполнено" : "Нужно сделать"}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
