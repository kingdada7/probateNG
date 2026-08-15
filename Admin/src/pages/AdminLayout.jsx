import React from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <>
      <div>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
