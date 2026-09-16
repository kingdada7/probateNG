import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { Eye, EyeOff, LockKeyhole, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

const ResetPassword = () => {
  const { token } = useParams();

  const { axios, navigate } = useAppContext();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

  
try {
  setLoading(true);

  const { data } = await axios.post(
    `/api/citizen/reset-password/${token}`,
    {
      password,
      confirmPassword,
    }
  );

  if (data.success) {
    setSuccess(true);
    toast.success(data.message || "Password reset successfully");

    setTimeout(() => {
      navigate("/citizen/login");
    }, 2500);
  } else {
    toast.error(data.message || "Unable to reset password");
  }
} catch (error) {
  console.error("RESET PASSWORD ERROR:", error);

  toast.error(
    error.response?.data?.message ||
      "Something went wrong. Please try again."
  );
} finally {
  setLoading(false);
}



  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Password Reset Successful
          </h1>

          <p className="text-gray-600 mb-6">
            Your password has been changed successfully. You can now log in with
            your new password.
          </p>

          <Link
            to="/citizen/login"
            className="inline-block w-full bg-[#1a5c3a] hover:bg-[#14482d] text-white font-medium py-3 rounded-lg transition"
          >
            Continue to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 bg-[#1a5c3a] rounded-full flex items-center justify-center">
            <LockKeyhole className="w-7 h-7 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Reset Your Password
          </h1>

          <p className="text-gray-600 mt-2">
            Create a new password for your citizen account.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Password must contain at least 8 characters.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a5c3a] hover:bg-[#14482d] disabled:bg-gray-400 text-white font-medium py-3 rounded-lg transition"
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <Link
              to="/citizen/login"
              className="text-sm text-[#1a5c3a] hover:underline font-medium"
            >
              Back to Login
            </Link>
          </div>
        </div>

      
      </div>
    </div>
  );
};
}

export default ResetPassword;
