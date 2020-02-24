import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Todo from "./Todo/Todo";
import List from "@material-ui/core/List";
import AddTodo from "./AddTodo/AddTodo";
import EditTodo from "./EditTodo/EditTodo";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

const Todos = props => {
  const classes = useStyles();
  const {todos, setTodos} = props;
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);

  const handleCheckbox = index => {
    const newTodos = todos.slice();
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    if (selectedTodoIndex === index) {
      setSelectedTodoIndex(null);
    }
  };

  const handleAddTodoInput = (event, date) => {
    if (event.target.value) {
      const todo = {
        text: event.target.value,
        date: date,
        isDone: false,
        note: ""
      };
      const newState = [...todos, todo];
      setTodos(newState);
      event.target.value = "";
    }
  };

  const handleTodoClick = index => {
    setSelectedTodoIndex(index);
  };

  const handleEditTodoSubmit = todo => {
    const newTodos = todos.slice();
    // Create a new todo object with updated values
    const newTodo = { ...todos[selectedTodoIndex], ...todo };

    newTodos.splice(selectedTodoIndex, 1, newTodo);
    setTodos(newTodos);
    setSelectedTodoIndex(null);
  };

  const selectedTodo = todos[selectedTodoIndex];

  const deleteTodo = index => {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (selectedTodoIndex === index) {
      setSelectedTodoIndex(null);
    }
  };

  let todoList = todos.length ? (
    todos.map((todo, index) => (
      <Todo
        key={index}
        text={todo.text}
        isDone={todo.isDone}
        index={index}
        deleteTodo={deleteTodo}
        handleCheckbox={handleCheckbox}
        handleTodoClick={handleTodoClick}
      />
    ))
  ) : (
    <Typography variant="h5" className={classes.empty}>
      Uhul! Você não tem tarefas para fazer (ou tem?)
    </Typography>
  );

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={8}>
        <div className={classes.root}>
          <Container maxWidth="xl" disableGutters>
            <h2 className={classes.title}>Minhas Tarefas</h2>
            <AddTodo handleTodoInput={handleAddTodoInput} />
            <List>{todoList}</List>
          </Container>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item md={4}>
          <EditTodo {...selectedTodo} handleSubmit={handleEditTodoSubmit} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Todos;
