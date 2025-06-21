import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';

const Quizzes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('take');
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [score, setScore] = useState('');
  const { addQuizScore } = useApp();
  const { toast } = useToast();

  const quizzes = [
  {
    id: 'python-basics',
    name: 'Python Basics',
    description: 'Test your knowledge of Python fundamentals',
    difficulty: 'Easy',
    questions: 20,
    timeLimit: '30 minutes'
  },
  {
    id: 'java-oop',
    name: 'Java OOP',
    description: 'Object-Oriented Programming concepts in Java',
    difficulty: 'Medium',
    questions: 25,
    timeLimit: '45 minutes'
  },
  {
    id: 'cpp-advanced',
    name: 'C++ Advanced',
    description: 'Advanced C++ programming concepts',
    difficulty: 'Hard',
    questions: 30,
    timeLimit: '60 minutes'
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    description: 'Common data structures and their implementations',
    difficulty: 'Medium',
    questions: 22,
    timeLimit: '40 minutes'
  },
  {
    id: 'algorithms',
    name: 'Algorithms',
    description: 'Algorithm design and analysis',
    difficulty: 'Hard',
    questions: 25,
    timeLimit: '50 minutes'
  }];


  const practiceQuestions = [
  {
    id: 'even-odd',
    title: 'Even or Odd Number',
    description: 'Write a program to check if a number is even or odd',
    difficulty: 'Easy'
  },
  {
    id: 'square',
    title: 'Square of a Number',
    description: 'Calculate and return the square of a given number',
    difficulty: 'Easy'
  },
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz Problem',
    description: 'Classic FizzBuzz implementation challenge',
    difficulty: 'Easy'
  },
  {
    id: 'prime',
    title: 'Prime Number Check',
    description: 'Determine if a given number is prime',
    difficulty: 'Medium'
  },
  {
    id: 'factorial',
    title: 'Factorial Calculator',
    description: 'Calculate factorial of a number recursively',
    difficulty: 'Medium'
  }];


  const handleSubmitScore = () => {
    if (!selectedQuiz || !score) {
      toast({
        title: "Error",
        description: "Please select a quiz and enter a score",
        variant: "destructive"
      });
      return;
    }

    const scoreNum = parseInt(score);
    if (scoreNum < 0 || scoreNum > 100) {
      toast({
        title: "Error",
        description: "Score must be between 0 and 100",
        variant: "destructive"
      });
      return;
    }

    const quiz = quizzes.find((q) => q.id === selectedQuiz);
    if (quiz) {
      addQuizScore(quiz.name, scoreNum);
      toast({
        title: "Score Recorded!",
        description: `Your score of ${scoreNum} for ${quiz.name} has been recorded.`
      });
      setSelectedQuiz(null);
      setScore('');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':return 'bg-green-100 text-green-800';
      case 'Medium':return 'bg-yellow-100 text-yellow-800';
      case 'Hard':return 'bg-red-100 text-red-800';
      default:return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTakeQuiz = () =>
  <div data-id="ujmz61b8e" data-path="src/components/Quizzes.tsx">
      {selectedQuiz ?
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }} data-id="map5sb26y" data-path="src/components/Quizzes.tsx">

          <div className="mb-4" data-id="qy7t6r1al" data-path="src/components/Quizzes.tsx">
            <Button
          onClick={() => {
            setSelectedQuiz(null);
            setScore('');
          }}
          variant="outline"
          size="sm" data-id="dxohz08fr" data-path="src/components/Quizzes.tsx">

              ← Back to Quizzes
            </Button>
          </div>
          
          {(() => {
        const quiz = quizzes.find((q) => q.id === selectedQuiz);
        if (!quiz) return null;

        return (
          <Card data-id="xv0opjjbv" data-path="src/components/Quizzes.tsx">
                <CardHeader data-id="w71li1h0m" data-path="src/components/Quizzes.tsx">
                  <CardTitle className="flex items-center justify-between" data-id="g9k309pka" data-path="src/components/Quizzes.tsx">
                    {quiz.name}
                    <Badge className={getDifficultyColor(quiz.difficulty)} data-id="cp9l5qj7y" data-path="src/components/Quizzes.tsx">
                      {quiz.difficulty}
                    </Badge>
                  </CardTitle>
                  <CardDescription data-id="uhpm57b9t" data-path="src/components/Quizzes.tsx">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4" data-id="z8cs319lt" data-path="src/components/Quizzes.tsx">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600" data-id="azavwqihh" data-path="src/components/Quizzes.tsx">
                    <div data-id="awfaev6db" data-path="src/components/Quizzes.tsx">📝 {quiz.questions} questions</div>
                    <div data-id="jh0wm6ic2" data-path="src/components/Quizzes.tsx">⏱️ {quiz.timeLimit}</div>
                    <div data-id="5k6wlngf6" data-path="src/components/Quizzes.tsx">🎯 {quiz.difficulty} level</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg" data-id="6vzn7t4s7" data-path="src/components/Quizzes.tsx">
                    <h4 className="font-semibold text-blue-800 mb-2" data-id="lf1okmcrk" data-path="src/components/Quizzes.tsx">Quiz Simulation</h4>
                    <p className="text-blue-600 text-sm mb-4" data-id="8n54itdi5" data-path="src/components/Quizzes.tsx">
                      This is a simulated quiz environment. Enter your score (0-100) to record your result.
                    </p>
                    <div className="flex gap-4 items-end" data-id="lq8yhgq8s" data-path="src/components/Quizzes.tsx">
                      <div className="flex-1" data-id="jdea8o1ql" data-path="src/components/Quizzes.tsx">
                        <label className="block text-sm font-medium text-gray-700 mb-1" data-id="z5dz1c4o8" data-path="src/components/Quizzes.tsx">
                          Your Score (0-100)
                        </label>
                        <Input
                      type="number"
                      min="0"
                      max="100"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      placeholder="Enter score" data-id="3nfjstd32" data-path="src/components/Quizzes.tsx" />

                      </div>
                      <Button onClick={handleSubmitScore} data-id="48v1n3v92" data-path="src/components/Quizzes.tsx">
                        Submit Score
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>);

      })()}
        </motion.div> :

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="1rr3zy3k6" data-path="src/components/Quizzes.tsx">
          {quizzes.map((quiz, index) =>
      <motion.div
        key={quiz.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }} data-id="r5gbxqk81" data-path="src/components/Quizzes.tsx">

              <Card className="h-full hover:shadow-lg transition-shadow" data-id="i1cifhxho" data-path="src/components/Quizzes.tsx">
                <CardHeader data-id="bmzw2paaj" data-path="src/components/Quizzes.tsx">
                  <div className="flex items-center justify-between" data-id="q5vzo0h1n" data-path="src/components/Quizzes.tsx">
                    <CardTitle className="text-lg" data-id="c50wrehib" data-path="src/components/Quizzes.tsx">{quiz.name}</CardTitle>
                    <Badge className={getDifficultyColor(quiz.difficulty)} data-id="qsmuwd4ic" data-path="src/components/Quizzes.tsx">
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <CardDescription data-id="803yi1hs4" data-path="src/components/Quizzes.tsx">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent data-id="lb3fp64qb" data-path="src/components/Quizzes.tsx">
                  <div className="space-y-2 text-sm text-gray-600 mb-4" data-id="27tnt14dw" data-path="src/components/Quizzes.tsx">
                    <div data-id="xo63yf02x" data-path="src/components/Quizzes.tsx">📝 {quiz.questions} questions</div>
                    <div data-id="o0m7oyr9a" data-path="src/components/Quizzes.tsx">⏱️ {quiz.timeLimit}</div>
                  </div>
                  <Button
              onClick={() => setSelectedQuiz(quiz.id)}
              className="w-full" data-id="0oped3ihc" data-path="src/components/Quizzes.tsx">

                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
      )}
        </div>
    }
    </div>;


  const renderPracticeQuestions = () =>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="26t4iusz5" data-path="src/components/Quizzes.tsx">
      {practiceQuestions.map((question, index) =>
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }} data-id="0wowe9vdx" data-path="src/components/Quizzes.tsx">

          <Card className="h-full" data-id="xvss7kgk4" data-path="src/components/Quizzes.tsx">
            <CardHeader data-id="e0ud9dyn1" data-path="src/components/Quizzes.tsx">
              <div className="flex items-center justify-between" data-id="gt3h2cvbx" data-path="src/components/Quizzes.tsx">
                <CardTitle className="text-lg" data-id="lmwpv3sbs" data-path="src/components/Quizzes.tsx">{question.title}</CardTitle>
                <Badge className={getDifficultyColor(question.difficulty)} data-id="drzopsy38" data-path="src/components/Quizzes.tsx">
                  {question.difficulty}
                </Badge>
              </div>
              <CardDescription data-id="12w71w5ug" data-path="src/components/Quizzes.tsx">{question.description}</CardDescription>
            </CardHeader>
            <CardContent data-id="jr5eah3yg" data-path="src/components/Quizzes.tsx">
              <Button
            onClick={() => {
              toast({
                title: "Practice Question",
                description: "This would open the coding environment to solve the problem."
              });
            }}
            className="w-full" data-id="a18slmoup" data-path="src/components/Quizzes.tsx">

                Solve
              </Button>
            </CardContent>
          </Card>
        </motion.div>
    )}
    </div>;


  return (
    <div className="max-w-6xl mx-auto p-6" data-id="g2uqo7127" data-path="src/components/Quizzes.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="l3t8ke3v4" data-path="src/components/Quizzes.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="pvaukp9n1" data-path="src/components/Quizzes.tsx">Quizzes & Practice</h1>
        <p className="text-gray-600" data-id="jzrku8gur" data-path="src/components/Quizzes.tsx">Test your programming knowledge and practice coding</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-8" data-id="soulc5zwd" data-path="src/components/Quizzes.tsx">
        <Button
          onClick={() => setActiveTab('take')}
          variant={activeTab === 'take' ? 'default' : 'outline'} data-id="1redxn549" data-path="src/components/Quizzes.tsx">

          Take a Quiz
        </Button>
        <Button
          onClick={() => setActiveTab('practice')}
          variant={activeTab === 'practice' ? 'default' : 'outline'} data-id="sn3yet316" data-path="src/components/Quizzes.tsx">

          Practice Programming Questions
        </Button>
      </div>

      <div className="min-h-96" data-id="ya6022ykx" data-path="src/components/Quizzes.tsx">
        {activeTab === 'take' && renderTakeQuiz()}
        {activeTab === 'practice' && renderPracticeQuestions()}
      </div>
    </div>);

};

export default Quizzes;