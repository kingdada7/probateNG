import React from "react";
import { User, Info, Eye, EyeOff } from "lucide-react";
import { IoShieldCheckmark } from "react-icons/io5";
import { InfinitySpin } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

const StaffRegister = () => {
  const [loading, setLoading] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
  const [division, setDivision] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [error, setError] = useState("");
  // const { updateUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!fullname.trim()) return setError("Please enter your full name");
  //     if (!email.trim()) return setError("Please enter your email address");
  //     if (!validateEmail(email))
  //       return setError("Please enter a valid email address");
  //     if (!password) return setError("Please enter a password");
  //     if (password !== confirmPassword) return setError("Passwords do not match");
  //     if (!division) return setError("Please select your department/division");
  //     if (password.length < 8)
  //       return setError("Password must be at least 8 characters long");
  //     if (!staffId.trim()) return setError("Please enter your staff ID");

  //     try {
  //       setError("");

  //       // 1️ Register user
  //       const response = await axiosInstance.post(API_ENDPOINT.AUTH.REGISTER, {
  //         email,
  //         password,
  //         name: fullname,
  //         role: "standard-admin",
  //         staffId,
  //         division
  //       });

  //       const { token } = response.data;

  //       if (!token) throw new Error("Registration failed");

  //       // 2️Send admin request AFTER success
  //       await axiosInstance.post(
  //         "/api/admin/request",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
  //       );

  //       alert("Request submitted. Await approval.");
  //       navigate("/adminlogin");
  //     } catch (error) {
  //       setError(
  //         error.response?.data?.message ||
  //           error.message ||
  //           "Something went wrong",
  //       );
  //     }
  //   };
  return (
    <div>
      <main className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-2xl">
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
          <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Admin Internal Registration
            </h1>
            <p className="text-[#1a5c3a] text-base">
              Secure registration for authorized court officials of the FCT
              Customary Court.
            </p>
          </div>
          <div className="border-t-8 border-[#1a5c3a] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#1a5C3a] px-8 py-5 items-center gap-3 p-10 m-5">
              <div className="flex gap-2 pt-10">
                <IoShieldCheckmark className="w-8 h-8 text-white" />
                <h2 className="text-white font-bold text-lg">
                  Internal Personnel Access
                </h2>
              </div>
              <p className="text-green-100 text-sm">
                Please fill the form below using your official credentials.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <form className="space-y-4" action="">
                {" "}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      //   value={fullname}
                      //   onChange={(e) => setFullname(e.target.value)}
                      placeholder="Enter full legal name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Staff ID Number
                    </label>
                    <input
                      type="text"
                      //   value={staffId}
                      //   onChange={(e) => setStaffId(e.target.value)}
                      placeholder="FCT/CRT/XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Offical Email Address
                    </label>
                    <input
                      type="email"
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                      placeholder="official@fctcourt.gov.ng"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Department/Division
                    </label>
                    <select
                      //   value={division}
                      //   onChange={(e) => setDivision(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                    >
                      <option value="">Select Department/Division</option>
                      <option value="judicial">Judicial Division</option>
                      <option value="administrative">
                        Administrative Division
                      </option>
                      <option value="legal">Legal Division</option>
                    </select>
                  </div>
                </div>
                {/* set password */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Account Password
                  </label>
                  <div className="relative">
                    <input
                      type={hidePassword ? "password" : "text"}
                      //   value={password}
                      //   onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700"
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
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={hideConfirmPassword ? "password" : "text"}
                      //   value={confirmPassword}
                      //   onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700"
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
                <div className="bg-gray-50 border-l-4 border-[#1a5c3a] p-4 rounded">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-[#1a5c3a] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">
                        SECURITY POLICY
                      </p>
                      <p className="text-gray-700 text-sm">
                        All administrative accounts must be verified by the Head
                        of Probate before activation. Unauthorized access is
                        strictly prohibited under the Cybercrimes Act.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] hover:bg-[#154d2f] text-white font-bold py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2 mt-8"
                >
                  <User className="w-5 h-5" />
                  Request Admin Access
                </button>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700">
                    Have an account?{" "}
                    <Link
                      to="/adminlogin"
                      className="text-[#1a5c3a] font-semibold hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffRegister;
