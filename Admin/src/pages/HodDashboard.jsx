
import React, { useEffect, useState } from "react";
import {
  Users,
  ClipboardClock,
  Radio,
  Terminal,
  Circle,
  Clock3,
  ArrowRight,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ApplicationDashboardTable from "../components/ApplicationDashboardTable";
import { useAppContext } from "../context/AppContext";

const HodDashboard = () => {
  const { admin, axios } = useAppContext();

  const [applications, setApplications] = useState([]);
  const [staff, setStaff] = useState([]);

  // ================= APPLICATIONS =================
  useEffect(() => {
    const getApplications = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) return;

        const { data } = await axios.get(
          "/api/application/get-admin-applications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

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

  // ================= STAFF =================
  useEffect(() => {
    const getStaff = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) return;

        const { data } = await axios.get("/api/hodadmin/staff", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data.success) {
          setStaff(data.staff || []);
        }
      } catch (error) {
        console.error(
          "Error fetching staff:",
          error.response?.data || error,
        );
      }
    };

    getStaff();
  }, [axios]);

  // ================= STATISTICS =================

  const pendingApplications = applications.filter(
    (application) => application.status === "Pending Review",
  ).length;

  const assignedApplications = applications.filter(
    (application) =>
      application.assignedTo &&
      application.status !== "Approved" &&
      application.status !== "Rejected",
  ).length;

  const completedApplications = applications.filter(
    (application) =>
      application.status === "Approved" ||
      application.status === "Rejected",
  ).length;

  // ================= STAFF PRESENCE =================

  const getStaffStatus = (lastActive) => {
    if (!lastActive) return "offline";

    const lastActiveTime = new Date(lastActive).getTime();
    const now = Date.now();

    const minutesAgo = (now - lastActiveTime) / (1000 * 60);

    if (minutesAgo < 2) return "online";
    if (minutesAgo < 10) return "away";

    return "offline";
  };

  const getTimeAgo = (lastActive) => {
    if (!lastActive) return "No activity recorded";

    const lastActiveTime = new Date(lastActive).getTime();
    const now = Date.now();

    const secondsAgo = Math.floor((now - lastActiveTime) / 1000);

    if (secondsAgo < 60) {
      return "Active now";
    }

    const minutesAgo = Math.floor(secondsAgo / 60);

    if (minutesAgo < 60) {
      return `Active ${minutesAgo} min${minutesAgo === 1 ? "" : "s"} ago`;
    }

    const hoursAgo = Math.floor(minutesAgo / 60);

    if (hoursAgo < 24) {
      return `Active ${hoursAgo} hr${hoursAgo === 1 ? "" : "s"} ago`;
    }

    const daysAgo = Math.floor(hoursAgo / 24);

    return `Active ${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  };

  const getStatusDetails = (status) => {
    switch (status) {
      case "online":
        return {
          label: "Online",
          dot: "text-[#16a34a]",
          text: "text-[#15803d]",
        };

      case "away":
        return {
          label: "Away",
          dot: "text-[#d4a017]",
          text: "text-[#a16207]",
        };

      default:
        return {
          label: "Offline",
          dot: "text-[#94a3b8]",
          text: "text-[#64748b]",
        };
    }
  };

  const displayedStaff = staff.slice(0, 5);

  const onlineStaff = staff.filter(
    (member) => getStaffStatus(member.lastActive) === "online",
  ).length;

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* ================= HEADER ================= */}
      <header className="hidden h-[55px] border-b border-[#e2e8e5] bg-white px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[21px] font-bold leading-none text-[#09652e]">
            HOD Management Oversight
          </h1>

          <p className="mt-1 text-[13px] text-[#61738f]">
            Head of Probate Authority Panel
          </p>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[14px] font-bold text-[#243047]">
              {admin?.fullName}
            </p>

            <p className="text-[10px] font-bold uppercase text-[#d2a900]">
              {admin?.role}
            </p>
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="px-4 pb-10 pt-[76px] sm:px-6 lg:px-8 lg:pt-8">

        {/* ================= STAT CARDS ================= */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {/* TOTAL STAFF */}
          <StatCard
            icon={Users}
            iconBg="bg-[#e8f3ed]"
            iconColor="text-[#08713a]"
            title="Total Admin Staff"
            value={staff.length}
            badge="Active staff"
            badgeColor="bg-[#d9f8e4] text-[#0a9b4a]"
          />

          {/* PENDING APPLICATIONS */}
          <StatCard
            icon={ClipboardClock}
            iconBg="bg-[#f9f3df]"
            iconColor="text-[#d4aa19]"
            title="Pending Applications"
            value={pendingApplications}
            valueColor="text-[#e32e2e]"
            badge="Action Required"
            badgeColor="bg-[#ffe0e0] text-[#e12e2e]"
          />

          {/* ASSIGNED APPLICATIONS */}
          <StatCard
            icon={Radio}
            iconBg="bg-[#e2edff]"
            iconColor="text-[#3379e6]"
            title="Assigned Applications"
            value={assignedApplications}
            badge="With Staff"
            badgeColor="bg-[#dceaff] text-[#3379e6]"
          />

          {/* COMPLETED APPLICATIONS */}
          <StatCard
            icon={Terminal}
            iconBg="bg-[#f1e4ff]"
            iconColor="text-[#8c32db]"
            title="Completed Applications"
            value={completedApplications}
            badge="Approved / Rejected"
            badgeColor="bg-[#eee0ff] text-[#8c32db]"
          />
        </section>

        {/* ================= STAFF PRESENCE ================= */}
        <section className="mt-6 rounded-2xl border border-[#e2e8e5] bg-white shadow-sm">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-[#edf0ee] px-5 py-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[16px] font-bold text-[#243047]">
                  Staff Presence
                </h2>

                <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[10px] font-bold text-[#15803d]">
                  {onlineStaff} Online
                </span>
              </div>

              <p className="mt-1 text-[12px] text-[#718096]">
                Current staff availability
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-semibold text-[#09652e] transition hover:text-[#064d24]"
            >
              View all
              <ArrowRight size={14} />
            </button>
          </div>

          {/* STAFF LIST */}
          <div className="divide-y divide-[#edf0ee]">
            {displayedStaff.length > 0 ? (
              displayedStaff.map((member) => {
                const status = getStaffStatus(member.lastActive);
                const details = getStatusDetails(status);

                return (
                  <div
                    key={member._id || member.id}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    {/* STAFF INFO */}
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f3ed] text-[13px] font-bold text-[#08713a]">
                        {member.fullName
                          ?.split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase() || "ST"}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-bold text-[#243047]">
                          {member.fullName || "Unknown Staff"}
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#718096]">
                          {member.role || "Admin Staff"}
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="flex items-center gap-3">
                      <div className="hidden text-right sm:block">
                        <p
                          className={`text-[11px] font-semibold ${details.text}`}
                        >
                          {details.label}
                        </p>

                        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-[#94a3b8]">
                          <Clock3 size={11} />
                          {getTimeAgo(member.lastActive)}
                        </div>
                      </div>

                      <Circle
                        size={10}
                        fill="currentColor"
                        className={details.dot}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="px-5 py-8 text-center">
                <Users
                  size={24}
                  className="mx-auto text-[#cbd5e1]"
                />

                <p className="mt-2 text-[12px] text-[#718096]">
                  No staff members found.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= APPLICATIONS ================= */}
        <section className="mt-6">
          <ApplicationDashboardTable />
        </section>
      </main>
    </div>
  );
};

export default HodDashboard;
