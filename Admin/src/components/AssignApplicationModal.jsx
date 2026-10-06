import React, { useState } from "react";
import { X, UserCheck } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const AssignApplicationModal = ({
  application,
  staff,
  onClose,
  onAssigned,
}) => {
  const { axios } = useAppContext();

  const [selectedStaffId, setSelectedStaffId] = useState(
    application?.assignedTo?.staffId || "",
  );

  const [loading, setLoading] = useState(false);

  const handleAssign = async () => {
    if (!selectedStaffId) {
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      const { data } = await axios.patch(
        `/api/application/${application._id}/assign`,
        {
          staffId: selectedStaffId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("ASSIGN RESPONSE:", data);

      if (data.success) {
        onAssigned();
        onClose();
      }
    } catch (error) {
      console.error(
        "Assign application error:",
        error.response?.data || error,
      );
    } finally {
      setLoading(false);
    }
  };

  if (!application) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {application.assignedTo ? "Reassign Application" : "Assign Application"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Assign this application to a staff member.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Application */}
        <div className="px-6 pt-5">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Application
            </p>

            <p className="mt-1 text-sm font-bold text-gray-800">
              {application.deceased?.deceasedName
                ? `Estate of Late ${application.deceased.deceasedName}`
                : "Probate Application"}
            </p>

            <p className="mt-1 font-mono text-xs text-gray-400">
              {application._id}
            </p>
          </div>
        </div>

        {/* Staff Selection */}
        <div className="px-6 py-5">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Assign to Staff
          </label>

          <select
            value={selectedStaffId}
            onChange={(e) => setSelectedStaffId(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value="">Select staff member</option>

            {staff.map((member) => (
              <option key={member._id} value={member.staffId}>
                {member.fullName} — {member.staffId}
              </option>
            ))}
          </select>

          {staff.length === 0 && (
            <p className="mt-2 text-xs text-red-500">
              No staff members available.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleAssign}
            disabled={!selectedStaffId || loading}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1a5c3a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b602a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <UserCheck size={17} />

            {loading
              ? "Assigning..."
              : application.assignedTo
                ? "Reassign Application"
                : "Assign Application"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignApplicationModal;