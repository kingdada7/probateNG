import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import CitizenLogin from "../pages/CitizenLogin";
import CitizenRegistration from "../pages/CitizenRegistration";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizenlogin" element={<CitizenLogin />} />
        <Route path="/citizenregistration" element={<CitizenRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
