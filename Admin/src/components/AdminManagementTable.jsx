import { ArrowLeftRight, Ban } from "lucide-react";
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

const AdminManagementTable = () => {
  return (
    <div>
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
    </div>
  );
};

export default AdminManagementTable;
