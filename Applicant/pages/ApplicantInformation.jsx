import React from "react";
import ApplicationNavbar from "../components/ApplicationNavbar";
import StepSideBar from "../components/StepSideBar";
import { ExternalLink, Info } from "lucide-react";

const ApplicantInformation = () => {
  const GREEN = "#1a5c2a";
  return (
    <div>
      <ApplicationNavbar />

      <div className="space-y-5">
        <StepSideBar />

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
    </div>
  );
};

export default ApplicantInformation;
