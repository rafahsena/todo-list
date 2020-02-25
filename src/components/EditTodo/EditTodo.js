import React from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import EditTodoForm from "../../containers/Todos/EditTodo/EditTodoForm";

const EditTodo = props => {

  const classes = useStyles();

  const todoEdit = !props.text ? (
    <div className={classes.root}>
      <Typography component="h1" variant="h5" className={classes.empty}>
        Clique em uma tarefa para editá-la
      </Typography>
    </div>
  ) : (
    <EditTodoForm {...props} />
  );
  return <Container className={classes.editContainer}>{todoEdit}</Container>;
};

export default EditTodo;
