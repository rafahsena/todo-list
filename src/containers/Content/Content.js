import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Todo from "../Todo/Todo";
import List from "@material-ui/core/List";
import InputBase from "@material-ui/core/InputBase";

const Content = props => {
  const classes = useStyles();
  const [todos, setTodos] = useState([{ text: "Jogar LOL" }]);

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const todo = { text: event.target.value };
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
    <h4 className={classes.empty}>
      Você ainda não cadastrou nenhuma tarefa :(
    </h4>
  );

  if (todos.length) {
    todoList = todos.map((todo, index) => (
      <Todo
        key={index}
        text={todo.text}
        index={index}
        deleteTodo={deleteTodo}
      />
    ));
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" disableGutters>
        <h2 className={classes.title}>Minhas Tarefas</h2>
        <div className={classes.addTodo}>
          <InputBase
            placeholder="Escreva sua tarefa e pressione Enter"
            classes={{ input: classes.inputInput, root: classes.inputRoot }}
            inputProps={{
              "aria-label": "add-todo",
              onKeyPress: event => handleKeyPress(event)
            }}
          />
        </div>
        <List>{todoList}</List>
      </Container>
    </div>
  );
};

export default Content;
