import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem 0"
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.primary.light
  },
  empty: {
    color: "rgba(0, 0, 0, 0.25)",
    textAlign: "center"
  },
  addTodo: {
    position: "relative",
    margin: theme.spacing(2),
    width: 280,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  },
  inputRoot: {
    padding: theme.spacing(0.75, 2),
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    "&.Mui-focused": {
      borderColor: theme.palette.secondary.light,
      color: 'rgba(0, 0, 0, 0.87)',
    }
  },
  inputInput: {
    padding: theme.spacing(2, 1, 2, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

export default useStyles;
