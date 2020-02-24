import React from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import EditTodoForm from "./EditTodoForm";

const EditTodo = props => {
  
  // Helper function that checks if an object s empty
  const isEmpty = obj => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const classes = useStyles();

  const todoEdit = isEmpty(props) ? (
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
