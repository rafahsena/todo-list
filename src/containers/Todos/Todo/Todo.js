import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteDialog from "../../../components/DeleteDialog/DeleteDialog";

const Todo = props => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const deleteButton = !props.isDone ? (
    <ListItemSecondaryAction onClick={() => setDialogOpen(true)}>
      <IconButton edge="end" aria-label="delete-todo">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  ) : null;

  return (
    <React.Fragment>
      <ListItem key={props.index} dense button divider disabled={props.isDone} onClick={() => props.handleTodoClick(props.index)} >
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={props.isDone}
            onClick={() => props.handleCheckbox(props.index)}
          />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {deleteButton}
      </ListItem>
      <DeleteDialog
        open={dialogOpen}
        index={props.index}
        setDialogOpen={setDialogOpen}
        handleDelete={props.deleteTodo}
      ></DeleteDialog>
    </React.Fragment>
  );
};

export default Todo;
