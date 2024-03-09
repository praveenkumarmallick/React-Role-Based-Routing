import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/profile",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectAdmin} />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={"/"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
