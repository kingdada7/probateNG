import React from "react";
import {
  Bell,
  Users,
  ClipboardClock,
  Radio,
  Terminal,
  ArrowLeftRight,
  Ban,
  ShieldCheck,
  KeyRound,
  History,
  UserPlus,
  Download,
} from "lucide-react";



const HodDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* ================= HEADER ================= */}
      <header className="hidden h-[55px] border-b border-[#e2e8e5] bg-white px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[21px] font-bold leading-none text-[#09652e]">
            Admin Management Oversight
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
      <div className="px-4 pb-10 pt-[76px] sm:px-6 lg:px-8 lg:pt-8">
        {/* STAT CARDS */}
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

        {/* PERSONNEL */}
       

        {/* BOTTOM */}
        <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[1fr_330px]">
          {/* Authorization Logs */}
          <div className="rounded-xl bg-white p-7 shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <History size={22} className="text-[#08743a]" />

                <h2 className="text-[18px] font-bold text-[#253047]">
                  Recent Authorization Logs
                </h2>
              </div>

              <button className="text-[12px] font-bold text-[#08713a]">
                View All Logs
              </button>
            </div>

            <div className="mt-8 space-y-7">
              <LogItem
                icon={ShieldCheck}
                text={
                  <>
                    <strong>Olawale Adeyemi</strong> updated access permissions
                    for Bank Portal 4
                  </>
                }
                time="TODAY, 11:24 AM • IP: 192.168.1.45"
              />

              <LogItem
                icon={KeyRound}
                danger
                text={
                  <>
                    Failed login attempt on account{" "}
                    <strong>m.musa@fct.gov.ng</strong>
                  </>
                }
                time="TODAY, 10:05 AM • IP: 41.203.1.18"
              />
            </div>
          </div>

          {/* Advisory */}
          <div className="rounded-xl bg-[#086b2f] p-7 text-white">
            <p className="text-[11px] font-bold tracking-[2px] text-[#e6bd00]">
              ADMINISTRATIVE ADVISORY
            </p>

            <h2 className="mt-2 text-[22px] font-bold leading-tight">
              Bi-Annual Access Review Protocol
            </h2>

            <p className="mt-5 text-[14px] leading-6 text-white/75">
              According to Section 4.2 of the Judicial Admin Policy, all
              Administrative access levels must be verified every 180 days.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  valueColor = "text-[#202d42]",
  badge,
  badgeColor,
}) => {
  return (
    <div className="relative min-h-[185px] rounded-xl border border-[#e6ebe8] bg-white p-6 shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-[55px] w-[55px] items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon size={25} className={iconColor} />
        </div>

        {badge && (
          <span
            className={`rounded-md px-3 py-2 text-[11px] font-bold ${badgeColor}`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="mt-5">
        <p className="text-[14px] font-medium text-[#637694]">{title}</p>

        <p className={`mt-1 text-[32px] font-bold ${valueColor}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

const PaginationButton = ({ children, active }) => {
  return (
    <button
      className={`flex h-[32px] min-w-[34px] items-center justify-center rounded-md border px-3 text-[12px] font-semibold ${
        active
          ? "border-[#086b2f] bg-[#086b2f] text-white"
          : "border-[#dce4e1] bg-white text-[#4e6079] hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
};

const LogItem = ({ icon: Icon, text, time, danger }) => {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${
          danger ? "bg-[#ffe2e2]" : "bg-[#e0edff]"
        }`}
      >
        <Icon
          size={16}
          className={danger ? "text-[#ef4141]" : "text-[#3778dd]"}
        />
      </div>

      <div>
        <p className="text-[14px] text-[#253047]">{text}</p>

        <p className="mt-1 text-[10px] text-[#9aacc2]">{time}</p>
      </div>
    </div>
  );
};

export default HodDashboard;