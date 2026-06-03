import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AuthForm() {
  const { login, register } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      // Clear form on success
      setFormData({ name: '', email: '', password: '' });
    } catch (err) {
      // Handle various error types
      const serverMessage = 
        err.response?.data?.message || 
        err.response?.data?.errors?.[0]?.msg || 
        err.message ||
        'Authentication failed. Please try again.';
      setError(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in my-12 px-4">
      <div className="backdrop-blur-xl bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Modern Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        
        <h2 className="text-3xl font-black tracking-tight text-white mb-2 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-sm text-slate-400 text-center mb-8">
          {isLogin ? 'Access your private vocational roadmap matrix.' : 'Begin your advanced AI diagnostic profiling.'}
        </p>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium flex items-center space-x-2">
            <span>⚠️</span> <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition-all duration-150 mt-4"
          >
            {loading ? 'Processing Protocol...' : isLogin ? 'Sign In' : 'Generate Profile'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
          <button
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}