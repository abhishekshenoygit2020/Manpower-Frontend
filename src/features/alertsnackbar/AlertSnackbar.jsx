import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertSnackbar = ({ open, handleClose, severity, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;