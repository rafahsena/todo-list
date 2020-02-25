import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  editContainer: {
    display: "flex",
    backgroundColor: "rgba(0,0,0,.02)",
    borderLeft: "1px solid rgba(0, 0, 0, .06)",
    height: "100%",
    flexDirection: "column"
  },
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default useStyles;
