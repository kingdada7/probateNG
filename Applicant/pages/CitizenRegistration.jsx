import React, { useContext, useEffect, useState } from "react";
import {
  Mail,
  Key,
  User,
  LockKeyhole,
  ShieldCheck,
  LogIn,
  Eye,
  EyeOff,
  Landmark,
} from "lucide-react";
import { MdOutlineLockReset } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
// import { InfinitySpin } from "react-loader-spinner";

import { Link, useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

function CitizenRegistration() {
  const { axios, navigate } = useAppContext();
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const { data } = await axios.post("/api/citizen/citizenregistration", {
        fullName,
        email,
        password,
        confirmPassword,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7]  flex flex-col ">
      <main className="pt-20 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
        </div>
        <div className="relative z-10 w-full max-w-fit">
          <div className="text-center ">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Probate Application Portal
            </h2>
            <p className="text-gray-600 text-lg">
              Federal Capital Territory Abuja
            </p>
          </div>
          <div className="bg-white  rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="bg-[#0b602a] h-2 w-full"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0e1b13] mb-1">
                    Create Your Account
                  </h3>
                  <p className="text-sm text-[#4e9769]">
                    Complete the form below to create your account and start
                    your Application
                  </p>
                </div>
              </div>
              <form onSubmit={handleRegister} className="space-y-5">
                <div className="relative">
                  <label
                    htmlFor="fullname"
                    className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"
                  >
                    Official Full Name
                  </label>
                  <User className="absolute left-4 top-10.5 w-5 h-5 text-[#4e9769]" />

                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="Enter your full Legal Name"
                    className=" w-full pl-11 pr-4 py-3 rounded-lg border border-[#d0e7d8] dark:border-[#2a4433] bg-[#f8fcf9] text-[#0e1b13] placeholder:text-[#4e9769]/60 focus:ring-2 focus:ring-[#0b602a]/20 focus:border-[#0b602a] transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2"
                  >
                    Email Address
                  </label>
                  <Mail className="absolute left-4 top-11 w-5 h-5 text-[#4e9769]" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="e.g. name@gmail.com"
                    className="  w-full pl-11 pr-4 py-3 rounded-lg border border-[#d0e7d8] dark:border-[#2a4433] bg-[#f8fcf9]  text-[#0e1b13]  placeholder:text-[#4e9769]/60 focus:ring-2 focus:ring-[#0b602a]/20 focus:border-[#0b602a] transition-all outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-4 w-5 h-5 text-[#4e9769]" />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={hidePassword ? "password" : "text"}
                      placeholder="Create a strong password "
                      className=" w-full pl-11 pr-4 py-3 rounded-lg border border-[#d0e7d8] bg-[#f8fcf9]  text-[#0e1b13]  placeholder:text-[#4e9769]/60 focus:ring-2 focus:ring-[#0b602a]/20 focus:border-[#0b602a] transition-all outline-none"
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
                  <div className="mt-2 flex gap-1 items-center">
                    <div className="h-1 flex-1 bg-[#0b602a] rounded-full"></div>
                    <div className="h-1 flex-1 bg-[#0b602a] rounded-full"></div>
                    <div className="h-1 flex-1 bg-[#d0e7d8] dark:bg-[#2a4433] rounded-full"></div>
                    <div className="h-1 flex-1 bg-[#d0e7d8] dark:bg-[#2a4433] rounded-full"></div>
                    <span className="text-[10px] text-[#4e9769] ml-2 font-medium uppercase tracking-wider">
                      Moderate
                    </span>
                  </div>

                  <div className=" relative items-center justify-between mb-2">
                    <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Confirm Password
                    </label>
                    <MdOutlineLockReset className="w-5 h-5 absolute left-4 top-10.5 text-[#4e9769]" />
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#d0e7d8] dark:border-[#2a4433] bg-[#f8fcf9] text-[#0e1b13]  placeholder:text-[#4e9769]/60 focus:ring-2 focus:ring-[#0b602a]/20 focus:border-[#0b602a] transition-all outline-none"
                    />
                    {hideConfirmPassword ? (
                      <EyeOff
                        onClick={() => setHideConfirmPassword(false)}
                        className="absolute right-4 top-10.5 w-5 h-5 text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <Eye
                        onClick={() => setHideConfirmPassword(true)}
                        className="absolute right-4 top-10.5 w-5 h-5 text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] text-white py-3.5 rounded-md font-semibold hover:bg-[#154d2f] transition-colors flex items-center justify-center cursor-pointer gap-2 mt-18"
                >
                  Register Account <FaArrowRight className="w-5 h-5" />
                </button>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-700">
                  Already have an account?{" "}
                  <Link
                    to="/citizenportal"
                    className="text-[#1a5c3a] font-semibold hover:underline"
                  >
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitizenRegistration;
