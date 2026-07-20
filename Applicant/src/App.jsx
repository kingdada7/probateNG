import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import CitizenLogin from "../pages/CitizenLogin";
import CitizenRegistration from "../pages/CitizenRegistration";
import { Toaster } from "react-hot-toast";
import Layout from "../pages/Layout";
import { useAppContext } from "../context/AppContext";
import CitizenDashboard from "../pages/CitizenDashboard";

const App = () => {
  const { token } = useAppContext;
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="citizenportal"
          element={token ? <Layout /> : <CitizenLogin />}
        >
          <Route path="/citizendashboard" element={CitizenDashboard} />
        </Route>
        <Route path="/citizenregistration" element={<CitizenRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
