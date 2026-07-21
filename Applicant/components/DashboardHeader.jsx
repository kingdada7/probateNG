import { Plus, Search } from "lucide-react";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Dashboard
        </h1>
        <p className="text-[#1a5c2a] text-sm mt-1 font-medium">
          Welcome back to the Official Probate Application Portal.
        </p>
      </div>
      <div className="flex flex-col xs:flex-row gap-3 shrink-0">
        <button className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
          <Plus size={16} strokeWidth={2.5} />
          New Probate Application
        </button>
        <button className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">
          <Search size={15} />
          View Application Status
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
