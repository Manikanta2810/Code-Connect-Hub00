import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Learn from '@/components/Learn';
import Quizzes from '@/components/Quizzes';
import Challenges from '@/components/Challenges';
import DSA from '@/components/DSA';
import Friends from '@/components/Friends';
import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import './App.css';

const AppContent: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('home');

  if (!isAuthenticated) {
    return <LoginForm data-id="ufqwipfb8" data-path="src/App.tsx" />;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onSectionChange={setActiveSection} data-id="sntaeop17" data-path="src/App.tsx" />;
      case 'learn':
        return <Learn data-id="iiwfjgj70" data-path="src/App.tsx" />;
      case 'quizzes':
        return <Quizzes data-id="dew7vnjyl" data-path="src/App.tsx" />;
      case 'challenges':
        return <Challenges data-id="t2qf1ywvp" data-path="src/App.tsx" />;
      case 'dsa':
        return <DSA data-id="66lbijdlh" data-path="src/App.tsx" />;
      case 'friends':
        return <Friends data-id="sxidmxqot" data-path="src/App.tsx" />;
      case 'dashboard':
        return <Dashboard data-id="2hn0f6sm6" data-path="src/App.tsx" />;
      default:
        return <Home onSectionChange={setActiveSection} data-id="b9dony074" data-path="src/App.tsx" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" data-id="fvby65arb" data-path="src/App.tsx">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} data-id="dmwxfmkp7" data-path="src/App.tsx" />
      
      <main className="pt-20 pb-16" data-id="jbgrwh4d8" data-path="src/App.tsx">
        {renderActiveSection()}
      </main>

      {/* Footer with Logout */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4" data-id="wafxzgsdd" data-path="src/App.tsx">
        <div className="container mx-auto flex justify-center" data-id="smdmv4nyu" data-path="src/App.tsx">
          <Button onClick={logout} variant="outline" size="sm" data-id="88uwxy6ti" data-path="src/App.tsx">
            Logout
          </Button>
        </div>
      </footer>
    </div>);

};

function App() {
  return (
    <TooltipProvider data-id="rmusnevft" data-path="src/App.tsx">
      <AuthProvider data-id="r55slcu82" data-path="src/App.tsx">
        <AppProvider data-id="ati0789yv" data-path="src/App.tsx">
          <AppContent data-id="sbw2uv1rj" data-path="src/App.tsx" />
          <Toaster data-id="wuazhrihe" data-path="src/App.tsx" />
        </AppProvider>
      </AuthProvider>
    </TooltipProvider>);

}

export default App;