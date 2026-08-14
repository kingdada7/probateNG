import React from "react";
import { Route, Routes } from "react-router";

import AdminLogin from "./pages/AdminLogin";
import StaffRegister from "./pages/StaffRegister";
import HodRegister from "./pages/HodRegister";
import HodDashboard from "./pages/HodDashboard";
import AdminLayout from "./pages/adminLayout";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Login */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Registration */}
      <Route path="/admin/staffregister" element={<StaffRegister />} />

      <Route path="/admin/hodregister" element={<HodRegister />} />

      {/* Protected Admin Area */}
      <Route path="/admin" element={token ? <AdminLayout /> : <AdminLogin />}>
        {/* <Route
          path="staff/dashboard"
          element={<StaffDashboard />}
        /> */}

        <Route
          path="hod/dashboard"
          element={role === "hod" ? <HodDashboard /> : <AdminLogin />}
        />
      </Route>
    </Routes>
  );
};

export default App;
