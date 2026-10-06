import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const ApplicationTable = () => {
  const { axios, navigate } = useAppContext();

  const [applications, setApplications] = useState([]);
  const [staff, setStaff] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          console.error("No admin token found");
          return;
        }

        const [applicationsResponse, staffResponse] = await Promise.all([
          axios.get("/api/application/get-admin-applications", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),

          axios.get("/api/hodadmin/staff", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (applicationsResponse.data.success) {
          setApplications(applicationsResponse.data.applications || []);
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

  const handleViewApplication = (applicationId) => {
    navigate(`/admin/dashboard/applications/${applicationId}`);
  };

  useEffect(() => {
    const getApplications = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        console.log("ADMIN TOKEN:", token);

        if (!token) {
          console.error("No admin token found");
          return;
        }

        const { data } = await axios.get(
          "/api/application/get-admin-applications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("APPLICATION API DATA:", data);

        if (data.success) {
          setApplications(data.applications || []);
        }
      } catch (error) {
        console.error(
          "Error fetching applications:",
          error.response?.data || error,
        );
      }
    };

    getApplications();
  }, [axios]);

  function statusBadge(status) {
    switch (status) {
      case "Draft":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
            Draft
          </span>
        );

      case "Pending Review":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            Pending Review
          </span>
        );

      case "Approved":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
            Approved
          </span>
        );

      case "Rejected":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-200">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
            Rejected
          </span>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">
          Recent Application Activity
        </h2>

        <button className="text-sm font-semibold hover:underline">
          View All
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 cursor-pointer hover:bg-gray-50">
              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Reference ID
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Application Name
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Submission Date
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Status
              </th>

              <th className="px-6 py-3.5 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {applications.map((app) => (
              <tr
                key={app._id}
                onClick={() => handleViewApplication(app._id)}
                className="transition-colors cursor-pointer  hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap">
                  {app._id}
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-gray-800 whitespace-nowrap">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">{statusBadge(app.status)}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewApplication(app._id);
                      }}
                      className="text-sm font-bold hover:underline whitespace-nowrap"
                    >
                      View Details
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        setSelectedApplication(app);
                        setShowAssignModal(true);
                      }}
                      className="text-sm font-semibold text-green-700 hover:underline whitespace-nowrap"
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

      {/* Mobile Cards */}
      <div className="sm:hidden divide-y divide-gray-100">
        {applications.map((app) => (
          <div key={app._id} className="px-5 py-4 space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-gray-800">
                  {app.deceased?.deceasedName
                    ? `Estate of Late ${app.deceased.deceasedName}`
                    : "Probate Application"}
                </div>

                <div className="font-mono text-[11px] text-gray-400 mt-0.5">
                  {app._id}
                </div>
              </div>

              {statusBadge(app.status)}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {new Date(app.createdAt).toLocaleDateString()}
              </span>

              <button className="text-sm font-bold hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {applications.length === 0 && (
        <div className="px-6 py-10 text-center text-gray-500">
          No applications found.
        </div>
      )}

      {showAssignModal && (
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
