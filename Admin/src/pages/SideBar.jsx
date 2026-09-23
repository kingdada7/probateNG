import {
  LayoutDashboard,
  Users,
  ShieldUser,
  Landmark,
  LogOut,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  const links = [
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

  return (
    <aside className="w-64 min-h-screen bg-[#086b2f] py-6">
      <nav className="flex flex-col gap-1 px-2">
        {links.map(({ name, icon: Icon, to, end }) => (
          <NavLink
            key={name}
            to={to}
            end={end}
            className={({ isActive }) =>
              `relative flex items-center gap-4 h-12 px-4 rounded-md text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-[#237d47] text-white before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-yellow-400 before:rounded-l-md"
                  : "text-white/90 hover:bg-white/10"
              }`
            }
          >
            <Icon size={19} strokeWidth={2} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
      {/* Logout */}{" "}
      <div className="mt-auto px-2">
        <button
          // onClick={handleLogout}
          className="w-full flex items-center gap-4 h-12 px-4 rounded-md text-sm font-medium text-white/90 hover:bg-red-500/20 hover:text-white transition-all duration-200"
        >
          <LogOut size={19} strokeWidth={2} /> <span>Logout</span>{" "}
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
