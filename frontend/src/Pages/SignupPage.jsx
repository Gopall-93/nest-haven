import { useLoaderData, useNavigate,Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import { axiosInstance } from "../API/axiosInstance.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../resolvers/user.resolver.js";

const SignupPage = () => {
  const navigate = useNavigate();
  const { location, phoneCode } = useLoaderData({ from: "/user/signup" }) || {};
  const responses = phoneCode.responses;

  const { countryName, code, name } = responses.find(
    (res) => res?.name === location?.location?.countryCode
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phonenumber: "",
      city: location?.location?.city || "",
      state: location?.location?.state || "",
      country: countryName || "",
      countryCode: name + " " + code || "",
      role: "user",
    },
  });

  const handleSubmission = async (data) => {
    try {
      const res = await axiosInstance.post("/user/signup", data, {
        withCredentials: true,
      });
      try {
        navigate({
          to: "/email-verification",
          search: { email: res.data.user.email },
        });
      } catch (naverr) {
        console.log(naverr);
      }
    } catch (err) {
      const msg = err?.response?.data?.error || "signup failed";
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Sign up to explore exclusive stays and rentals
        </p>
        <form onSubmit={handleSubmit(handleSubmission)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name")}
              name="name"
              type="text"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              name="email"
              type="email"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              {...register("password")}
              name="password"
              type="password"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <select
              {...register("countryCode")}
              className="p-2 bg-gray-100 border border-gray-300 rounded-md text-sm"
            >
              {responses.map((res, i) => (
                <option key={i} value={`${res.name} ${res.code}`}>
                  {res.name} {res.code}
                </option>
              ))}
            </select>
            <input
              {...register("phonenumber")}
              name="phonenumber"
              type="tel"
              placeholder="1234567890"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              {...register("city")}
              name="city"
              type="text"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              {...register("state")}
              name="state"
              type="text"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.state && (
              <p className="text-sm text-red-500 mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              {...register("country")}
              name="country"
              type="text"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.country && (
              <p className="text-sm text-red-500 mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              {...register("role")}
              name="role"
              className={`mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="user">User</option>
              <option value="host">Host</option>
            </select>
            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <ClipLoader size={20} color="#ffffff" />
                <span>Submitting...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/user/login"
              className="text-blue-600 hover:underline font-medium transition"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
