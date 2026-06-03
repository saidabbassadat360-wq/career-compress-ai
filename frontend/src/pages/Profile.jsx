import React from 'react';

export default function Profile() {
  return (
    <div className="w-full max-w-2xl p-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-xl animate-fade-in mx-4">
      <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-800">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white">
          U
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-200">User Dashboard Profile</h3>
          <p className="text-sm text-slate-400">Account status: Active Developer</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/50">
          <span className="block text-xs font-semibold uppercase text-slate-500 tracking-wider mb-1">Assessment Engine History</span>
          <p className="text-sm text-slate-300">No recent evaluations completed. Run full diagnostic diagnostics from the main portal panel.</p>
        </div>
      </div>
    </div>
  );
}