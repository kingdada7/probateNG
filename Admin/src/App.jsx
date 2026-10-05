import React from "react";
import { Navigate, Route, Routes } from "react-router";

import AdminLogin from "./pages/AdminLogin";
import StaffRegister from "./pages/StaffRegister";
import HodRegister from "./pages/HodRegister";
import HodDashboard from "./pages/HodDashboard";
import StaffDashboard from "./pages/StaffDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./pages/AdminLayout";
import { Toaster } from "react-hot-toast";
import UserMangement from "./pages/UserMangement";
import AdminManagement from "./pages/AdminManagement";
import ApplicationDetails from "./components/ApplicationDetails";

const App = () => {
  return (
    <div>
      <Toaster />

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/admin/staffregister" element={<StaffRegister />} />

        <Route path="/admin/hodregister" element={<HodRegister />} />

        {/* ================= PROTECTED ADMIN ROUTES ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* HOD */}
          <Route
            path="hod"
            element={
              <ProtectedRoute allowedRole="hod">
                <HodDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute allowedRole="hod">
                <UserMangement />
              </ProtectedRoute>
            }
          />

          <Route
            path="admins"
            element={
              <ProtectedRoute allowedRole="hod">
                <AdminManagement />
              </ProtectedRoute>
            }
          />

          <Route
            path="applications/:applicationId"
            element={<ApplicationDetails />}
          />

          {/* STAFF */}
          <Route
          path="staff"
          element={
            <ProtectedRoute allowedRole="staff">
              <StaffDashboard />
            </ProtectedRoute>
          }
        />
        </Route>

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </div>
  );
};

export default App;
