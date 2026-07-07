import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authcontext";

function ProtectedRoute({children}) {
  const {currentUser} = useAuth();

  if(!currentUser) {
    return <Navigate to="/signup" replace />
  }
  return children;
}

export default ProtectedRoute;