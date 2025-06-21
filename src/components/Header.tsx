import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const { user, logout } = useAuth();

  const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'learn', label: 'Learn' },
  { id: 'quizzes', label: 'Quizzes' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'dsa', label: 'DSA' },
  { id: 'friends', label: 'Friends' },
  { id: 'dashboard', label: 'Dashboard' }];


  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }} data-id="nisfqutud" data-path="src/components/Header.tsx">

      <div className="container mx-auto px-4" data-id="ct7kj62dm" data-path="src/components/Header.tsx">
        <div className="flex items-center justify-between h-16" data-id="cnspkyfn9" data-path="src/components/Header.tsx">
          <div className="flex items-center space-x-8" data-id="6995w9t6a" data-path="src/components/Header.tsx">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="ew1i675rx" data-path="src/components/Header.tsx">
              CodeConnect Hub
            </h1>
            <nav className="hidden md:flex space-x-6" data-id="2dfrr598s" data-path="src/components/Header.tsx">
              {navItems.map((item) =>
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id ?
                'bg-blue-100 text-blue-700' :
                'text-gray-600 hover:text-blue-600'}`
                } data-id="o1btn2cqq" data-path="src/components/Header.tsx">

                  {item.label}
                </button>
              )}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4" data-id="61t6oyorg" data-path="src/components/Header.tsx">
            <span className="text-sm text-gray-600 hidden sm:inline" data-id="26a24ujhr" data-path="src/components/Header.tsx">
              Welcome, {user?.name}
            </span>
            <Button
              onClick={logout}
              variant="outline"
              size="sm" data-id="dhoufyvlc" data-path="src/components/Header.tsx">

              Logout
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden pb-3" data-id="tq8jarin5" data-path="src/components/Header.tsx">
          <div className="flex overflow-x-auto space-x-4" data-id="4lhiofnne" data-path="src/components/Header.tsx">
            {navItems.map((item) =>
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === item.id ?
              'bg-blue-100 text-blue-700' :
              'text-gray-600 hover:text-blue-600'}`
              } data-id="ov20tbdjm" data-path="src/components/Header.tsx">

                {item.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>);

};

export default Header;