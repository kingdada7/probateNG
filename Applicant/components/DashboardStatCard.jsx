import React from "react";

const DashboardStatCard = ({ label, value, icon, iconBg, trend }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          {label}
        </span>
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>
      </div>
      <span className="text-4xl font-bold text-gray-900 leading-none">
        {value}
      </span>
      <div className="text-xs">{trend}</div>
    </div>
  );
};

export default DashboardStatCard;
