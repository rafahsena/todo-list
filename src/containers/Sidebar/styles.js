import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sidebar: {
    backgroundColor: theme.palette.background.paper,
    borderRight: "1px solid rgba(0,0,0,.07)",
    height: "100%"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    padding: theme.spacing(3, 0),
  }
}));

export default useStyles;
