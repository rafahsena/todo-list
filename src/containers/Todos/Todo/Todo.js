import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteDialog from "../../../components/DeleteDialog/DeleteDialog";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";

const Todo = props => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [checked, setChecked] = useState(props.isDone);

  useEffect(() => {
    setChecked(props.isDone);
  }, [props]);

  const toggleDrawer = bool => {
    setDrawerOpen(bool);
    props.handleTodoClick(props.id);
  };

  const deleteButton = !props.isDone ? (
    <ListItemSecondaryAction onClick={() => setDialogOpen(true)}>
      <IconButton edge="end" aria-label="delete-todo">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  ) : null;

  return (
    <React.Fragment>
      <ListItem
        key={props.id}
        dense
        button
        divider
        disabled={props.isDone}
        onClick={() => toggleDrawer(true)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={checked}
            onClick={() => props.handleCheckbox(props.id)}
          />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {deleteButton}
      </ListItem>
      <DeleteDialog
        open={dialogOpen}
        id={props.id}
        setDialogOpen={setDialogOpen}
        handleDelete={props.deleteTodo}
      ></DeleteDialog>
      <Hidden mdUp>
        <SwipeableDrawer
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          anchor="right"
          onOpen={() => toggleDrawer(true)}
          disableGutters
          classes={{ paper: classes.editTodo }}
        >
          <div
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            {props.children}
          </div>
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default Todo;
