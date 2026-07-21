import React from "react";
import { Outlet, useNavigate } from "react-router";
import CitizenDashboard from "./CitizenDashboard";
import ApplicantInformation from "./ApplicantInformation";

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
