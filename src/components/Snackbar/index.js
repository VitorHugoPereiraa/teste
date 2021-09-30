import { Snackbar } from "@material-ui/core";
import React from "react";
import "./style.scss";

function CustomSnackBar({ open, type, handleClose, duration, text }) {
  if (type == "error") {
    return (
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <div className="alert-error">
          {console.log("error")}
          <p>{text}</p>
        </div>
      </Snackbar>
    );
  } else {
    return (
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <div className="alert-success">
          {console.log("success")}
          <p>{text}</p>
        </div>
      </Snackbar>
    );
  }
}

export default CustomSnackBar;
