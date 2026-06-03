import { useState, useEffect } from 'react';
import React from 'react';
import API from '../api/axios';

export default function Quiz({ category, onQuizFinished, onBackToDashboard }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get(`/quiz/questions/${encodeURIComponent(category)}`);
        if (res.data.success) {
          setQuestions(res.data.questions);
        }
      } catch (err) {
        setError('Failed to pull questions array from network engine.');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [category]);

  const handleSelectScore = (scoreValue) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = {
      questionIndex: questions[currentIndex].index,
      answer: scoreValue
    };
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmitQuiz = async () => {
    if (answers.length !== questions.length) return;
    setSubmitting(true);
    try {
      const res = await API.post('/quiz/submit', { category, answers });
      if (res.data.success) {
        onQuizFinished(res.data.data);
      }
    } catch (err) {
      setError('Failed to securely process evaluation payload.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-24 animate-pulse text-slate-400 font-medium">
        🤖 Assembling Gemini AI Assessment Matrix...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
        <p className="text-rose-400 font-medium mb-4">{error}</p>
        <button onClick={onBackToDashboard} className="px-5 py-2 bg-slate-800 text-white rounded-xl text-sm">Return Home</button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
      {/* Progress Metric Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">
          <span>{category} Evaluation</span>
          <span>Matrix {currentIndex + 1} of {questions.length}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Main Question Blueprint Frame */}
      <div className="backdrop-blur-xl bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-xl mb-6">
        <span className="inline-block text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-md mb-6">
          Focus Skill: {currentQ?.skill || 'General Affinity'}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-12">
          {currentQ?.question}
        </h2>

        {/* 1-5 Scale Scoring Dial Grid */}
        <div className="space-y-3">
          {[
            { score: 1, label: 'Strongly Dislike / Minimal Affinity' },
            { score: 2, label: 'Slightly Dislike / Mildly Uncomfortable' },
            { score: 3, label: 'Neutral / Moderate Competency' },
            { score: 4, label: 'Enjoy / Strong Interest Match' },
            { score: 5, label: 'Strongly Passionate / Master Competency' }
          ].map((option) => (
            <button
              key={option.score}
              onClick={() => handleSelectScore(option.score)}
              className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-semibold transition-all flex items-center space-x-4 ${
                answers[currentIndex]?.answer === option.score
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-md'
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                answers[currentIndex]?.answer === option.score ? 'bg-indigo-500 text-white' : 'bg-slate-900 border border-slate-700 text-slate-400'
              }`}>{option.score}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation and Final Submission Toggles */}
      <div className="flex justify-between items-center px-2">
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="text-sm font-bold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          🡨 Previous Component
        </button>

        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmitQuiz}
            disabled={answers.length !== questions.length || submitting}
            className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-bold text-white text-sm rounded-xl shadow-lg transition-all"
          >
            {submitting ? 'Processing Scores...' : 'Compile Evaluation ➔'}
          </button>
        ) : (
          <button
            disabled={!answers[currentIndex]}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="text-sm font-bold text-indigo-400 hover:text-indigo-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Skip / Next Question 🡪
          </button>
        )}
      </div>
    </div>
  );
}