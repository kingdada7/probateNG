import { AlertCircle } from "lucide-react";
import React from "react";

const ApplicationFooter = () => {
  return (
    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-4">
      <AlertCircle className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-yellow-900">
        <span className="font-bold">Notice:</span> Making a false declaration in
        a probate application is a criminal offense punishable under the Penal
        Code of the FCT. Ensure all information is accurate to the best of your
        knowledge.
      </p>
    </div>
  );
};

export default ApplicationFooter;
