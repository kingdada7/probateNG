import React from "react";

const StatCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  valueColor = "text-[#202d42]",
  badge,
  badgeColor,
}) => {
  return (
    <div className="relative min-h-[185px] rounded-xl border border-[#e6ebe8] bg-white p-6 shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-[55px] w-[55px] items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon size={25} className={iconColor} />
        </div>

        {badge && (
          <span
            className={`rounded-md px-3 py-2 text-[11px] font-bold ${badgeColor}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="mt-5">
        <p className="text-[14px] font-medium text-[#637694]">{title}</p>

        <p className={`mt-1 text-[32px] font-bold ${valueColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
