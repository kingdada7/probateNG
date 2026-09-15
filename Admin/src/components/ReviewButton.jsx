import { Check, X } from "lucide-react";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ReviewButton = ({ applicationId, application, setApplication }) => {
  const { axios } = useAppContext();

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const handleApprove = async () => {
    try {
      const { data } = await axios.patch(
        `/api/hodadmin/applications/${applicationId}/review`,
        {
          status: "Approved",
        },
      );

      if (data.success) {
        setApplication(data.application);

        toast.success("Application approved successfully");
      }
    } catch (error) {
      console.error("Approve application error:", error);

      toast.error(
        error.response?.data?.message || "Failed to approve application",
      );
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      toast.error("Please provide a rejection reason");
      return;
    }

    try {
      const { data } = await axios.patch(
        `/api/hodadmin/applications/${applicationId}/review`,
        {
          status: "Rejected",
          rejectionReason: rejectionReason.trim(),
        },
      );

      if (data.success) {
        setApplication(data.application);
        setShowRejectModal(false);
        setRejectionReason("");

        toast.success("Application rejected successfully");
      }
    } catch (error) {
      console.error("Reject application error:", error);

      toast.error(
        error.response?.data?.message || "Failed to reject application",
      );
    }
  };

  return (
    <>
      {application?.status === "Pending Review" && (
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleApprove}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            <Check className="h-5 w-5" />
            Approve Application
          </button>

          <button
            onClick={() => setShowRejectModal(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            <X className="h-5 w-5" />
            Reject Application
          </button>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Reject Application
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Please provide a reason for rejecting this application.
              </p>
            </div>

            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Enter rejection reason..."
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionReason("");
                }}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleReject}
                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewButton;
