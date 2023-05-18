import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// private component is used for stop the navigation without login.
const PrivateCompent = () => {
  const auth = localStorage.getItem("user");

  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateCompent;
