import React, { useState } from "react";
import useStyles from "./styles";
import moment from "moment";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarDialog from "../../components/Calendar/CalendarDialog";

const Sidebar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const closeCalendar = () => {
    setOpen(false);
  };

  const showCalendar = () => {
    setOpen(true);
  };

  
  const notDone = todo => !todo.isDone;
  const done = todo => todo.isDone;
  const weekTasks = todo => {
    const today = moment().startOf("day");
    const todoDate = moment(todo.date);
    const endDate = moment(today).add(7, "days").endOf("day");
    return todoDate.isBetween(today, endDate, null, "[]");
  };
  const overdue = todo => {
    const today = moment().startOf("day");
    const todoDate = moment(todo.date);
    return todoDate.isBefore(today);
  };

  return (
    <Container disableGutters className={classes.sidebar}>
      <Typography variant="h6">Opções</Typography>
      <List component="nav" className={classes.root}>
        <ListItem divider button onClick={() => props.filterTodos(notDone)} key="todos">
          <ListItemIcon>
            <DateRangeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Minhas tarefas</ListItemText>
        </ListItem>
        <ListItem divider button onClick={() => props.filterTodos(done)} key="done">
          <ListItemIcon>
            <DateRangeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Tarefas concluídas</ListItemText>
        </ListItem>
        <ListItem divider button onClick={() => props.filterTodos(weekTasks)} key="week">
          <ListItemIcon>
            <DateRangeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Tarefas da semana</ListItemText>
        </ListItem>
        <ListItem divider button onClick={() => props.filterTodos(overdue)} key="overdue">
          <ListItemIcon>
            <DateRangeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Tarefas atrasadas</ListItemText>
        </ListItem>
        <ListItem divider button onClick={showCalendar} key="calendar">
          <ListItemIcon>
            <DateRangeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>Ver tarefas no calendário</ListItemText>
        </ListItem>
      </List>
      <CalendarDialog open={open} closeCalendar={closeCalendar}>
        {props.children}
      </CalendarDialog>
    </Container>
  );
};

export default Sidebar;
