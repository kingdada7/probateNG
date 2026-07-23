import React from "react";
import ApplicationNavbar from "../components/ApplicationNavbar";
import StepSideBar from "../components/StepSideBar";
import ApplicationInformationForm from "../components/ApplicationInformationForm";
import DeceasedInformationForm from "../components/DeceasedInformationForm";

const ApplicantInformation = () => {
  const GREEN = "#1a5c2a";
  return (
    <div>
      <ApplicationNavbar />

      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Step 2: Deceased Information
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
              <StepSideBar currentStep={2} />
            </div>

            {/* Form */}
            <div className="flex-1 min-w-0">
              <DeceasedInformationForm />
              <div className="flex gap-4 ml-90">
                <button className="px-6 py-3 text-gray-600 text-sm font-bold border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1a5c3a] text-white text-sm font-bold rounded-lg hover:bg-[#154d2f] flex items-center gap-2"
                >
                  Save & Continue
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInformation;
