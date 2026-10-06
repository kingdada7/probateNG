import React from "react";

const StaffStatCard = ({
  title,
  value,
  description,
  icon: Icon,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold text-gray-900">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f1e9] text-[#086b2f]">
          <Icon size={20} />
        </div>
      </div>

      <p className="mt-3 text-xs font-medium text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default StaffStatCard;