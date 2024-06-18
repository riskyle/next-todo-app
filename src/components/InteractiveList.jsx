"use client";

import { useState, cloneElement } from "react";
import { styled } from "@mui/material/styles";
import LightbulbCircleSharpIcon from "@mui/icons-material/LightbulbCircleSharp";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";
import { useTodoContext } from "@/hooks/useTodoContext";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [todo, setTodo] = useState("");
  const [dense, setDense] = useState(false);
  const { todos, dispatch } = useTodoContext();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    dispatch({ type: "ADD_TODOS", payload: { id: Date.now(), desc: todo } });
    setTodo("");
  };

  const handleTodoDelete = (e, id) => {
    e.preventDefault();

    dispatch({ type: "DELETE_TODOS", payload: { id: id } });
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <form onSubmit={(e) => handleTodoSubmit(e)}>
        <TextField
          id="standard-basic"
          label="Enter todos"
          variant="standard"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          className="button"
          type="submit"
          size="small"
          variant="outlined"
        >
          Add Todo
        </Button>
      </form>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Todo List:
        </Typography>
        <Demo>
          {todos &&
            todos.map((todo) => (
              <List dense={dense} key={todo.id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={(e) => handleTodoDelete(e, todo.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <LightbulbCircleSharpIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={todo.desc} />
                </ListItem>
              </List>
            ))}
        </Demo>
      </Grid>
    </Box>
  );
}
