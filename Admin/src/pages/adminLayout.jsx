import React from "react";
import { Outlet, useNavigate } from "react-router";
import HodDashboard from "./HodDashboard";

const AdminLayout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
