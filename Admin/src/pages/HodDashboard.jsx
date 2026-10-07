import React, { useEffect, useState } from "react";
import { Users, ClipboardClock, Radio, Terminal } from "lucide-react";

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

  // Applications waiting for HOD decision
  const pendingApplications = applications.filter(
    (application) => application.status === "Pending Review",
  ).length;

  // Applications currently assigned to staff
  const assignedApplications = applications.filter(
    (application) =>
      application.assignedTo &&
      application.status !== "Approved" &&
      application.status !== "Rejected",
  ).length;

  // Applications that have reached a final decision
  const completedApplications = applications.filter(
    (application) =>
      application.status === "Approved" ||
      application.status === "Rejected",
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

        {/* ================= APPLICATIONS ================= */}
        <section className="mt-6">
          <ApplicationDashboardTable />
        </section>

      </main>
    </div>
  );
};

export default HodDashboard;