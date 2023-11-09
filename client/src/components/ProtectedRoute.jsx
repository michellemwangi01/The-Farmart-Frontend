import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
