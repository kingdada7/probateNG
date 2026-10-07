import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import AssignApplicationModal from "./AssignApplicationModal";

const ApplicationTable = () => {
  const { axios, navigate } = useAppContext();

  const [applications, setApplications] = useState([]);
  const [staff, setStaff] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  // ================= FETCH APPLICATIONS + STAFF =================
  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          console.error("No admin token found");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [applicationsResponse, staffResponse] = await Promise.all([
          axios.get("/api/application/get-admin-applications", {
            headers,
          }),
          axios.get("/api/hodadmin/staff", {
            headers,
          }),
        ]);

        if (applicationsResponse.data.success) {
          setApplications(
            applicationsResponse.data.applications || [],
          );
        }

        if (staffResponse.data.success) {
          setStaff(staffResponse.data.staff || []);
        }
      } catch (error) {
        console.error(
          "Error fetching HOD data:",
          error.response?.data || error,
        );
      }
    };

    getData();
  }, [axios]);

  // ================= VIEW APPLICATION =================
  const handleViewApplication = (applicationId) => {
    navigate(`/admin/dashboard/applications/${applicationId}`);
  };

  // ================= STATUS BADGE =================
  function statusBadge(status) {
    switch (status) {
      case "Draft":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600 sm:px-3 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
            Draft
          </span>
        );

      case "Pending Review":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 sm:px-3 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            Pending Review
          </span>
        );

      case "Approved":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 sm:px-3 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            Approved
          </span>
        );

      case "Rejected":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600 sm:px-3 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
            Rejected
          </span>
        );

      default:
        return null;
    }
  }

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Recent Application Activity
          </h2>

          <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
            Review and manage probate applications
          </p>
        </div>

        <button
          type="button"
          className="self-start text-xs font-semibold text-gray-700 transition hover:underline sm:text-sm"
        >
          View All
        </button>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden w-full overflow-x-auto sm:block">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="whitespace-nowrap px-4 py-3.5 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400 md:px-6">
                Reference ID
              </th>

              <th className="whitespace-nowrap px-4 py-3.5 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400 md:px-6">
                Application Name
              </th>

              <th className="whitespace-nowrap px-4 py-3.5 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400 md:px-6">
                Submission Date
              </th>

              <th className="whitespace-nowrap px-4 py-3.5 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400 md:px-6">
                Status
              </th>

              <th className="whitespace-nowrap px-4 py-3.5 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400 md:px-6">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {applications.map((app) => (
              <tr
                key={app._id}
                onClick={() => handleViewApplication(app._id)}
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                {/* Reference */}
                <td className="max-w-[180px] px-4 py-4 font-mono text-[11px] text-gray-500 md:px-6 md:text-xs">
                  <span className="block truncate">
                    {app._id}
                  </span>
                </td>

                {/* Application */}
                <td className="max-w-[250px] px-4 py-4 md:px-6">
                  <span className="block truncate text-sm font-semibold text-gray-800">
                    {app.deceased?.deceasedName
                      ? `Estate of Late ${app.deceased.deceasedName}`
                      : "Probate Application"}
                  </span>
                </td>

                {/* Date */}
                <td className="whitespace-nowrap px-4 py-4 text-xs text-gray-600 md:px-6 sm:text-sm">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

                {/* Status */}
                <td className="px-4 py-4 md:px-6">
                  {statusBadge(app.status)}
                </td>

                {/* Actions */}
                <td className="px-4 py-4 md:px-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewApplication(app._id);
                      }}
                      className="whitespace-nowrap text-xs font-bold text-gray-700 hover:underline sm:text-sm"
                    >
                      View Details
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedApplication(app);
                        setShowAssignModal(true);
                      }}
                      className="whitespace-nowrap text-xs font-semibold text-green-700 hover:underline sm:text-sm"
                    >
                      {app.assignedTo ? "Reassign" : "Assign"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="divide-y divide-gray-100 sm:hidden">
        {applications.map((app) => (
          <div
            key={app._id}
            className="px-4 py-4 transition-colors hover:bg-gray-50"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-gray-800">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </h3>

                <p className="mt-1 truncate font-mono text-[10px] text-gray-400">
                  {app._id}
                </p>
              </div>

              <div className="shrink-0">
                {statusBadge(app.status)}
              </div>
            </div>

            {/* Details */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">
                  Submitted
                </p>

                <p className="mt-0.5 text-xs text-gray-600">
                  {new Date(app.createdAt).toLocaleDateString()}
                </p>
              </div>

              {app.assignedTo && (
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">
                    Assigned
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-gray-700">
                    {app.assignedTo.fullName || "Staff"}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3">
              <button
                type="button"
                onClick={() => handleViewApplication(app._id)}
                className="text-xs font-bold text-gray-700 hover:underline"
              >
                View Details
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedApplication(app);
                  setShowAssignModal(true);
                }}
                className="text-xs font-semibold text-green-700 hover:underline"
              >
                {app.assignedTo ? "Reassign" : "Assign"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= EMPTY STATE ================= */}
      {applications.length === 0 && (
        <div className="px-5 py-12 text-center sm:px-6">
          <p className="text-sm font-medium text-gray-600">
            No applications found.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Applications submitted by citizens will appear here.
          </p>
        </div>
      )}

      {/* ================= ASSIGN MODAL ================= */}
      {showAssignModal && selectedApplication && (
        <AssignApplicationModal
          application={selectedApplication}
          staff={staff}
          onClose={() => {
            setShowAssignModal(false);
            setSelectedApplication(null);
          }}
        />
      )}
    </div>
  );
};

export default ApplicationTable;