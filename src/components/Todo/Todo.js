import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = props => {
  const handleDeletePress = index => {
    props.deleteTodo(index);
  };

  return (
    <ListItem key={props.index} dense button divider>
      <ListItemIcon>
        <Checkbox edge="start" tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={props.text} />
      <ListItemSecondaryAction
        onClick={() => handleDeletePress(props.index)}
      >
        <IconButton edge="end" aria-label="delete-todo">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
