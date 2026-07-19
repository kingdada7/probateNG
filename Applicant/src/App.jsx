import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import CitizenLogin from "../pages/CitizenLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CitizenLogin />} />
      </Routes>
    </div>
  );
};

export default App;
