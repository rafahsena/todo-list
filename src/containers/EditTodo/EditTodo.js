import React from "react";
import useStyles from "./styles.js";
import Container from "@material-ui/core/Container";

const Sidebar = props => {
  const classes = useStyles();

  return (
    <Container className={classes.editContainer}>
      <div></div>
    </Container>
  );
};

export default Sidebar;