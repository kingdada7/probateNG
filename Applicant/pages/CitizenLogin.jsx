import React, { useContext, useEffect, useState } from "react";
import {
  Mail,
  Key,
  LockKeyhole,
  ShieldCheck,
  LogIn,
  Eye,
  EyeOff,
  Landmark,
} from "lucide-react";
import { InfinitySpin } from "react-loader-spinner";
import { validateEmail } from "../../../utils/helper.js";
import { API_ENDPOINT } from "../../../utils/apiPaths.js";
import axiosInstance from "../../../utils/axiosInstance";
import { UserContext } from "../../../context/userContext.jsx";

import { Link, useNavigate } from "react-router";

function CitizenLogin() {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.post(API_ENDPOINT.AUTH.LOGIN, {
        email,
        password,
      });

      const { role } = response.data;

      // Update context with user info
      updateUser(response.data);

      if (role === "citizen") {
        navigate("/citizen/dashboard");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timmer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7F6]">
        <InfinitySpin width="200" color="#0b602a" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8f7] dark:bg-[#112117] flex flex-col ">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0b602a] rounded-sm flex items-center justify-center">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                FCT Customary Court of Appeal
              </h1>
              <p className="text-[#0b602a] text-xs">OFFICAL PORTAL</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
            >
              About Probate
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
            >
              Help Center
            </a>

            <button className="bg-[#0b602a] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
              Support
            </button>
          </nav>
        </div>
      </header>
      <main className="pt-20 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
        </div>
        <div className="relative z-10 w-full max-w-md">
          <div className="text-center ">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Probate Application Portal
            </h2>
            <p className="text-gray-600 text-lg">
              Federal Capital Territory Abuja
            </p>
          </div>
          <div className="bg-white dark:bg-[#1a2e21] rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="bg-[#0b602a] h-2 w-full"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    User Login
                  </h3>
                  <p className="text-sm text-gray-600">
                    Access the secure citizen portal
                  </p>
                </div>
                <div>
                  <LockKeyhole className="w-6 h-6 text-[#0b602a] text-3xl" />
                </div>
              </div>
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="e.g. name@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm "
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Key className="w-4 h-4" />
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={hidePassword ? "password" : "text"}
                      placeholder="Enter your password "
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm"
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
                  <a
                    href=""
                    className="text-sm font-semibold text-[#1a5c3a] hover:underline absolute right-10 pt-1"
                  >
                    {" "}
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] text-white py-3.5 rounded-md font-semibold hover:bg-[#154d2f] transition-colors flex items-center justify-center gap-2 mt-18"
                >
                  <LogIn className="w-5 h-5" /> Log In
                </button>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-700">
                  Don't have an account?{" "}
                  <a
                    href="/CitizenRegistration"
                    className="text-[#1a5c3a] font-semibold hover:underline"
                  >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#1a5c3a]" />
            <span>END-TO-END ENCRYPTED SECURE PORTAL</span>
          </div>
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gray-400  flex items-center justify-center bg-no-repeat bg-contain">
              <div className="w-8 h-8 bg-gray-500 ">
                <img
                  className=""
                  src="/src/assets/coa.png"
                  alt="Nigeria Coat of Arms"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
          <p>
            © 2026 Federal Capital Territory Customary Court of Nigeria. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CitizenLogin;
