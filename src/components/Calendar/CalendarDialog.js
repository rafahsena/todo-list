import React from "react";
import Dialog from "@material-ui/core/Dialog";
import useStyles from "./styles";

const CalendarDialog = props => {

  const classes = useStyles();
  return (
    <Dialog
      maxWidth='lg'
      fullWidth
      PaperProps={{elevation: 0}}
      onClose={props.closeCalendar}
      aria-labelledby="dialog-title"
      open={props.open}
      classes={{ paper: classes.paper }}
    >
      {props.children}
    </Dialog>
  );
};

export default CalendarDialog;