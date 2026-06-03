import React from 'react';

export default function Recommended() {
  return (
    <div className="w-full max-w-4xl p-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-xl animate-fade-in mx-4">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">AI Vectors & Engine Recommendations</h2>
      <p className="text-slate-400 text-sm mb-6">Real-time mapping generated based on your technology metrics.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-colors">
          <span className="px-2.5 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 rounded-md border border-indigo-500/20">Machine Learning</span>
          <h4 className="text-lg font-bold text-slate-200 mt-3 mb-1">AI Systems Infrastructure Engineer</h4>
          <p className="text-sm text-slate-400">High compatibility found based on mathematical modeling and algorithms logic scores.</p>
        </div>
        <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors">
          <span className="px-2.5 py-1 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-md border border-cyan-500/20">Core Software</span>
          <h4 className="text-lg font-bold text-slate-200 mt-3 mb-1">Full-Stack Architecture Engineer</h4>
          <p className="text-sm text-slate-400">Strong system alignment observed with component building and asynchronous data hooks.</p>
        </div>
      </div>
    </div>
  );
}