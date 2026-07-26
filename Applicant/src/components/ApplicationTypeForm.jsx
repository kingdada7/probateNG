import React, { useState } from "react";
import ApplicationTypeOptions from "./ApplicationTypeOptions";
import EstateSummary from "./EstateSummary";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AssestDetails from "./AssestDetails";
import SubTotal from "./SubTotal";
const ApplicationTypeForm = () => {
  const [applicationType, setApplicationType] = useState("");
  const [estate, setEstate] = useState("");
  const GREEN = "#1a5c2a";
  return (
    <div className="flex flex-col gap-4">
      <ApplicationTypeOptions
        applicationType={applicationType}
        setApplicationType={setApplicationType}
      />
      <EstateSummary estate={estate} setEstate={setEstate} />
      <AssestDetails />
      <SubTotal />

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 py-2">
        <button
          // onClick={onBack}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Deceased Info
        </button>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-7 py-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            Save Draft
          </button>
          <button
            // onClick={onContinue}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: GREEN }}
          >
            Save &amp; Continue
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTypeForm;
