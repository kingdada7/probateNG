import React from "react";
import { Outlet, useNavigate } from "react-router";
import CitizenDashboard from "./CitizenDashboard";

const Layout = () => {
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <>
      <div>
        <CitizenDashboard />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
