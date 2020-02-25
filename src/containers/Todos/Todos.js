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
  const { todos, setTodos } = props;
  const [selectedTodoID, setSelectedTodoID] = useState(null);

  const handleCheckbox = id => {
    const newTodos = todos.slice();

    // Find the index of todo on todos array
    const index = newTodos.findIndex(obj => obj.id === id);
    
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    if (selectedTodoID === id) {
      setSelectedTodoID(null);
    }
  };

  const handleAddTodoInput = (event, date) => {
    if (event.target.value) {
      const todo = {
        id: props.getID(),
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

  const handleTodoClick = id => {
    setSelectedTodoID(id);
  };

  const handleEditTodoSubmit = todo => {
    const newTodos = todos.slice();

    // Find the index of todo on todos array
    const index = newTodos.findIndex(obj => obj.id === todo.id);

    // Create a new todo object with updated values
    const newTodo = { ...todos[index], ...todo };


    newTodos.splice(index, 1, newTodo);
    setTodos(newTodos);
    
    setSelectedTodoID(null);
  };

  const selectedTodo = todos.find(todo => todo.id === selectedTodoID);

  const deleteTodo = id => {
    const newTodos = todos.slice();

    // Find the index of todo on todos array
    const index = newTodos.findIndex(obj => obj.id === id);

    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (selectedTodoID === id) {
      setSelectedTodoID(null);
    }
  };

  const matched = todos.filter(todo => todo.text.includes(props.pattern));

  const todoList = todos => {
    return todos.length ? (
      todos.map((todo, index) => (
        <Todo
          key={todo.id}
          text={todo.text}
          isDone={todo.isDone}
          index={index}
          id={todo.id}
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
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={8}>
        <div className={classes.root}>
          <Container maxWidth="xl" disableGutters>
            <h2 className={classes.title}>Minhas Tarefas</h2>
            <AddTodo handleTodoInput={handleAddTodoInput} />
            <List>{todoList(matched)}</List>
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
