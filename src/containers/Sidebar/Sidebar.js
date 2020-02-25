import React, { useState } from "react";
import useStyles from "./styles";
import moment from "moment";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventAvailableIcon from '@material-ui/icons/EventAvailableOutlined';
import DateRangeIcon from "@material-ui/icons/DateRange";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import CalendarDialog from "../../components/Calendar/CalendarDialog";

const Sidebar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closeCalendar = () => {
    setOpen(false);
  };

  const showCalendar = () => {
    setOpen(true);
  };

  const handleClick = (index, callback) => {
    setSelectedIndex(index);
    props.filterTodos(callback);
  }

  const notDone = todo => !todo.isDone;
  const done = todo => todo.isDone;
  const weekTasks = todo => {
    if (todo.isDone) {
      return false;
    }
    const today = moment().startOf("day");
    const todoDate = moment(todo.date);
    const endDate = moment(today)
      .add(7, "days")
      .endOf("day");
    return todoDate.isBetween(today, endDate, null, "[]");
  };
  const overdue = todo => {
    if (todo.isDone) {
      return false;
    }
    const today = moment().startOf("day");
    const todoDate = moment(todo.date);
    return todoDate.isBefore(today);
  };

  return (
    <Container disableGutters className={classes.sidebar}>
      <List
        component="nav"
        className={classes.root}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Opções
          </ListSubheader>
        }
      >
        <ListItem
          divider
          button
          selected={selectedIndex === 0}
          onClick={() => handleClick(0, notDone)}
          key="todos"
        >
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Minhas tarefas</ListItemText>
        </ListItem>
        <ListItem
          divider
          button
          selected={selectedIndex === 1}
          onClick={() => handleClick(1, done)}
          key="done"
        >
          <ListItemIcon>
            <EventAvailableIcon fontSize="small" className={classes.done} />
          </ListItemIcon>
          <ListItemText>Tarefas concluídas</ListItemText>
        </ListItem>
        <ListItem
          divider
          button
          selected={selectedIndex === 2}
          onClick={() => handleClick(2, weekTasks)}
          key="week"
        >
          <ListItemIcon>
            <AssignmentOutlinedIcon fontSize="small" className={classes.week} />
          </ListItemIcon>
          <ListItemText>Tarefas da semana</ListItemText>
        </ListItem>
        <ListItem
          divider
          button
          selected={selectedIndex === 3}
          onClick={() => handleClick(3, overdue)}
          key="overdue"
        >
          <ListItemIcon>
            <QueryBuilderOutlinedIcon fontSize="small" className={classes.overdue} />
          </ListItemIcon>
          <ListItemText>Tarefas atrasadas</ListItemText>
        </ListItem>
        <ListItem divider button onClick={showCalendar} key="calendar">
          <ListItemIcon>
            <DateRangeIcon fontSize="small" color="secondary" />
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
