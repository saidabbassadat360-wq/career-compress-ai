import React from "react";
import { motion } from "framer-motion";

export default function Results({ reportData, onReset }) {
  // Pull fields safely out of the custom pipeline state component
  const dataPayload = reportData?.data || reportData;

  if (!dataPayload) {
    return (
      <div className="text-center p-6 bg-slate-900 border border-slate-800 rounded-2xl">
        <p className="text-gray-400 mb-4">No diagnostic metrics compiled in memory stack.</p>
        <button onClick={onReset} className="px-5 py-2.5 bg-blue-600 rounded-xl font-bold">
          Return to Hub
        </button>
      </div>
    );
  }

  const { topCareer, careerMatches, skillScores, category } = dataPayload;
  const skillEntries = skillScores ? Object.entries(skillScores) : [];

  // Filter out the #1 career so it doesn't look redundant in the alternative list below
  const secondaryMatches = careerMatches ? careerMatches.filter(m => m.career !== topCareer) : [];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-4 pb-12">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-2">
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest">
          Analysis Sector: {category || "General Focus"}
        </span>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Your AI Assessment Report</h1>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Our cognitive matching matrix has analyzed your skill vectors and discovered your optimal professional trajectory.
        </p>
      </div>

      {/* ⭐ HERO WINNER CARD (The Wow! Factor Component) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-8 text-center shadow-2xl space-y-4"
      >
        {/* Decorative background glow flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
          <span>🏆</span> Absolute Best Career Match
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 py-1">
          {topCareer}
        </h2>

        <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Your responses indicate exceptional aptitude and psychological alignment with this discipline. This field perfectly balances your structural logic capabilities, operational preferences, and core behavioral strengths.
        </p>

        {/* Quick Career Highlights Row */}
        <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg mx-auto text-center border-t border-slate-800/60">
          <div className="p-2.5 bg-slate-950/40 rounded-xl border border-slate-800/40">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Market Demand</div>
            <div className="text-xs md:text-sm font-black text-emerald-400 mt-0.5">High Growth</div>
          </div>
          <div className="p-2.5 bg-slate-950/40 rounded-xl border border-slate-800/40">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Skill Alignment</div>
            <div className="text-xs md:text-sm font-black text-indigo-400 mt-0.5">Exceptional</div>
          </div>
          <div className="p-2.5 bg-slate-950/40 rounded-xl border border-slate-800/40">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Success Index</div>
            <div className="text-xs md:text-sm font-black text-purple-400 mt-0.5">Top Tier</div>
          </div>
        </div>
      </motion.div>

      {/* ANALYTICS CHARTS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Alternative Career Progress Tracker */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl shadow-lg space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-indigo-400">
            <span>🎯</span> Your Top Career Alignments
          </h3>
          <div className="space-y-3.5">
            {careerMatches && careerMatches.slice(0, 5).map((match, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className={`${match.career === topCareer ? 'text-indigo-300 font-bold' : 'text-slate-400'}`}>
                    {match.career} {match.career === topCareer && '⭐'}
                  </span>
                  <span className={`font-mono font-bold ${match.career === topCareer ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {match.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-900">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ${match.career === topCareer ? 'bg-indigo-500' : 'bg-slate-700'}`}
                    style={{ width: `${match.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Score Tracker */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl shadow-lg space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-emerald-400">
            <span>⚡</span> Your Personal Talent DNA
          </h3>
          <div className="space-y-3.5">
            {skillEntries.map(([skillName, score], idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">{skillName}</span>
                  <span className="text-emerald-400 font-bold font-mono">{score}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-900">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🚀 ACTION HUB ROW (Differentiating post-quiz steps from simple dashboard view) */}
      <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-bold text-white">Ready to take the next step?</h4>
          <p className="text-xs text-slate-400">This assessment score is securely locked into your permanent account history.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={onReset}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm whitespace-nowrap"
          >
            Go to My Profile Hub
          </button>
        </div>
      </div>

    </div>
  );
}