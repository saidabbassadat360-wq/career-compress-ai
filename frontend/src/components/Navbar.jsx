import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800/60 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Branding Logo Layout */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <span className="text-2xl">🧭</span>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CareerCompass AI
          </span>
        </div>

        {/* User Session Action Toggles */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs text-slate-400 font-medium">Welcome back,</span>
                <span className="text-sm font-semibold text-slate-200">{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700/50 transition-all duration-200 shadow-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <span className="text-sm font-medium text-indigo-400 tracking-wide bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
              🔒 Advanced Vocational Portal Secure
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}