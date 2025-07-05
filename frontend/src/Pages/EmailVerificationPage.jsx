import {  useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { axiosInstance } from "../API/axiosInstance";
import { toast } from "sonner";

export const EmailVerificationPage = () => {
  const { email } = useSearch({ from: "/email-verification" }); // from ?email=user@example.com

  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/email-verification", {
        email,
      });
      toast.success(data.message || "Verification email sent!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to resend email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-8">
        <h1 className="text-xl font-bold text-center mb-4">
          Verify Your Email
        </h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          A verification email has been sent to <strong>{email}</strong>. Please
          check your inbox and click the verification link.
        </p>
        {!loading && (
          <div className="flex justify-center my-4 text-center">
            <HashLoader size={30} color="#2563eb" />
          </div>
        )}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleResend}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Resending..." : "Resend Email"}
          </button>

          <p className="text-xs text-gray-500">
            Didn't get the email? Check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
};
