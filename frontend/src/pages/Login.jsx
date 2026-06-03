import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents browser page reload

    if (!email || !password) {
      toast.error("Please fill in all security fields");
      return;
    }

    try {
      setLoading(true);

      // Using the reliable 127.0.0.1 loopback address string to resolve network timeouts
      const response = await axios.post("http://127.0.0.1:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data && response.data.success) {
        toast.success("Authentication Approved!");

        // Save session security credentials 
        localStorage.setItem("user", JSON.stringify({ name: response.data.name, email: response.data.email }));
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error("Login sequence catch-block error:", error);
      const backendMessage = error.response?.data?.message;
      toast.error(backendMessage || "Network Error: Cannot establish connection to server gateway.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl backdrop-blur-xl shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Secure Portal Access
        </h2>
        
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Email Address
            </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="name@domain.com" 
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="••••••••" 
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/10 disabled:opacity-50"
          >
            {loading ? "Verifying Keys..." : "Authenticate"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="text-indigo-400 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}