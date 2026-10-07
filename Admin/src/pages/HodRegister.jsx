import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoAlertCircleSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { Eye, EyeOff, Key } from "lucide-react";
import { PiUserCheck } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import loginImage from "../assets/download.jpeg";

const HodRegister = () => {
  const { axios, navigate } = useAppContext();
  const [hidePassword, setHidePassword] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staffId, setStaffId] = useState("");
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const { data } = await axios.post("/api/hodadmin/hodregister", {
        fullName: fullname,
        email,
        password,
        confirmPassword,
        staffId,

        inviteCode,
      });

      toast.success(data.message);
      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full  max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24  rounded-sm flex items-center justify-center">
                <img
                  className="w-16 h-16 object-cover mx-auto"
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

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-linear-to-r from-green-50 to-green-25 px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-2">
                <CiLock className="text-green-600 text-xl" />
                <span className="text-xs font-bold text-[#1a5c3a] tracking-widest">
                  SECURE GATEWAY
                </span>
              </div>
              <span className="text-xs font-bold bg-green-200 text-green-700 px-3 py-1 rounded-md">
                ENCRYPTED CONNECTION
              </span>
            </div>
            <div className="p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Intialize HOD's Account
              </h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Please provide your official government credentials and the
                ministry-issued authorization code to establish your
                administrative profile
              </p>
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 tracking-wider mb-3">
                    FULL LEGAL NAME
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      type="text"
                      placeholder="Enter as it appears on official ID"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:bg-white text-sm text-gray-700 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-900 tracking-wider mb-3">
                      OFFICIAL EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <MdAlternateEmail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="username@fct.gov.ng"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:bg-white text-sm text-gray-700 placeholder-gray-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      Must be a valid @fct.gov.ng domain
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-900 tracking-wider mb-3">
                      STAFF ID NUMBER
                    </label>
                    <div className="relative">
                      <FaIdCard className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={staffId}
                        onChange={(e) => setStaffId(e.target.value)}
                        placeholder="FCT/CRT/XXXX"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:bg-white text-sm text-gray-700 placeholder-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 tracking-wider mb-3">
                    ACCESS PASSWORD
                  </label>
                  <div className="relative">
                    <CiLock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <div className="relative">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={hidePassword ? "password" : "text"}
                        placeholder="Enter your password "
                        className="w-full px-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm"
                      />
                      {hidePassword ? (
                        <EyeOff
                          onClick={() => setHidePassword(false)}
                          className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
                        />
                      ) : (
                        <Eye
                          onClick={() => setHidePassword(true)}
                          className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 tracking-wider mb-3">
                    VERIFY PASSWORD
                  </label>
                  <div className="relative">
                    <CiLock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <div className="relative">
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={hideConfirmPassword ? "password" : "text"}
                        placeholder="Enter your password "
                        className="w-full px-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm"
                      />
                      {hideConfirmPassword ? (
                        <EyeOff
                          onClick={() => setHideConfirmPassword(false)}
                          className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
                        />
                      ) : (
                        <Eye
                          onClick={() => setHideConfirmPassword(true)}
                          className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#1a5c3a] rounded-lg p-6 bg-green-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-bold text-gray-900 tracking-wider">
                        AUTHORIZED INVITE CODE
                      </label>

                      <IoAlertCircleSharp className="text-red-600 w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#1a5c3a]">
                      REQUIRED FOR VALIDATION
                    </span>
                  </div>
                  <input
                    type="text"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    placeholder="Enter Secure Invite Code"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-[#1a5c3a] text-sm text-gray-700 placeholder-gray-500 text-center tracking-wider"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] hover:bg-[#154d2f] text-white font-black py-4 rounded-lg transition-colors text-sm tracking-wide flex items-center justify-center gap-2 mt-8"
                >
                  <PiUserCheck className="w-5 h-5" />
                  CREATE SUPER ADMIN ACCOUNT
                </button>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700">
                    Have an account?{" "}
                    <Link
                      to="/"
                      className="text-[#1a5c3a] font-semibold hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>
              <div className="mt-8 pt-6 border-t border-gray-200 text-center space-y-2">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                  <a href="#" className="hover:text-gray-900 font-medium">
                    PORTAL POLICY
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-gray-900 font-medium">
                    SECURITY PROTOCOL
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-gray-900 font-medium">
                    CONTACT SUPPORT
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg px-6 py-4 flex items-center gap-3">
            {/* <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" /> */}
            <p className="text-xs font-bold text-red-600 tracking-wider">
              RESTRICTED ACCESS: UNAUTHORIZED REGISTRATION ATTEMPTS ARE STRICTLY
              MONITORED
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3 text-xs text-gray-500">
          <p className="tracking-wide">
            FEDERAL REPUBLIC OF NIGERIA • FCT CUSTOMARY COURT • © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HodRegister;
