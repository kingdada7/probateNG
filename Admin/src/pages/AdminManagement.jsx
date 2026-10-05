import React, { useEffect, useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  Clock3,
  Search,
  Check,
  X,
  ShieldCheck,
  Building2,
  Mail,
  BadgeCheck,
} from "lucide-react";
import toast from "react-hot-toast";

import { useAppContext } from "../context/AppContext";

const StaffManagement = () => {
  const { admin, fetchAllStaff, updateStaffStatus } = useAppContext();

  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  const pendingCount = staff.filter((item) => item.status === "pending").length;

  const approvedCount = staff.filter(
    (item) => item.status === "approved",
  ).length;

  const rejectedCount = staff.filter(
    (item) => item.status === "rejected",
  ).length;

  const pendingStaff = staff.filter((item) => item.status === "pending");

  /* ================= FETCH STAFF ================= */

  const loadStaff = async () => {
    try {
      setLoading(true);

      const data = await fetchAllStaff();

      if (data.success) {
        setStaff(data.staff);
      }
    } catch (error) {
      toast.error("Error loading staff:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStaff();
  }, []);

  /* ================= STAFF ACTION ================= */

  const handleStatusChange = async (staffId, status) => {
    const action = status === "approved" ? "approve" : "reject";

    const confirmed = window.confirm(
      `Are you sure you want to ${action} this staff registration?`,
    );

    if (!confirmed) return;

    try {
      setProcessingId(staffId);

      const data = await updateStaffStatus(staffId, status);

      if (data.success) {
        setStaff((current) =>
          current.map((item) =>
            item._id === staffId ? { ...item, status } : item,
          ),
        );
      }
    } catch (error) {
      toast.error("Error updating staff:", error);
    } finally {
      setProcessingId(null);
    }
  };

  /* ================= SEARCH ================= */

  const filteredStaff = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return pendingStaff;

    return pendingStaff.filter((item) =>
      [item.fullName, item.email, item.staffId, item.department].some((value) =>
        value?.toLowerCase().includes(query),
      ),
    );
  }, [pendingStaff, search]);

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* ================= HEADER ================= */}

      <header className="border-b border-[#e2e8e5] bg-white px-5 py-5 sm:px-7 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f3ed]">
                <ShieldCheck size={19} className="text-[#08713a]" />
              </div>

              <h1 className="text-[20px] font-bold text-[#243047]">
                Staff Management
              </h1>
            </div>

            <p className="mt-2 text-[12px] text-[#718096]">
              Manage Probate Registry staff registrations and access.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[13px] font-bold text-[#243047]">
              {admin?.fullName}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase text-[#c7a008]">
              Head of Department
            </p>
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}

      <main className="px-4 py-6 sm:px-6 lg:px-8">
        {/* ================= STATS ================= */}

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={Users}
            title="Total Staff"
            value={staff.length}
            iconBg="bg-[#e8f3ed]"
            iconColor="text-[#08713a]"
          />

          <Stat
            icon={Clock3}
            title="Pending"
            value={pendingCount}
            iconBg="bg-[#fff4d7]"
            iconColor="text-[#b17b00]"
          />

          <Stat
            icon={UserCheck}
            title="Approved"
            value={approvedCount}
            iconBg="bg-[#e2f5e9]"
            iconColor="text-[#08713a]"
          />

          <Stat
            icon={UserX}
            title="Rejected"
            value={rejectedCount}
            iconBg="bg-[#ffe7e7]"
            iconColor="text-[#d73535]"
          />
        </section>

        {/* ================= REQUEST PANEL ================= */}

        <section className="mt-6 overflow-hidden rounded-xl border border-[#e0e7e3] bg-white shadow-sm">
          {/* Panel Header */}

          <div className="border-b border-[#e8eeeb] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[16px] font-bold text-[#243047]">
                    Pending Staff Requests
                  </h2>

                  {pendingCount > 0 && (
                    <span className="rounded-full bg-[#fff0f0] px-2 py-0.5 text-[10px] font-bold text-[#d73535]">
                      {pendingCount}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[12px] text-[#8794a5]">
                  Review registrations before granting system access.
                </p>
              </div>

              {/* Search */}

              <div className="relative w-full lg:w-[300px]">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa8b8]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search staff..."
                  className="h-10 w-full rounded-lg border border-[#dfe6e2] bg-[#f9fbfa] pl-9 pr-3 text-[12px] text-[#243047] outline-none transition focus:border-[#08713a] focus:ring-2 focus:ring-[#08713a]/10"
                />
              </div>
            </div>
          </div>

          {/* ================= LOADING ================= */}

          {loading && (
            <div className="space-y-3 p-5">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-[90px] animate-pulse rounded-lg bg-[#f1f5f3]"
                />
              ))}
            </div>
          )}

          {/* ================= EMPTY ================= */}

          {!loading && filteredStaff.length === 0 && (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f3ed]">
                <BadgeCheck size={28} className="text-[#08713a]" />
              </div>

              <h3 className="mt-4 text-[15px] font-bold text-[#243047]">
                {search ? "No matching staff" : "No pending requests"}
              </h3>

              <p className="mt-2 max-w-sm text-[12px] leading-5 text-[#7b8a9d]">
                {search
                  ? "Try another name, email, staff ID or department."
                  : "New staff registrations will appear here when they require approval."}
              </p>
            </div>
          )}

          {/* ================= DESKTOP ================= */}

          {!loading && filteredStaff.length > 0 && (
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8eeeb] bg-[#f9fbfa]">
                    <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-[#7b8a9d]">
                      Staff Member
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-[#7b8a9d]">
                      Staff ID
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-[#7b8a9d]">
                      Department
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wide text-[#7b8a9d]">
                      Status
                    </th>

                    <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-wide text-[#7b8a9d]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredStaff.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b border-[#edf1ef] last:border-0 hover:bg-[#fbfcfb]"
                    >
                      {/* Staff */}

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f3ed] text-[13px] font-bold text-[#08713a]">
                            {item.fullName?.charAt(0)?.toUpperCase()}
                          </div>

                          <div>
                            <p className="text-[13px] font-bold text-[#243047]">
                              {item.fullName}
                            </p>

                            <div className="mt-1 flex items-center gap-1 text-[11px] text-[#8997a8]">
                              <Mail size={11} />
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Staff ID */}

                      <td className="px-4 py-4">
                        <span className="rounded bg-[#f2f5f3] px-2 py-1 font-mono text-[10px] text-[#536276]">
                          {item.staffId}
                        </span>
                      </td>

                      {/* Department */}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2 text-[12px] text-[#536276]">
                          <Building2 size={14} />
                          {item.department}
                        </div>
                      </td>

                      {/* Status */}

                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff4d7] px-2.5 py-1 text-[10px] font-bold text-[#b17b00]">
                          <Clock3 size={11} />
                          Pending
                        </span>
                      </td>

                      {/* Actions */}

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            disabled={processingId === item._id}
                            onClick={() =>
                              handleStatusChange(item._id, "approved")
                            }
                            className="flex items-center gap-1.5 rounded-md bg-[#08713a] px-3 py-2 text-[11px] font-bold text-white transition hover:bg-[#065d30] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Check size={14} />
                            Approve
                          </button>

                          <button
                            disabled={processingId === item._id}
                            onClick={() =>
                              handleStatusChange(item._id, "rejected")
                            }
                            className="flex items-center gap-1.5 rounded-md border border-[#f0caca] bg-[#fff7f7] px-3 py-2 text-[11px] font-bold text-[#d73535] transition hover:bg-[#ffecec] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <X size={14} />
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= MOBILE ================= */}

          {!loading && filteredStaff.length > 0 && (
            <div className="space-y-3 p-4 md:hidden">
              {filteredStaff.map((item) => (
                <div
                  key={item._id}
                  className="rounded-lg border border-[#e1e8e4] bg-[#fbfcfc] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f3ed] text-[13px] font-bold text-[#08713a]">
                        {item.fullName?.charAt(0)?.toUpperCase()}
                      </div>

                      <div>
                        <p className="text-[13px] font-bold text-[#243047]">
                          {item.fullName}
                        </p>

                        <p className="mt-1 text-[10px] text-[#8997a8]">
                          {item.email}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-[#fff4d7] px-2 py-1 text-[9px] font-bold text-[#b17b00]">
                      Pending
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md bg-white p-3">
                      <p className="text-[9px] font-bold uppercase text-[#9aa7b5]">
                        Staff ID
                      </p>

                      <p className="mt-1 font-mono text-[11px] text-[#536276]">
                        {item.staffId}
                      </p>
                    </div>

                    <div className="rounded-md bg-white p-3">
                      <p className="text-[9px] font-bold uppercase text-[#9aa7b5]">
                        Department
                      </p>

                      <p className="mt-1 text-[11px] text-[#536276]">
                        {item.department}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      disabled={processingId === item._id}
                      onClick={() => handleStatusChange(item._id, "approved")}
                      className="flex items-center justify-center gap-1.5 rounded-md bg-[#08713a] px-3 py-2.5 text-[11px] font-bold text-white disabled:opacity-50"
                    >
                      <Check size={14} />
                      Approve
                    </button>

                    <button
                      disabled={processingId === item._id}
                      onClick={() => handleStatusChange(item._id, "rejected")}
                      className="flex items-center justify-center gap-1.5 rounded-md border border-[#f0caca] bg-white px-3 py-2.5 text-[11px] font-bold text-[#d73535] disabled:opacity-50"
                    >
                      <X size={14} />
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

/* ================= STAT COMPONENT ================= */

const Stat = ({ icon: Icon, title, value, iconBg, iconColor }) => {
  return (
    <div className="rounded-xl border border-[#e0e7e3] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#7b8a9d]">
            {title}
          </p>

          <p className="mt-2 text-[25px] font-bold text-[#243047]">{value}</p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon size={21} className={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
