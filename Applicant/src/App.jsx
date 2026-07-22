import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CitizenLogin from "./pages/CitizenLogin";
import CitizenRegistration from "./pages/CitizenRegistration";
import CitizenDashboard from "./pages/CitizenDashboard";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import ApplicantInformation from "./pages/ApplicantInformation";
import DeceasedInfromation from "./pages/DeceasedInfromation";

const App = () => {
  const { token } = useAppContext();

  return (
    <div>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="citizenportal"
          element={token ? <Layout /> : <CitizenLogin />}
        >
          <Route index element={<CitizenDashboard />} />

          <Route
            path="applicationinformation"
            element={<ApplicantInformation />}
          />

          <Route path="deceasedinformation" element={<DeceasedInfromation />} />
        </Route>

        <Route path="/citizenregistration" element={<CitizenRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
