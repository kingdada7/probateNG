import React, { useEffect, useState } from "react";
import { Search, Eye, FileText } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const AssignedApplications = () => {
  const { axios, navigate } = useAppContext();

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignedApplications = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          console.error("No admin token found");
          return;
        }

        const { data } = await axios.get(
          "/api/application/my-assigned",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("ASSIGNED APPLICATIONS:", data);

        if (data.success) {
          setApplications(data.applications || []);
        }
      } catch (error) {
        console.error(
          "Error fetching assigned applications:",
          error.response?.data || error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAssignedApplications();
  }, [axios]);

  const filteredApplications = applications.filter((app) => {
    const searchValue = search.toLowerCase();

    const applicantName =
      app.applicant?.applicantFullName?.toLowerCase() || "";

    const deceasedName =
      app.deceased?.deceasedName?.toLowerCase() || "";

    const applicationType =
      app.applicationType?.applicationType?.toLowerCase() || "";

    return (
      applicantName.includes(searchValue) ||
      deceasedName.includes(searchValue) ||
      applicationType.includes(searchValue) ||
      app._id.toLowerCase().includes(searchValue)
    );
  });

  const statusBadge = (status) => {
    switch (status) {
      case "Draft":
        return (
          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
            Draft
          </span>
        );

      case "Pending Review":
        return (
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Pending Review
          </span>
        );

      case "Approved":
        return (
          <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Approved
          </span>
        );

      case "Rejected":
        return (
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            Rejected
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Assigned Applications
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Applications assigned to you for review and processing.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search applications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Applications */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {loading ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            Loading assigned applications...
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <FileText
              size={36}
              className="mx-auto text-gray-300"
            />

            <p className="mt-3 font-semibold text-gray-700">
              No assigned applications
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Applications assigned to you will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Application
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Applicant
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Type
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Assigned
                  </th>

                  <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {filteredApplications.map((app) => (
                  <tr
                    key={app._id}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-800">
                        {app.deceased?.deceasedName
                          ? `Estate of Late ${app.deceased.deceasedName}`
                          : "Probate Application"}
                      </p>

                      <p className="mt-1 font-mono text-xs text-gray-400">
                        {app._id}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {app.applicant?.applicantFullName || "N/A"}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {app.applicationType?.applicationType || "N/A"}
                    </td>

                    <td className="px-6 py-4">
                      {statusBadge(app.status)}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {app.assignedAt
                        ? new Date(
                            app.assignedAt,
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          navigate(
                            `/admin/dashboard/applications/${app._id}`,
                          )
                        }
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline"
                      >
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignedApplications;