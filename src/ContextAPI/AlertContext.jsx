import React, { createContext, useContext, useState } from "react";
import AlertSnackbar from "../features/alertsnackbar/AlertSnackbar";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  // Function to show alert from anywhere
  const showAlert = ({ message, severity = "success" }) => {
    setAlert({ open: true, severity, message });
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <AlertSnackbar
        open={alert.open}
        handleClose={handleClose}
        severity={alert.severity}
        message={alert.message}
      />
    </AlertContext.Provider>
  );
};