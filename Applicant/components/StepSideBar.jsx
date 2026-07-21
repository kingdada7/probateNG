import { FileText, Upload, User, UserX } from "lucide-react";
import React from "react";

const StepSideBar = () => {
  const GREEN = "#1a5c2a";
  const steps = [
    {
      id: 1,
      label: "Applicant Info",
      sub: "Active Step",
      icon: <User size={16} />,
      active: true,
    },
    {
      id: 2,
      label: "Deceased Info",
      sub: "Pending",
      icon: <UserX size={16} />,
      active: false,
    },
    {
      id: 3,
      label: "Application Type",
      sub: "Pending",
      icon: <FileText size={16} />,
      active: false,
    },
    {
      id: 4,
      label: "Document Uploads",
      sub: "Pending",
      icon: <Upload size={16} />,
      active: false,
    },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-start gap-3">
            {/* Icon + vertical line */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  step.active ? "text-white" : "bg-gray-100 text-gray-400"
                }`}
                style={step.active ? { backgroundColor: GREEN } : {}}
              >
                {step.icon}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-px flex-1 my-1 min-h-[28px] ${step.active ? "bg-gray-300" : "bg-gray-200"}`}
                />
              )}
            </div>
            {/* Label */}
            <div className={`pt-1.5 pb-${i < steps.length - 1 ? "0" : "0"}`}>
              <div
                className={`text-sm font-bold leading-tight ${step.active ? "text-gray-900" : "text-gray-400"}`}
                style={step.active ? { color: GREEN } : {}}
              >
                {step.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{step.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSideBar;
