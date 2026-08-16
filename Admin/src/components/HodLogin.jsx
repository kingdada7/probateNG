import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const HodLogin = () => {
  const { axios, navigate } = useAppContext();
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/hodadmin/hodlogin", {
        email,
        password,
      });
       setToken(data.token);

      localStorage.setItem("adminToken", data.token);

     
      localStorage.setItem("role", "hod");

      toast.success(data.message);
      toast.success("Login successful");
      navigate("/admin/dashboard/hod");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-8 bg-linear-to-l from-yellow-50 to-yellow-25 ">
      <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
        H.O.D Probate{" "}
      </h2>

      <form onSubmit={handleLogin} className="space-y-4 ">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Official Email Address
          </label>
          <div className="relative">
            <MdAlternateEmail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. name.surname@judiciary.gov.ng"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A008] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* passwoed */}
        <div>
          <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            Password
          </label>
          <div className="relative">
            <CiLock className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={hidePassword ? "password" : "text"}
              placeholder="Enter your password "
              className="w-full px-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7A008] focus:border-transparent text-sm"
            />
            {hidePassword ? (
              <EyeOff
                onClick={() => setHidePassword(false)}
                className="absolute right-4 top-3.5 w-5 h-5 text-[#c7a008] cursor-pointer "
              />
            ) : (
              <Eye
                onClick={() => setHidePassword(true)}
                className="absolute right-4 top-3.5 w-5 h-5 text-[#c7a008] cursor-pointer"
              />
            )}
          </div>
          <a
            href=""
            className="text-sm font-semibold text-[#C7A008] hover:underline pl-65 pt-1"
          >
            {" "}
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#C7A008] hover:bg-[#C7A008]/90 text-white font-black py-3.5 rounded-lg transition-colors text-sm tracking-wide mt-6"
        >
          SECURE LOGIN
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/admin/hodregister"
            className="text-[#C7A008] font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HodLogin;
