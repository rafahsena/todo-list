import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Badge } from "@material-ui/core";

const Header = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar className={classes.header}>
            <IconButton
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
            <IconButton className={classes.inputRoot}>
              <Badge>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Header;
