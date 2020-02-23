import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  title : {
    textAlign: "center",
  },
  options: {
    display: "flex",
    justifyContent: "space-evenly"
  }
}));

export default useStyles;