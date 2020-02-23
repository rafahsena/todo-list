import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./styles";
import DatePicker from "react-date-picker";
import Event from "@material-ui/icons/Event";

const AddTodo = props => {
  const classes = useStyles();
  const [date, setDate] = useState(null);

  const onDateChange = value => {
    setDate(value);
  };

  return (
    <div className={classes.addTodo}>
      <InputBase
        placeholder="Escreva sua tarefa e pressione Enter"
        classes={{ input: classes.inputInput, root: classes.inputRoot }}
        inputProps={{
          "aria-label": "add-todo",
          onKeyPress: event => props.handleTodoInput(event, date)
        }}
      />
      <DatePicker
        className={classes.datePicker}
        onChange={onDateChange}
        value={date}
        clearIcon={null}
        calendarIcon={<Event color="primary" />}
      />
    </div>
  );
};

export default AddTodo;
