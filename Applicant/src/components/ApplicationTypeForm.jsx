import React from "react";
import ApplicationTypeOptions from "./ApplicationTypeOptions";
import EstateSummary from "./EstateSummary";

const ApplicationTypeForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <ApplicationTypeOptions />
      <EstateSummary />
    </div>
  );
};

export default ApplicationTypeForm;
