import { LayoutDashboard, Users, ShieldUser, Landmark } from "lucide-react";
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
      to: "/hoddashboard/admins",
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
    </aside>
  );
};

export default SideBar;
