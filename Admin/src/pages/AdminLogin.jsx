import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

import { Eye, EyeOff, Key } from "lucide-react";

import { Link, useNavigate } from "react-router";

import { MdAlternateEmail } from "react-icons/md";

import { useEffect, useState } from "react";

const AdminLogin = ({ tier }) => {
  const [adminTier, setAdminTier] = useState(tier || "standard");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full  max-w-md">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24  rounded-sm flex items-center justify-center">
                <img
                  className="w-16 h-16 object-cover mx-auto "
                  src="/src/assets/download.jpeg"
                  alt=""
                />
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              FCT CUSTOMARY COURT OF NIGERIA
            </h1>
            <p className="text-gray-600 text-sm font-medium">
              Official Probate Application Portal • Abuja
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden ">
            <div className="bg-linear-to-r from-green-50 to-green-25 px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-2">
                <CiLock className="text-green-600 text-xl" />
                <span className="text-xs font-bold text-[#1a5c3a] tracking-widest">
                  SECURE GATEWAY
                </span>
              </div>
              <span className="text-xs font-bold bg-green-200 text-green-700 px-3 py-1 rounded-md">
                ENCRYPTED
              </span>
            </div>
            <div className="inline-flex bg-blue-200-100 rounded-lg p-1  w-full">
              <button
                onClick={() => setAdminTier("standard")}
                className={`flex-1 py-2.5 px-4 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${adminTier === "standard" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-green-600"}`}
              >
                <IoShieldCheckmark /> Admin
              </button>
              <button
                onClick={() => setAdminTier("super")}
                className={`flex-1 py-2.5 px-4 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${adminTier === "super" ? "bg-white text-[#C7A008] shadow-sm" : "text-gray-600 hover:text-[#C7A008]"}`}
              >
                <MdAdminPanelSettings />
                Super Admin
              </button>
            </div>
            {/* <div className="">
              {adminTier === "standard" && <StandardAdminUI />}
              {adminTier === "super" && <SuperAdminUI />}
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
