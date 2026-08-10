import React from "react";
import { Route, Routes } from "react-router";
import AdminLogin from "./pages/AdminLogin";
import StaffRegister from "./pages/StaffRegister";
import HodRegister from "./pages/HodRegister";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/staffregister" element={<StaffRegister />} />
        <Route path="/hodregister" element={<HodRegister />} />
      </Routes>
    </div>
  );
};

export default App;
