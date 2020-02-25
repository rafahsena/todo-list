import React from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";

const Sidebar = props => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.sidebar}>
      {props.children}
    </Container>
  );
};

export default Sidebar;
