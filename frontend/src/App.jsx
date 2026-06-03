import { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

export default function App() {
  const { user } = useContext(AuthContext);
  const [screen, setScreen] = useState('dashboard'); // dashboard, quiz, results
  const [category, setCategory] = useState('');
  const [report, setReport] = useState(null);

  const startQuiz = (cat) => { 
    setCategory(cat); 
    setScreen('quiz'); 
  };
  
  const finishQuiz = (data) => { 
    setReport(data); 
    setScreen('results'); 
  };
  
  // FIXED: No longer wipes out the report data so it stays available for the Dashboard menu options
  const resetApp = () => { 
    setCategory(''); 
    setScreen('dashboard'); 
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 antialiased relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="flex-grow flex items-center justify-center w-full max-w-7xl mx-auto z-10 relative px-4 py-8">
        {!user ? (
          <AuthForm />
        ) : (
          <>
            {screen === 'dashboard' && (
              <Dashboard onSelectCategory={startQuiz} savedReport={report} />
            )}
            
            {screen === 'quiz' && (
              <Quiz 
                category={category} 
                onQuizFinished={finishQuiz} 
                onBackToDashboard={resetApp} 
              />
            )}
            
            {screen === 'results' && (
              <Results 
                reportData={report} 
                onReset={resetApp} 
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}