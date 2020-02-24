import React, { useState } from "react";
import useStyles from "./styles.js";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Event from "@material-ui/icons/Event";
import DatePicker from "react-date-picker";
import { Button } from "@material-ui/core";

const EditTodo = props => {
  const classes = useStyles();
  const [note, setNote] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState(null);

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

  const todoEdit = false ? (
    <div className={classes.root}>
      <Typography component="h1" variant="h5" className={classes.empty}>
        Clique em uma tarefa para editá-la
      </Typography>
    </div>
  ) : (
    <React.Fragment>
      <Typography className={classes.title} variant="h5" align="justify">
        Editar Tarefa
      </Typography>
      <form className={classes.container} autoComplete="off">
        <TextField
          label="Escreva sua tarefa"
          fullWidth
          value={text}
          onChange={text => onTextChange(text)}
          color="secondary"
          variant="outlined"
        />

        <DatePicker
          className={classes.datePicker}
          value={date}
          onChange={date => onDateChange(date)}
          clearIcon={null}
          calendarIcon={
            <IconButton size="small">
              <Event color="secondary" />
            </IconButton>
          }
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
  return <Container className={classes.editContainer}>{todoEdit}</Container>;
};

export default EditTodo;
