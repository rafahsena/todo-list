import React from "react";
import useStyles from "./styles.js";
import Container from "@material-ui/core/Container";

const Sidebar = props => {
  const classes = useStyles();

  return (
    <Container className={classes.sidebar}>
      <div></div>
    </Container>
  );
};

export default Sidebar;