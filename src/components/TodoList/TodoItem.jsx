import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import { Check, Close, Delete } from "@mui/icons-material";

export default function TodoItem({ id, title, status }) {
  const { dispatch } = useContext(TodoContext);

  const toggleStatus = () => {
    dispatch({ type: "changeStatus", payload: id });
  };

  const deleteTask = () => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            onClick={toggleStatus}
            color={status ? "success" : "default"}
          >
            {status ? <Check /> : <Close />}
          </IconButton>
          <IconButton edge="end" onClick={deleteTask} color="error">
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
  );
}
