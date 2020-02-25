import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import GitHubIcon from "@material-ui/icons/GitHub";
import Badge from "@material-ui/core/Badge";
import Link from "@material-ui/core/Link";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";

const Header = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = bool => {
    setOpen(bool);
  };

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.header}>
            <IconButton
              onClick={() => toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="abrir menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              TODOList
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              {/* I need to clone children to add new props to it */}
              {React.cloneElement(props.children, {
                classes: {
                  root: classes.inputRoot,
                  input: classes.inputInput
                }
              })}
            </div>
            <Link
              color="inherit"
              href="https://github.com/rafahsena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.inputRoot}>
                <Badge>
                  <GitHubIcon />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Hidden mdUp>
        <SwipeableDrawer
          open={open}
          onClose={() => toggleDrawer(false)}
          anchor="left"
          onOpen={() => toggleDrawer(true)}
          disableGutters
        >
          <div
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            {props.list}
          </div>
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
};
export default Header;
