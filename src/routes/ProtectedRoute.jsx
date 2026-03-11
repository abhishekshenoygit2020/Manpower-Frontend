import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../ContextAPI/AuthContext";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to={redirectPath} replace />;
  }

  // Logged in, render child routes
  return <Outlet />;
};

export default ProtectedRoute;