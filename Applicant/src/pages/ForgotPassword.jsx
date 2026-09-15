import React, { useState } from "react";
import { Mail, ArrowLeft, ShieldCheck, Send } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { axios } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post("/api/citizen/forgot-password", {
        email: email.trim(),
      });

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      setSubmitted(true);
      toast.success("Password reset instructions have been sent.");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to process your request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col">
      <main className="pt-20 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0b602a] rounded-full"></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Probate Application Portal
            </h2>

            <p className="text-gray-600 text-lg">
              Federal Capital Territory Abuja
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-[#0b602a] h-2 w-full"></div>

            <div className="p-8">
              {!submitted ? (
                <>
                  {/* Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Forgot Password?
                      </h3>

                      <p className="text-sm text-gray-600">
                        Enter your email to reset your password
                      </p>
                    </div>

                    <ShieldCheck className="w-6 h-6 text-[#0b602a]" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </label>

                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="e.g. name@gmail.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1a5c3a] text-white py-3.5 rounded-md font-semibold hover:bg-[#154d2f] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />

                      {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                  </form>
                </>
              ) : (
                /* Success message */
                <div className="text-center py-4">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-green-50 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[#1a5c3a]" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Check Your Email
                  </h3>

                  <p className="text-sm text-gray-600 leading-6">
                    If an account exists with{" "}
                    <span className="font-semibold text-gray-800">
                      {email}
                    </span>
                    , we've sent you a password reset link.
                  </p>

                  <p className="text-sm text-gray-500 mt-4">
                    The reset link will expire in 30 minutes.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-[#1a5c3a] hover:underline"
                  >
                    Try another email
                  </button>
                </div>
              )}

              {/* Back to login */}
              <div className="mt-6 text-center border-t border-gray-100 pt-5">
                <Link
                  to="/citizenlogin"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5c3a] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword;