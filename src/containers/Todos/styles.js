import { makeStyles } from "@material-ui/core/styles";

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
  grid: {
    height: "100%"
  },
}));

export default useStyles;
