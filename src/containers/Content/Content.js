import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Todo from "../Todo/Todo";
import List from "@material-ui/core/List";
import AddTodo from "../AddTodo/AddTodo";
import Typography from "@material-ui/core/Typography";

const Content = props => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const handleCheckbox = index => {
    const newTodos = todos.slice();
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const handleTodoInput = (event, date) => {
    if (event.key === "Enter") {
      const todo = { text: event.target.value, date: date, isDone: false };
      const newState = [...todos, todo];
      setTodos(newState);
      event.target.value = "";
    }
  };

  const deleteTodo = index => {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  let todoList = (
    <Typography variant="h5" className={classes.empty}>
      Você ainda não cadastrou nenhuma tarefa :(
    </Typography>
  );
  if (todos.length) {
    todoList = todos.map((todo, index) => (
      <Todo
        key={index}
        text={todo.text}
        isDone={todo.isDone}
        index={index}
        deleteTodo={deleteTodo}
        handleCheckbox={handleCheckbox}
      />
    ));
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" disableGutters>
        <h2 className={classes.title}>Minhas Tarefas</h2>
        <AddTodo handleTodoInput={handleTodoInput} />
        <List>{todoList}</List>
      </Container>
    </div>
  );
};

export default Content;
