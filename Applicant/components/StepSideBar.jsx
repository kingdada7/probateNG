import {
  FileText,
  Upload,
  User,
  UserX,
  ExternalLink,
  Info,
} from "lucide-react";

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
    <>
      <div className="space-y-5">
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

      <div className="bg-[#f0f7f2] rounded-xl border border-[#c4deca] p-5">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: GREEN }}
          >
            <Info size={11} className="text-white" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-700">
            Instructions
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Please ensure all details match your official government
          identification (NIN, Passport, or Driver's License). Mismatched data
          may lead to delays or rejection.
        </p>
        <button
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
          style={{ color: GREEN }}
        >
          View Guidelines <ExternalLink size={13} />
        </button>
      </div>
      </div>
    </>
  );
};

export default StepSideBar;
