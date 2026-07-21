import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FolderOpen,
  Minus,
  Plus,
  Search,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";
import React from "react";
import { useAppContext } from "../context/AppContext";
import DashboardStatCard from "./DashboardStatCard";

const DashboardHeader = () => {
  const { user } = useAppContext();
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mt-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Welcome back ,{" "}
            <span className="text-[#1a5c2a]  mt-1 font-extrabold font-sans">
              {user?.fullName}
            </span>
          </h1>
        </div>
        <div className="flex flex-col xs:flex-row gap-3 shrink-0">
          <button className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap bg-[#1a5c2a]">
            <Plus size={16} strokeWidth={2.5} />
            New Probate Application
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">
            <Search size={15} />
            View Application Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <DashboardStatCard
          label="Total Applications"
          value={12}
          iconBg="bg-green-50"
          icon={<FolderOpen size={20} className="text-[#1a5c2a]" />}
          trend={
            <span className="flex items-center gap-1 text-green-600 font-semibold">
              <TrendingUp size={12} />
              <span>20%</span>
              <span className="text-gray-400 font-normal ml-0.5">
                from last month
              </span>
            </span>
          }
        />
        <DashboardStatCard
          label="Pending"
          value={5}
          iconBg="bg-amber-50"
          icon={<ClipboardList size={20} className="text-amber-500" />}
          trend={
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <ArrowRight size={12} />
              <span>10%</span>
              <span className="text-gray-400 font-normal ml-0.5">
                awaiting review
              </span>
            </span>
          }
        />
        <DashboardStatCard
          label="Approved"
          value={4}
          iconBg="bg-green-50"
          icon={<BadgeCheck size={20} className="text-[#1a5c2a]" />}
          trend={
            <span className="flex items-center gap-1 text-red-500 font-semibold">
              <TrendingDown size={12} />
              <span>5%</span>
              <span className="text-gray-400 font-normal ml-0.5">
                compared to prev.
              </span>
            </span>
          }
        />
        <DashboardStatCard
          label="Rejected"
          value={3}
          iconBg="bg-red-50"
          icon={<XCircle size={20} className="text-red-500" />}
          trend={
            <span className="flex items-center gap-1 text-gray-500 font-semibold">
              <Minus size={12} />
              <span>0%</span>
              <span className="text-gray-400 font-normal ml-0.5">
                no change
              </span>
            </span>
          }
        />
      </div>
    </>
  );
};

export default DashboardHeader;
