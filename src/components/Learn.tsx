import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

const Learn: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const categories = [
  { id: 'reasoning', label: 'Reasoning & Quant', icon: '🧮' },
  { id: 'programming', label: 'Programming Languages', icon: '💻' },
  { id: 'verbal', label: 'Verbal', icon: '📝' }];


  const programmingLanguages = [
  {
    id: 'c',
    name: 'C Programming',
    description: 'Learn the fundamentals of C programming language',
    level: 'Beginner',
    posts: [
    { title: 'Introduction to C Programming', content: 'C is a general-purpose programming language that has been around since the 1970s...' },
    { title: 'Variables and Data Types in C', content: 'In C, variables are containers that store data values. Different types of variables...' },
    { title: 'Control Structures in C', content: 'Control structures allow you to control the flow of program execution...' }]

  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'Object-oriented programming with C++',
    level: 'Intermediate',
    posts: [
    { title: 'C++ vs C: Key Differences', content: 'C++ is an extension of C that includes object-oriented programming features...' },
    { title: 'Classes and Objects in C++', content: 'Classes are user-defined data types that encapsulate data and functions...' },
    { title: 'Inheritance and Polymorphism', content: 'Inheritance allows classes to derive properties from other classes...' }]

  },
  {
    id: 'python',
    name: 'Python',
    description: 'Versatile and beginner-friendly programming',
    level: 'Beginner',
    posts: [
    { title: 'Python Basics: Getting Started', content: 'Python is a high-level, interpreted programming language known for its simplicity...' },
    { title: 'Data Structures in Python', content: 'Python offers several built-in data structures like lists, tuples, dictionaries...' },
    { title: 'Python Libraries and Frameworks', content: 'Python has a rich ecosystem of libraries for various applications...' }]

  },
  {
    id: 'java',
    name: 'Java',
    description: 'Enterprise-level object-oriented programming',
    level: 'Intermediate',
    posts: [
    { title: 'Java Fundamentals', content: 'Java is a class-based, object-oriented programming language...' },
    { title: 'Java Collections Framework', content: 'The Collections Framework provides a set of interfaces and classes...' },
    { title: 'Exception Handling in Java', content: 'Exception handling is a mechanism to handle runtime errors...' }]

  },
  {
    id: 'aiml',
    name: 'AI/ML',
    description: 'Artificial Intelligence and Machine Learning concepts',
    level: 'Advanced',
    posts: [
    { title: 'Introduction to Machine Learning', content: 'Machine Learning is a subset of AI that enables computers to learn without explicit programming...' },
    { title: 'Neural Networks Explained', content: 'Neural networks are computing systems inspired by biological neural networks...' },
    { title: 'Deep Learning Fundamentals', content: 'Deep learning uses artificial neural networks with multiple layers...' }]

  }];


  const renderProgrammingContent = () => {
    if (selectedLanguage) {
      const language = programmingLanguages.find((lang) => lang.id === selectedLanguage);
      if (!language) return null;

      return (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }} data-id="i8qvmsfvn" data-path="src/components/Learn.tsx">

          <div className="mb-4" data-id="uqxsqgmp0" data-path="src/components/Learn.tsx">
            <Button
              onClick={() => setSelectedLanguage(null)}
              variant="outline"
              size="sm" data-id="029f6dypz" data-path="src/components/Learn.tsx">

              ← Back to Languages
            </Button>
          </div>
          
          <Card className="mb-6" data-id="9radm288o" data-path="src/components/Learn.tsx">
            <CardHeader data-id="kghnwy7k8" data-path="src/components/Learn.tsx">
              <div className="flex items-center justify-between" data-id="mk43zbtdd" data-path="src/components/Learn.tsx">
                <CardTitle className="text-2xl" data-id="8u7uylls6" data-path="src/components/Learn.tsx">{language.name}</CardTitle>
                <Badge variant={language.level === 'Beginner' ? 'secondary' : language.level === 'Intermediate' ? 'default' : 'destructive'} data-id="pamb43tg7" data-path="src/components/Learn.tsx">
                  {language.level}
                </Badge>
              </div>
              <CardDescription data-id="gk7bvrfl0" data-path="src/components/Learn.tsx">{language.description}</CardDescription>
            </CardHeader>
          </Card>

          <div className="space-y-4" data-id="cjk96pchq" data-path="src/components/Learn.tsx">
            {language.posts.map((post, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }} data-id="c4iq6476s" data-path="src/components/Learn.tsx">

                <Card data-id="8c3lazk5s" data-path="src/components/Learn.tsx">
                  <CardHeader data-id="hr0wp2i2q" data-path="src/components/Learn.tsx">
                    <CardTitle className="text-lg" data-id="evok98z86" data-path="src/components/Learn.tsx">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent data-id="uc2vvhrfr" data-path="src/components/Learn.tsx">
                    <p className="text-gray-600" data-id="pzo6wj1de" data-path="src/components/Learn.tsx">{post.content}</p>
                    <Button className="mt-4" size="sm" data-id="bz3a6m6n6" data-path="src/components/Learn.tsx">
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>);

    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="6rwqi39my" data-path="src/components/Learn.tsx">
        {programmingLanguages.map((language, index) =>
        <motion.div
          key={language.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }} data-id="2xq413sx0" data-path="src/components/Learn.tsx">

            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedLanguage(language.id)} data-id="9e2xnvcto" data-path="src/components/Learn.tsx">
              <CardHeader data-id="jsdxvy66a" data-path="src/components/Learn.tsx">
                <div className="flex items-center justify-between" data-id="5u3ypdw5u" data-path="src/components/Learn.tsx">
                  <CardTitle data-id="2wdx4ge3c" data-path="src/components/Learn.tsx">{language.name}</CardTitle>
                  <Badge variant={language.level === 'Beginner' ? 'secondary' : language.level === 'Intermediate' ? 'default' : 'destructive'} data-id="8la431tyd" data-path="src/components/Learn.tsx">
                    {language.level}
                  </Badge>
                </div>
                <CardDescription data-id="83prmdtht" data-path="src/components/Learn.tsx">{language.description}</CardDescription>
              </CardHeader>
              <CardContent data-id="w1oz61g7f" data-path="src/components/Learn.tsx">
                <p className="text-sm text-gray-500 mb-4" data-id="a7ttzaj78" data-path="src/components/Learn.tsx">
                  {language.posts.length} articles available
                </p>
                <Button className="w-full" data-id="kxwbn65k7" data-path="src/components/Learn.tsx">
                  Explore {language.name}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>);

  };

  const renderPlaceholderContent = (categoryName: string) =>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="text-center py-12" data-id="ahmjwl3o9" data-path="src/components/Learn.tsx">

      <div className="text-6xl mb-4" data-id="yvx88xvt1" data-path="src/components/Learn.tsx">🚧</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2" data-id="3louazolc" data-path="src/components/Learn.tsx">Coming Soon</h3>
      <p className="text-gray-600 max-w-md mx-auto" data-id="wkc41ir2f" data-path="src/components/Learn.tsx">
        {categoryName} content is currently being developed. Check back soon for amazing learning resources!
      </p>
    </motion.div>;


  return (
    <div className="max-w-6xl mx-auto p-6" data-id="p7n8si76t" data-path="src/components/Learn.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="m7wgspupx" data-path="src/components/Learn.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="2tdun3p7l" data-path="src/components/Learn.tsx">Learn & Explore</h1>
        <p className="text-gray-600" data-id="lnwct9a2i" data-path="src/components/Learn.tsx">Choose a category to start your learning journey</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-8" data-id="4akenbdhm" data-path="src/components/Learn.tsx">
        {categories.map((category) =>
        <Button
          key={category.id}
          onClick={() => {
            setActiveCategory(category.id);
            setSelectedLanguage(null);
          }}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          className="flex items-center space-x-2" data-id="2kqqvs6rn" data-path="src/components/Learn.tsx">

            <span data-id="o2a272huu" data-path="src/components/Learn.tsx">{category.icon}</span>
            <span data-id="96f2z5mb3" data-path="src/components/Learn.tsx">{category.label}</span>
          </Button>
        )}
      </div>

      <div className="min-h-96" data-id="5mhrr1rig" data-path="src/components/Learn.tsx">
        {activeCategory === 'programming' && renderProgrammingContent()}
        {activeCategory === 'reasoning' && renderPlaceholderContent('Reasoning & Quant')}
        {activeCategory === 'verbal' && renderPlaceholderContent('Verbal')}
      </div>
    </div>);

};

export default Learn;