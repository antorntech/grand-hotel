import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
