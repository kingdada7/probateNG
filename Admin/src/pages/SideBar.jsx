import { House, ShieldUserIcon, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <div className="flex flex-col border-r border-gray-800 min-h-full pt-6">
      <NavLink
        end={true}
        to=""
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-green-600 border-r-4 border-yellow-600"}`
        }
      >
        <House className="text-white" />
        <p className="hidden md:inline-block text-white">Dashboard</p>
      </NavLink>

      <NavLink
        to=""
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-green-600 border-r-4 border-yellow-600"}`
        }
      >
        <User className="text-white" />
        <p className="hidden md:inline-block text-white">User Management</p>
      </NavLink>

      <NavLink
        to=""
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-green-600 border-r-4 border-yellow-600"}`
        }
      >
        <ShieldUserIcon className="text-white" />
        <p className="hidden md:inline-block text-white">Admin Management</p>
      </NavLink>

      <NavLink
        to=""
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-green-600 border-r-4 border-yellow-600"}`
        }
      >
        <House className="text-white" />
        <p className="hidden md:inline-block text-white">Bank Approvals</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
