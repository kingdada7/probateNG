import React from "react";
import ApplicationNavbar from "../components/ApplicationNavbar";
import StepSideBar from "../components/StepSideBar";
import ApplicationTypeOptions from "../components/ApplicationTypeOptions";
import EstateSummary from "../components/EstateSummary";
import ApplicationTypeForm from "../components/ApplicationTypeForm";

const ApplicationType = () => {
  const GREEN = "#1a5c2a";
  return (
    <>
      <ApplicationNavbar />
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Step 3: Applicant Type
            </h1>
            <p className="mt-2 text-sm font-medium" style={{ color: GREEN }}>
              All information provided is under oath according to FCT Customary
              Court regulations.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full lg:w-[270px] shrink-0">
              <StepSideBar currentStep={3} />
            </div>

            <ApplicationTypeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationType;
