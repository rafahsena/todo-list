import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

  title: {
    margin: theme.spacing(3),
    color: theme.palette.secondary.light,
  },
  done: {
    color: "#52b202",
  },
  overdue: {
    color: "#ffd600",
  },
  week: {
    color: "#aa00ff"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    padding: theme.spacing(3, 0),
  }
}));

export default useStyles;
