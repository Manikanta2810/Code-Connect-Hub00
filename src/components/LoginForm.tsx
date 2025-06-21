import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'motion/react';

const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" data-id="vn9jg40cw" data-path="src/components/LoginForm.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} data-id="xcysv75h7" data-path="src/components/LoginForm.tsx">

        <Card className="w-full max-w-md" data-id="5h5lmd7gl" data-path="src/components/LoginForm.tsx">
          <CardHeader className="text-center" data-id="6em9a4epy" data-path="src/components/LoginForm.tsx">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="ac6g9zbym" data-path="src/components/LoginForm.tsx">
              CodeConnect Hub
            </CardTitle>
            <CardDescription data-id="ksa2z4nca" data-path="src/components/LoginForm.tsx">
              Connect, Learn, and Code Together
            </CardDescription>
          </CardHeader>
          <CardContent data-id="mmaszbw79" data-path="src/components/LoginForm.tsx">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="hoxx3j2rp" data-path="src/components/LoginForm.tsx">
              <div data-id="uanqnma42" data-path="src/components/LoginForm.tsx">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                  required data-id="ebxmpu0ni" data-path="src/components/LoginForm.tsx" />

              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" data-id="7m48e0cgi" data-path="src/components/LoginForm.tsx">

                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" data-id="duf0sf9bz" data-path="src/components/LoginForm.tsx">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-id="1xzwsccgk" data-path="src/components/LoginForm.tsx" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-id="yvxqyhjpg" data-path="src/components/LoginForm.tsx" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-id="btdipk0uv" data-path="src/components/LoginForm.tsx" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-id="62u0s4nu2" data-path="src/components/LoginForm.tsx" />
                </svg>
                Sign in with Google (Simulated)
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default LoginForm;