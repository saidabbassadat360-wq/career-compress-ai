import React from 'react';

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center py-12 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        Discover Your AI-Driven Career Path
      </h1>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Evaluate your skills, take expert-level technical assessments, and unlock tailored career recommendations powered by advanced machine learning models.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
          Get Started
        </button>
      </div>
    </div>
  );
}