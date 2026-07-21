import React from "react";

import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";

const CitizenDashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="min-h-screen bg-gray-50 font-sans p-4">
        
        <DashboardHeader />
      </div>
    </div>
  );
};

export default CitizenDashboard;
