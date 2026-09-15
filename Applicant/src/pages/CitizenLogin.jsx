import React, { useEffect, useState } from "react";
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

import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";

function CitizenLogin() {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { axios, setToken, navigate, setApplicationId } = useAppContext();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/citizen/citizenlogin", {
        email,
        password,
      });

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      setToken(data.token);

      localStorage.setItem("token", data.token);

      if (data.application?.id) {
        setApplicationId(data.application.id);
      }

      // No application yet
      if (!data.application) {
        navigate("/citizenportal/applicationinformation");
        return;
      }

      // Save application ID
      localStorage.setItem("applicationId", data.application.id);

      console.log("Current application step:", data.application.currentStep);

      // Resume application
      switch (data.application.currentStep) {
        case 1:
          navigate("/citizenportal/applicationinformation");
          break;

        case 2:
          navigate("/citizenportal/deceasedinformation");
          break;

        case 3:
          navigate("/citizenportal/applicationtype");
          break;

        case 4:
          navigate("/citizenportal/documentsupload");
          break;

        case 5:
          navigate("/citizenportal");
          break;

        default:
          navigate("/citizenportal/applicationinformation");
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col ">
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
          <div className="bg-white rounded-lg shadow-lg border border-gray-100  overflow-hidden">
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
                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-[#1a5c3a] hover:underline absolute right-10 pt-1"
                  >
                    Forgot Password?
                  </Link>
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
                  <Link
                    to="/citizenregistration"
                    className="text-[#1a5c3a] font-semibold hover:underline"
                  >
                    Register here
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

export default CitizenLogin;
