import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DatePicker from "../../../components/DatePicker/DatePicker";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const EdiTodoForm = props => {
  const classes = useStyles();

  const [note, setNote] = useState(props.note);
  const [text, setText] = useState(props.text);
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    setNote(props.note);
    setText(props.text);
    setDate(props.date);
  }, [props]);

  const onNoteChange = event => {
    setNote(event.target.value);
  };

  const onTextChange = event => {
    setText(event.target.value);
  };

  const onDateChange = date => {
    setDate(date);
  };

  const handleSubmit = () => {
    console.log("Salvei");
  };

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h5" align="justify">
        Editar Tarefa
      </Typography>
      <form className={classes.container} autoComplete="off">
        <TextField
          label="Escreva sua tarefa"
          fullWidth
          value={text}
          onChange={event => onTextChange(event)}
          color="secondary"
          variant="outlined"
        />

        <DatePicker
          className={classes.datePicker}
          date={date}
          onChange={date => onDateChange(date)}
        />

        <span className={classes.input}>
          <TextField
            id="outlined-multiline-static"
            label="Adicionar anotações"
            multiline
            fullWidth
            rows="4"
            value={note}
            color="secondary"
            onChange={value => onNoteChange(value)}
            variant="outlined"
          />
        </span>
        <Button
          className={classes.submit}
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </form>
    </React.Fragment>
  );
};

export default EdiTodoForm;
