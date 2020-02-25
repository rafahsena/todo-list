import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import useStyles from "./styles";

const DeleteDialog = props => {
  const deleteTodo = id => {
    handleClose();
    props.handleDelete(id);
  };
  const handleClose = () => {
    props.setDialogOpen(false);
  };


  const classes = useStyles();
  return (
    <Dialog
      PaperProps={{elevation: 0}}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={props.open}
      classes={{ paper: classes.paper }}
    >
      <DialogTitle className={classes.title} id="dialog-title">
        Confirmar exclusão
      </DialogTitle>
      <DialogContentText>
        Tem certeza que quer apagar essa tarefa?
      </DialogContentText>
      <div className={classes.options}>
        <Button onClick={() => deleteTodo(props.id)} disableElevation color="secondary" variant="contained">Apagar</Button>
        <Button onClick={() => handleClose()} autoFocus disableElevation>Cancelar</Button>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
