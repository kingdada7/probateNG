import React from "react";
import { Route, Routes } from "react-router";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default App;
