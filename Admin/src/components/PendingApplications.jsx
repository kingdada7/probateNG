import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const PendingApplications = () => {
  const { axios, navigate } = useAppContext();

  const [applications, setApplications] = useState([]);
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

        console.log("MY ASSIGNED APPLICATIONS:", data);

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

  return (
    <div className="rounded-2xl border border-gray-100 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            My Assigned Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Applications assigned to you for processing.
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/admin/dashboard/assigned-applications")
          }
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          View All
        </button>
      </div>

      {loading ? (
        <div className="px-6 py-10 text-center text-sm text-gray-500">
          Loading applications...
        </div>
      ) : applications.length === 0 ? (
        <div className="px-6 py-10 text-center text-sm text-gray-500">
          No applications assigned to you.
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {applications.slice(0, 5).map((app) => (
            <div
              key={app._id}
              className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-800">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {app.applicant?.applicantFullName || "No applicant name"}
                </p>

                <p className="mt-1 font-mono text-[11px] text-gray-400">
                  {app._id}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-4">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {app.status}
                </span>

                <button
                  onClick={() =>
                    navigate(
                      `/admin/dashboard/applications/${app._id}`,
                    )
                  }
                  className="text-gray-500 hover:text-green-700"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingApplications;