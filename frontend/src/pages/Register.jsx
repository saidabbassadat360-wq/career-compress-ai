import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import API from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await API.post('/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (response.data && response.data.success) {
        toast.success("Profile Generated Successfully!");
        
        localStorage.setItem("user", JSON.stringify({ name: response.data.name, email: response.data.email }));
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error("Network routing error caught:", error);
      const backendMessage = error.response?.data?.message;
      toast.error(backendMessage || "Network Error: Verification system offline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="absolute w-[420px] h-[420px] bg-purple-600 blur-[140px] opacity-20 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[420px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold">Create Account</h1>
          <p className="text-gray-400 mt-2 text-xs">Begin your advanced AI diagnostic profiling</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-blue-400 text-xs font-bold tracking-wider block mb-2 uppercase">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-base bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-blue-400 text-xs font-bold tracking-wider block mb-2 uppercase">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-base bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-blue-400 text-xs font-bold tracking-wider block mb-2 uppercase">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-base bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-blue-400 text-xs font-bold tracking-wider block mb-2 uppercase">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 mb-2 rounded-xl text-base bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleRegister}
          disabled={loading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white transition py-4 rounded-xl text-lg font-bold disabled:opacity-50"
        >
          {loading ? "Connecting..." : "Generate Profile"}
        </motion.button>

        <p className="text-center text-gray-400 text-sm mt-5">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-purple-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}