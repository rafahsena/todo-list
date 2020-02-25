import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  todoText: {
    display: "flex",
    padding: theme.spacing(0, 1),
    backgroundColor: "rgba(255,255,255)",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  top: {
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      justifyContent: "space-between",
    },
  },
  buttonRoot: {
    
  },
  container: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2)
  },
  input: {
    margin: theme.spacing(3, 0),
    width: "100%",
    backgroundColor: "rgba(255,255,255)"
  },
  inputRoot: {
    padding: theme.spacing(0.75, 2),
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    "&.Mui-focused": {
      borderColor: theme.palette.secondary.main,
      color: "rgba(0, 0, 0, 0.87)"
    }
  },

  title: {
    margin: theme.spacing(2),
    color: theme.palette.primary.light,
    fontWeight: "bold"
  },

  dateRoot: {
    width: "100%",
    backgroundColor: "rgba(255,255,255)",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid transparent"
  },
  datePicker: {
    width: "100%",
    margin: theme.spacing(4, 0, 1, 0),
    backgroundColor: "rgba(255,255,255)",
    "& .react-date-picker__wrapper": {
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      border: "1px solid transparent",
      borderColor: "rgba(0, 0, 0, 0.23)"
    },
    "& .react-date-picker__wrapper:hover": {
      borderColor: "rgba(0, 0, 0, 0.87)"
    },
    "&.react-date-picker--open > .react-date-picker__wrapper": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "2px"
    }
  },
  submit: {
    alignSelf: "end"
  }
}));

export default useStyles;
