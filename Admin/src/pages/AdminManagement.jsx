import { ArrowLeftRight, Ban, Download, UserPlus } from "lucide-react";
import React from "react";

const admins = [
  {
    initials: "CN",
    name: "Chidi Nwachukwu",
    email: "c.nwachukwu@fct.gov.ng",
    role: "ADMIN",
    department: "Registry Operations",
    activity: "10 mins ago",
    status: "ACTIVE",
  },
  {
    initials: "OA",
    name: "Olawale Adeyemi",
    email: "o.adeyemi@fct.gov.ng",
    role: "SUPER ADMIN",
    department: "Exec. Oversight",
    activity: "Today, 08:12 AM",
    status: "ACTIVE",
    highlighted: true,
  },
  {
    initials: "MM",
    name: "Mary Musa",
    email: "m.musa@fct.gov.ng",
    role: "ADMIN",
    department: "Audit & Compliance",
    activity: "Yesterday, 16:45",
    status: "INACTIVE",
  },
];

const AdminManagement = () => {
  return (
    <div>
      <section className="mt-8 overflow-hidden rounded-xl border border-[#e6ebe8] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
        {/* Section Header */}
        <div className="flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[19px] font-bold text-[#253047]">
              Administrative Personnel Overview
            </h2>

            <p className="mt-1 text-[14px] text-[#657995]">
              Manage access levels and review institutional staff status.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-[#d9e3de] px-5 text-[13px] font-semibold text-[#0a6631] transition hover:bg-[#f3f8f5]">
              <Download size={16} />
              Export Logs
            </button>

            <button className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#06672e] px-5 text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(0,100,45,0.18)] transition hover:bg-[#075c29]">
              <UserPlus size={17} />
              Add New Admin
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="bg-[#edf2f0] text-left">
                <th className="px-6 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  NAME & EMAIL
                </th>

                <th className="px-5 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  CURRENT ROLE
                </th>

                <th className="px-5 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  DEPARTMENT
                </th>

                <th className="px-5 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  LAST ACTIVITY
                </th>

                <th className="px-5 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  STATUS
                </th>

                <th className="px-5 py-4 text-[11px] font-bold tracking-wide text-[#627690]">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {admins.map((admin) => (
                <tr
                  key={admin.email}
                  className={`border-b border-[#edf0ef] ${
                    admin.highlighted ? "bg-[#fffdf4]" : "bg-white"
                  }`}
                >
                  {/* Name */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-[#eef3f7] text-[12px] font-bold text-[#11703c]">
                        {admin.initials}
                      </div>

                      <div>
                        <p className="text-[14px] font-bold text-[#253047]">
                          {admin.name}
                        </p>

                        <p className="mt-1 text-[12px] text-[#657995]">
                          {admin.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-5">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                        admin.role === "SUPER ADMIN"
                          ? "bg-[#d4a900] text-white"
                          : "bg-[#e4f0e9] text-[#087139]"
                      }`}
                    >
                      {admin.role}
                    </span>
                  </td>

                  {/* Department */}
                  <td className="px-5 text-[14px] text-[#52657f]">
                    {admin.department}
                  </td>

                  {/* Activity */}
                  <td className="px-5 text-[14px] text-[#52657f]">
                    {admin.activity}
                  </td>

                  {/* Status */}
                  <td className="px-5">
                    <div
                      className={`flex items-center gap-2 text-[12px] font-bold ${
                        admin.status === "ACTIVE"
                          ? "text-[#0aa04c]"
                          : "text-[#9babc0]"
                      }`}
                    >
                      <span
                        className={`h-[6px] w-[6px] rounded-full ${
                          admin.status === "ACTIVE"
                            ? "bg-[#0aa04c]"
                            : "bg-[#9babc0]"
                        }`}
                      />

                      {admin.status}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-5">
                    <div className="flex items-center gap-5 text-[#9badc1]">
                      <button>
                        <ArrowLeftRight size={18} />
                      </button>

                      <button>
                        <Ban size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 bg-[#f8fafb] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[#657995]">
            Showing 1 to 3 of 24 Personnel Records
          </p>

          <div className="flex items-center gap-2">
            <PaginationButton>Previous</PaginationButton>
            <PaginationButton active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>Next</PaginationButton>
          </div>
        </div>
      </section>
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


export default AdminManagement;
