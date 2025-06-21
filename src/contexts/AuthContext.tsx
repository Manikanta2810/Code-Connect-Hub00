import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('codeconnect_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (name: string) => {
    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newUser: User = {
      id: userId,
      name: name,
      email: `${name.toLowerCase().replace(/\s+/g, '')}@codeconnect.com`
    };
    setUser(newUser);
    localStorage.setItem('codeconnect_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('codeconnect_user');
    // Clear other user-specific data
    localStorage.removeItem('quiz_scores');
    localStorage.removeItem('solved_challenges');
    localStorage.removeItem('friends_data');
    localStorage.removeItem('dsa_resources');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value} data-id="7jboa3hhv" data-path="src/contexts/AuthContext.tsx">
      {children}
    </AuthContext.Provider>);

};