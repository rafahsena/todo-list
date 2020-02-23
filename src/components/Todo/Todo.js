import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { Divider } from "@material-ui/core";

const Todo = props => {
  return (
    <React.Fragment>
      <ListItem key={props.index} role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={props.content.text} />
      </ListItem>
      <Divider light />
    </React.Fragment>
  );
};

export default Todo;
