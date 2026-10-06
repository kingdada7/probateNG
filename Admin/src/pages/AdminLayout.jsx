import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import SideBar from "./SideBar";
import { useAppContext } from "../context/AppContext";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const { admin } = useAppContext();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const dashboardTitle =
    admin?.role === "hod" ? "HOD Dashboard" : "Staff Dashboard";

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-bold text-[#086b2f]">
          {dashboardTitle}
        </h1>

        <div className="h-8 w-8 rounded-full bg-[#dcece2]" />
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[298px]
          transform transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="relative h-full">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          >
            <X size={22} />
          </button>

          <SideBar />
        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen pt-16 lg:ml-[298px] lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;