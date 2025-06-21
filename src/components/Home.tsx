import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  const quickLinks = [
  {
    title: 'Programming Languages',
    description: 'Explore blogs about C, C++, Python, Java, and AI/ML',
    action: () => onSectionChange('learn'),
    icon: '💻',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Take a Quiz',
    description: 'Test your knowledge with programming quizzes',
    action: () => onSectionChange('quizzes'),
    icon: '📝',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Coding Challenges',
    description: 'Solve challenges and see what your friends have solved',
    action: () => onSectionChange('challenges'),
    icon: '🏆',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'DSA Resources',
    description: 'Access and share Data Structures & Algorithms resources',
    action: () => onSectionChange('dsa'),
    icon: '📚',
    gradient: 'from-purple-500 to-pink-500'
  }];


  return (
    <div className="max-w-6xl mx-auto p-6" data-id="9xf2f01oc" data-path="src/components/Home.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8" data-id="etmiqn3yc" data-path="src/components/Home.tsx">

        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4" data-id="dnug08aal" data-path="src/components/Home.tsx">
          Welcome to CodeConnect Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="opmhiqyiu" data-path="src/components/Home.tsx">
          Your ultimate platform for learning, practicing, and connecting with fellow programmers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" data-id="tr04xtglr" data-path="src/components/Home.tsx">
        {quickLinks.map((link, index) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} data-id="8agbb9bqn" data-path="src/components/Home.tsx">

            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group" onClick={link.action} data-id="ojh6nrl5y" data-path="src/components/Home.tsx">
              <CardHeader data-id="zq4unv4c8" data-path="src/components/Home.tsx">
                <div className="flex items-center space-x-3" data-id="76xndblxl" data-path="src/components/Home.tsx">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.gradient} flex items-center justify-center text-2xl`} data-id="ft5oav2kk" data-path="src/components/Home.tsx">
                    {link.icon}
                  </div>
                  <div data-id="slhfqdqvv" data-path="src/components/Home.tsx">
                    <CardTitle className="group-hover:text-blue-600 transition-colors" data-id="k698tx0tn" data-path="src/components/Home.tsx">
                      {link.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent data-id="on7zglrn5" data-path="src/components/Home.tsx">
                <CardDescription className="mb-4" data-id="jcwx8d0n1" data-path="src/components/Home.tsx">
                  {link.description}
                </CardDescription>
                <Button
                className={`bg-gradient-to-r ${link.gradient} hover:opacity-90 text-white`}
                onClick={(e) => {
                  e.stopPropagation();
                  link.action();
                }} data-id="mcc8o4vho" data-path="src/components/Home.tsx">

                  Get Started
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 text-center" data-id="h3q7bad18" data-path="src/components/Home.tsx">

        <h2 className="text-2xl font-bold text-gray-800 mb-2" data-id="e095l4a4k" data-path="src/components/Home.tsx">Ready to start your coding journey?</h2>
        <p className="text-gray-600 mb-4" data-id="6wkjkr4up" data-path="src/components/Home.tsx">Join thousands of developers who are learning and growing together</p>
        <div className="flex flex-wrap justify-center gap-4" data-id="xj7udegxo" data-path="src/components/Home.tsx">
          <Button onClick={() => onSectionChange('learn')} variant="outline" data-id="kpliiqumk" data-path="src/components/Home.tsx">
            Start Learning
          </Button>
          <Button onClick={() => onSectionChange('friends')} variant="outline" data-id="6pq0spqch" data-path="src/components/Home.tsx">
            Connect with Friends
          </Button>
        </div>
      </motion.div>
    </div>);

};

export default Home;