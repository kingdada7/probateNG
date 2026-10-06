import {
  LayoutDashboard,
  Users,
  ShieldUser,
  Landmark,
  FileText,
  ClipboardList,
  LogOut,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { useAppContext } from "../context/AppContext";

const SideBar = () => {
  const {
    admin,
    setToken,
    setAdmin,
    navigate,
    axios,
  } = useAppContext();

  const isHOD = admin?.role === "hod";

  const hodLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      to: "/admin/dashboard/hod",
      end: true,
    },
    {
      name: "User Management",
      icon: Users,
      to: "/admin/dashboard/users",
    },
    {
      name: "Admin Management",
      icon: ShieldUser,
      to: "/admin/dashboard/admins",
    },
    {
      name: "Bank Approvals",
      icon: Landmark,
      to: "/hoddashboard/bank-approvals",
    },
  ];

  const staffLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      to: "/admin/dashboard/staff",
      end: true,
    },
    {
      name: "Applications",
      icon: FileText,
      to: "/admin/dashboard/applications",
    },
    {
      name: "Assigned Applications",
      icon: ClipboardList,
      to: "/admin/dashboard/assigned-applications",
    },
  ];

  const links = isHOD ? hodLinks : staffLinks;

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];

    setToken(null);
    setAdmin(null);

    navigate("/admin");
  };

  return (
    <aside className="flex min-h-screen w-full flex-col bg-[#086b2f] py-6">
      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-2">
        {links.map(({ name, icon: Icon, to, end }) => (
          <NavLink
            key={name}
            to={to}
            end={end}
            className={({ isActive }) =>
              `relative flex h-12 items-center gap-4 rounded-md px-4 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#237d47] text-white before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-l-md before:bg-yellow-400"
                  : "text-white/90 hover:bg-white/10"
              }`
            }
          >
            <Icon size={19} strokeWidth={2} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto px-2">
        <button
          onClick={logout}
          className="flex h-12 w-full cursor-pointer items-center gap-4 rounded-md px-4 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-red-500/20 hover:text-white"
        >
          <LogOut size={19} strokeWidth={2} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;