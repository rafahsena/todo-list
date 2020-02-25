import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  addTodo: {
    position: "relative",
    margin: theme.spacing(2),
    display: "inline-flex",
    justifySelf: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    width: "95%",
    [theme.breakpoints.down('md')]: {
      width: "75%",
    }
  },
  inputRoot: {
    padding: theme.spacing(0.75, 2),
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    "&.Mui-focused": {
      borderColor: theme.palette.secondary.main,
      color: "rgba(0, 0, 0, 0.87)"
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    width: "100%"
  },
  datePicker: {
    outline: "none",
    "& .react-date-picker__inputGroup": {
      display: "none"
    },
    "& .react-date-picker__wrapper" : {
      border: "none"
    }
  },
}));

export default useStyles;
