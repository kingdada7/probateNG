import React from "react";
import {
  Bell,
  Users,
  ClipboardClock,
  Radio,
  Terminal,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ApplicationDashboardTable from "../components/ApplicationDashboardTable";

const HodDashboard = () => {
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

        <div className="flex items-center gap-5">

          {/* Notification */}
          <div className="relative border-r border-gray-200 pr-6">
            <Bell size={21} className="text-[#8fa0b5]" />

            <span className="absolute -right-1 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#e84242] text-[10px] font-bold text-white">
              3
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[14px] font-bold text-[#243047]">
                Hon. Justice A. Bello
              </p>

              <p className="text-[10px] font-bold text-[#d2a900]">
                SUPERADMIN
              </p>
            </div>

            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#b8d3c2] bg-[#edf5ef]">
              <Users size={21} className="text-[#83a88e]" />
            </div>
          </div>

        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="px-4 pb-10 pt-[76px] sm:px-6 lg:px-8 lg:pt-8">

        {/* ================= STAT CARDS ================= */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={Users}
            iconBg="bg-[#e8f3ed]"
            iconColor="text-[#08713a]"
            title="Total Admin Staff"
            value="24"
            badge="+2 this week"
            badgeColor="bg-[#d9f8e4] text-[#0a9b4a]"
          />

          <StatCard
            icon={ClipboardClock}
            iconBg="bg-[#f9f3df]"
            iconColor="text-[#d4aa19]"
            title="Pending Approvals"
            value="03"
            valueColor="text-[#e32e2e]"
            badge="Action Required"
            badgeColor="bg-[#ffe0e0] text-[#e12e2e]"
          />

          <StatCard
            icon={Radio}
            iconBg="bg-[#e2edff]"
            iconColor="text-[#3379e6]"
            title="Active Sessions"
            value="08"
          />

          <StatCard
            icon={Terminal}
            iconBg="bg-[#f1e4ff]"
            iconColor="text-[#8c32db]"
            title="System Alerts"
            value="12"
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