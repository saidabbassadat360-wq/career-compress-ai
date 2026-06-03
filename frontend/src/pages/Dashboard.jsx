import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Dashboard({ onSelectCategory, savedReport }) {
  const { user, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("menu"); // menu, categories, profile, recommendations

  const categories = ['IT/Software', 'Business', 'Creative', 'Medical', 'Engineering'];

  // Safely safely extract nested report calculations if they exist
  const reportPayload = savedReport?.data || savedReport;
  const hasReport = !!reportPayload;

  if (!user) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Upper Navigation Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome, {user.name || "User"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">CareerCompass AI Control Command Hub</p>
        </div>
        <button
          onClick={logout}
          className="px-5 py-2.5 bg-red-600/10 border border-red-500/20 text-red-400 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-200 text-sm"
        >
          4. Logout
        </button>
      </div>

      {/* Main Core View Router */}
      {activeTab === "menu" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* OPTION 1: Take Quiz */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => setActiveTab("categories")}
            className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl cursor-pointer hover:border-blue-500/50 transition-all shadow-xl"
          >
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">1. Take Assessment Quiz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Launch the 10-question AI diagnostic analyzer engine to determine your vocational profile.
            </p>
          </motion.div>

          {/* OPTION 2: Recommended Career (Dynamically unlocked if test is taken) */}
          <motion.div
            whileHover={hasReport ? { scale: 1.03, y: -4 } : {}}
            onClick={() => hasReport && setActiveTab("recommendations")}
            className={`p-8 rounded-2xl border transition-all shadow-xl ${
              hasReport 
                ? "bg-slate-900/40 border-slate-800/80 cursor-pointer hover:border-purple-500/50" 
                : "bg-slate-900/10 border-slate-900/40 text-slate-600 cursor-not-allowed"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-4 border ${
              hasReport ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : "bg-slate-950 border-slate-900 text-slate-700"
            }`}>
              2
            </div>
            <h3 className={`text-xl font-bold mb-2 ${hasReport ? "text-white" : "text-slate-500"}`}>
              2. Recommended Career
            </h3>
            <p className={`text-sm leading-relaxed ${hasReport ? "text-gray-400" : "text-slate-600"}`}>
              {hasReport 
                ? "View detailed affinity graph matrices and algorithmic matches compiled from your test answers."
                : "Locked. Complete an evaluation quiz first to generate analytical recommendations here."}
            </p>
          </motion.div>

          {/* OPTION 3: View Profile */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => setActiveTab("profile")}
            className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all shadow-xl"
          >
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">3. View User Profile</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Examine account credentials, registration data logs, and status summaries cleanly.
            </p>
          </motion.div>
        </div>
      )}

      {/* RECOMMENDATIONS REPORT TAB INSIDE DASHBOARD */}
      {activeTab === "recommendations" && reportPayload && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-purple-400">📊</span> Active Analytical Metrics ({reportPayload.category})
            </h2>
            <button onClick={() => setActiveTab("menu")} className="text-sm text-blue-400 hover:underline">
              ← Return to Hub
            </button>
          </div>

          <div className="p-5 bg-gradient-to-r from-indigo-950/40 to-slate-950 border border-indigo-500/20 rounded-xl">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Top Career Vector</span>
            <div className="text-2xl font-black text-indigo-400">{reportPayload.topCareer}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Career Matches */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Career Match Analysis</h4>
              {reportPayload.careerMatches?.map((match, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{match.career}</span>
                    <span className="text-indigo-400 font-bold font-mono">{match.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                    <div className="bg-indigo-500 h-full rounded-full animate-pulse" style={{ width: `${match.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Score Distributions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Core Skill Distribution</h4>
              {Object.entries(reportPayload.skillScores || {}).map(([skill, score], idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{skill}</span>
                    <span className="text-emerald-400 font-bold font-mono">{score}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-850">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* CATEGORY SELECTION SUBMENU */}
      {activeTab === "categories" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Select Assessment Category</h2>
            <button onClick={() => setActiveTab("menu")} className="text-sm text-blue-400 hover:underline">
              ← Go Back
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className="p-5 text-left bg-slate-900/60 border border-slate-800 rounded-xl font-semibold text-lg hover:border-indigo-500 hover:bg-slate-900 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* USER PROFILE MODAL */}
      {activeTab === "profile" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">User Identity Matrix</h2>
            <button onClick={() => setActiveTab("menu")} className="text-sm text-blue-400 hover:underline">
              ← Go Back
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">User Name</span>
                <div className="bg-slate-950 border border-slate-850 px-4 py-2.5 rounded-xl text-slate-300 font-medium">
                  {user.name || "M Abbas Khan"}
                </div>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Routing Address</span>
                <div className="bg-slate-950 border border-slate-850 px-4 py-2.5 rounded-xl text-slate-400 font-mono text-sm">
                  {user.email}
                </div>
              </div>
            </div>

            {/* Added: Displays a quick profile summary if a quiz has been taken */}
            <div className="p-4 bg-slate-950/50 border border-slate-850 rounded-xl flex flex-col justify-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Assessment Status</span>
              <div className={`text-base font-bold ${hasReport ? "text-emerald-400" : "text-amber-500"}`}>
                {hasReport ? `✓ Diagnostic Complete (${reportPayload.category})` : "• No Active Quiz Metrics Tracked"}
              </div>
              {hasReport && (
                <p className="text-xs text-slate-400 mt-2">
                  Your primary profile matching points directly to: <span className="text-indigo-400 font-semibold">{reportPayload.topCareer}</span>.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}