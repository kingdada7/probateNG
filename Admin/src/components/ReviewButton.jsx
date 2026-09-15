import { Check, X } from "lucide-react";
import React from "react";

const ReviewButton = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          // onClick={handleApprove}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          <Check className="h-5 w-5" />
          Approve Application
        </button>

        <button
          // onClick={handleReject}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
        >
          <X className="h-5 w-5" />
          Reject Application
        </button>
      </div>
    </div>
  );
};

export default ReviewButton;
