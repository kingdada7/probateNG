import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const ApplicationDashboardTable = () => {
  const { axios } = useAppContext();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===============================
  // FETCH APPLICATIONS
  // ===============================

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await axios.get(
        "/api/application/get-admin-applications"
      );

      if (data.success) {
        setApplications(data.applications);
      }
    } catch (error) {
      console.error("Failed to fetch applications:", error);

      setError(
        error.response?.data?.message ||
          "Failed to fetch applications"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // ===============================
  // STATUS BADGE
  // ===============================

  function statusBadge(status) {
    switch (status) {
      case "Draft":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
            Draft
          </span>
        );

      case "Pending Review":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"></span>
            Pending Review
          </span>
        );

      case "Approved":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>
            Approved
          </span>
        );

      case "Rejected":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"></span>
            Rejected
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
            Unknown
          </span>
        );
    }
  }

  // ===============================
  // LOADING
  // ===============================

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-lg font-bold text-gray-900">
            Recent Application Activity
          </h2>
        </div>

        <div className="px-6 py-10 text-center text-sm text-gray-400">
          Loading applications...
        </div>
      </div>
    );
  }

  // ===============================
  // ERROR
  // ===============================

  if (error) {
    return (
      <div>
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-lg font-bold text-gray-900">
            Recent Application Activity
          </h2>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-sm text-red-500">{error}</p>

          <button
            onClick={fetchApplications}
            className="mt-3 rounded-lg bg-[#09652e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#075426]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ===============================
          HEADER
      =============================== */}

      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">
          Recent Application Activity
        </h2>

        <button className="text-sm font-semibold hover:underline">
          View All
        </button>
      </div>

      {/* ===============================
          DESKTOP TABLE
      =============================== */}

      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-100">

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Reference ID
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Application Name
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Submission Date
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Application Type
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Status
              </th>

            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">

            {applications.map((app) => (

              <tr
                key={app._id}
                className="transition-colors hover:bg-gray-50"
              >

                {/* Reference ID */}

                <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-gray-500">
                  {app._id}
                </td>

                {/* Application Name */}

                <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-800">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </td>

                {/* Submission Date */}

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {app.createdAt
                    ? new Date(app.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "—"}
                </td>

                {/* Application Type */}

                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {app.applicationType?.applicationType || "—"}
                </td>

                {/* Status */}

                <td className="px-6 py-4">
                  {statusBadge(app.status)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

      {/* ===============================
          MOBILE CARDS
      =============================== */}

      <div className="divide-y divide-gray-100 sm:hidden">

        {applications.map((app) => (

          <div
            key={app._id}
            className="space-y-2.5 px-5 py-4"
          >

            <div className="flex items-start justify-between gap-3">

              <div>

                <div className="text-sm font-bold text-gray-800">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </div>

                <div className="mt-0.5 font-mono text-[11px] text-gray-400">
                  {app._id}
                </div>

              </div>

              {statusBadge(app.status)}

            </div>

            <div className="flex items-center justify-between">

              <span className="text-xs text-gray-500">
                {app.createdAt
                  ? new Date(app.createdAt).toLocaleDateString(
                      "en-GB"
                    )
                  : "—"}
              </span>

              <button className="text-sm font-bold hover:underline">
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ===============================
          EMPTY STATE
      =============================== */}

      {applications.length === 0 && (
        <div className="px-6 py-10 text-center text-sm text-gray-500">
          No applications found.
        </div>
      )}

    </div>
  );
};

export default ApplicationDashboardTable;