import React from "react";

import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import DashboardTable from "../components/DashboardTable";
import Faq from "../components/Faq";

const CitizenDashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="min-h-screen bg-gray-50 font-sans p-4">
        <DashboardHeader />
        <DashboardTable />
        <Faq />
      </div>
    </div>
  );
};

export default CitizenDashboard;
