import React from "react";
import { Route, Routes, Navigate } from "react-router";

import AdminLogin from "./pages/AdminLogin";
import StaffRegister from "./pages/StaffRegister";
import HodRegister from "./pages/HodRegister";
import HodDashboard from "./pages/HodDashboard";
import AdminLayout from "./pages/AdminLayout";

const App = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Routes>
      {/* Public */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/staffregister" element={<StaffRegister />} />
      <Route path="/admin/hodregister" element={<HodRegister />} />

      {/* Protected */}
      <Route
        path="/admin/dashboard"
        element={token ? <AdminLayout /> : <Navigate to="/admin" replace />}
      >
        <Route
          path="hod"
          element={
            role === "hod" ? <HodDashboard /> : <Navigate to="/admin" replace />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
