import { Landmark, Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";

const DashboardNav = () => {
  const { user, axios, setToken } = useAppContext();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];

    setToken(null);
    setUser(null);

    navigate("/citizenportal");
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 flex items-center justify-center">
            {" "}
            <Landmark className="text-[#1a5c2a]" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">
              FCT Customary Court of Nigeria
            </div>
            <div className="text-[10px] font-semibold text-[#1a5c2a] tracking-wider uppercase">
              Abuja Judicial Division
            </div>
          </div>
        </a>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={logout}
            className="bg-[#1a5c2a] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#164d23] transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={22} className="text-gray-700" />
          ) : (
            <Menu size={22} className="text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          <button
            onClick={logout}
            className="w-full bg-[#1a5c2a] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#164d23] transition-colors mt-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default DashboardNav;
