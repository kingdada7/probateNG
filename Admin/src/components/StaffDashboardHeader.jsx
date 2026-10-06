import React from "react";
import { Bell } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const StaffDashboardHeader = () => {
  const { admin } = useAppContext();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">
          Tuesday, October 6, 2026
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Good morning, {admin?.fullName?.split(" ")[0] || "Staff"} 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your assigned probate work.
        </p>
      </div>

      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50">
        <Bell size={19} />
      </button>
    </div>
  );
};

export default StaffDashboardHeader;
