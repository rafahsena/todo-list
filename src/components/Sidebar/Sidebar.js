import React, { useState } from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CalendarDialog from "../Calendar/CalendarDialog";

const Sidebar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const closeCalendar = () => {
    setOpen(false);
  };

  const showCalendar = () => {
    setOpen(true);
  };

  return (
    <Container disableGutters className={classes.sidebar}>
      <List component="nav" className={classes.root}>
        <ListItem button onClick={showCalendar} key="Calendario">
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
