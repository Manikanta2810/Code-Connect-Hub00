import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';

const Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const { challenges, solveChallenge, friends } = useApp();
  const { user } = useAuth();
  const { toast } = useToast();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':return 'bg-green-100 text-green-800';
      case 'Medium':return 'bg-yellow-100 text-yellow-800';
      case 'Hard':return 'bg-red-100 text-red-800';
      default:return 'bg-gray-100 text-gray-800';
    }
  };

  const getFriendName = (userId: string) => {
    const friend = friends.find((f) => f.id === userId);
    return friend ? friend.name : 'Unknown User';
  };

  const handleSolveChallenge = (challengeId: string) => {
    if (!user) return;

    const challenge = challenges.find((c) => c.id === challengeId);
    if (!challenge) return;

    if (challenge.solvedBy.includes(user.id)) {
      toast({
        title: "Already Solved",
        description: "You have already solved this challenge!",
        variant: "default"
      });
      return;
    }

    solveChallenge(challengeId);
    toast({
      title: "Challenge Solved!",
      description: `Congratulations! You've solved "${challenge.title}"`
    });
  };

  const renderSolvedByInfo = (challenge: any) => {
    const friendsSolved = challenge.solvedBy.filter((userId: string) =>
    friends.some((friend) => friend.id === userId)
    );
    const othersSolved = challenge.solvedBy.length - friendsSolved.length;

    if (challenge.solvedBy.length === 0) {
      return (
        <div className="text-sm text-gray-500" data-id="lvt1vyttw" data-path="src/components/Challenges.tsx">
          🎯 No one has solved this yet - be the first!
        </div>);

    }

    return (
      <div className="space-y-2" data-id="ebb6us95g" data-path="src/components/Challenges.tsx">
        <div className="text-sm font-medium text-gray-700" data-id="13gjvhc6n" data-path="src/components/Challenges.tsx">
          Solved by {challenge.solvedBy.length} developer{challenge.solvedBy.length !== 1 ? 's' : ''}:
        </div>
        {friendsSolved.length > 0 &&
        <div className="text-sm text-blue-600" data-id="788j9cck4" data-path="src/components/Challenges.tsx">
            👥 Friends: {friendsSolved.map((userId) => getFriendName(userId)).join(', ')}
          </div>
        }
        {othersSolved > 0 &&
        <div className="text-sm text-gray-600" data-id="gwtoe972s" data-path="src/components/Challenges.tsx">
            👤 Others: {othersSolved} developer{othersSolved !== 1 ? 's' : ''}
          </div>
        }
      </div>);

  };

  const renderBrowseChallenges = () =>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="0bvsml560" data-path="src/components/Challenges.tsx">
      {challenges.map((challenge, index) =>
    <motion.div
      key={challenge.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }} data-id="zx60yp0zm" data-path="src/components/Challenges.tsx">

          <Card className="h-full" data-id="qfmjoa5i6" data-path="src/components/Challenges.tsx">
            <CardHeader data-id="5ii98owho" data-path="src/components/Challenges.tsx">
              <div className="flex items-center justify-between" data-id="7egwmylez" data-path="src/components/Challenges.tsx">
                <CardTitle className="text-lg" data-id="zmejwvkkz" data-path="src/components/Challenges.tsx">{challenge.title}</CardTitle>
                <Badge className={getDifficultyColor(challenge.difficulty)} data-id="dcyusnxk1" data-path="src/components/Challenges.tsx">
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardDescription data-id="fm2fc3xy2" data-path="src/components/Challenges.tsx">{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-id="pk7hljx1b" data-path="src/components/Challenges.tsx">
              {renderSolvedByInfo(challenge)}
              
              <div className="flex gap-2" data-id="glz2t7b3k" data-path="src/components/Challenges.tsx">
                <Button
              onClick={() => handleSolveChallenge(challenge.id)}
              className="flex-1"
              disabled={user && challenge.solvedBy.includes(user.id)} data-id="h7x3hyg9b" data-path="src/components/Challenges.tsx">

                  {user && challenge.solvedBy.includes(user.id) ? '✅ Solved' : 'Solve Challenge'}
                </Button>
                <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Challenge Details",
                  description: "This would show the full problem description and examples."
                });
              }} data-id="68mid6qrj" data-path="src/components/Challenges.tsx">

                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
    )}
    </div>;


  const renderEnterChallenge = () =>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="max-w-2xl mx-auto" data-id="whxtvetcy" data-path="src/components/Challenges.tsx">

      <Card data-id="9b7iw3xh6" data-path="src/components/Challenges.tsx">
        <CardHeader data-id="9cnivk3wk" data-path="src/components/Challenges.tsx">
          <CardTitle data-id="jggo70c0a" data-path="src/components/Challenges.tsx">Submit a New Challenge</CardTitle>
          <CardDescription data-id="ufqe2rony" data-path="src/components/Challenges.tsx">
            Share a coding challenge with the community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-id="khbiiia8m" data-path="src/components/Challenges.tsx">
          <div className="bg-blue-50 p-4 rounded-lg" data-id="2tiu9to9r" data-path="src/components/Challenges.tsx">
            <h4 className="font-semibold text-blue-800 mb-2" data-id="v8wwl93z7" data-path="src/components/Challenges.tsx">Coming Soon!</h4>
            <p className="text-blue-600 text-sm" data-id="9to5he8qr" data-path="src/components/Challenges.tsx">
              The challenge submission feature is currently under development. 
              Soon you'll be able to create and share your own coding challenges with the community.
            </p>
          </div>
          
          <div className="space-y-4 opacity-50" data-id="wi8yolzpd" data-path="src/components/Challenges.tsx">
            <div data-id="lpii7edxb" data-path="src/components/Challenges.tsx">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="ijgrgaclz" data-path="src/components/Challenges.tsx">
                Challenge Title
              </label>
              <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter challenge title"
              disabled data-id="jyv0hv52u" data-path="src/components/Challenges.tsx" />

            </div>
            
            <div data-id="kqzh0goks" data-path="src/components/Challenges.tsx">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="o9rx5ufez" data-path="src/components/Challenges.tsx">
                Description
              </label>
              <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
              placeholder="Describe the challenge"
              disabled data-id="i795yb5wv" data-path="src/components/Challenges.tsx" />

            </div>
            
            <div data-id="vxpzcbxh5" data-path="src/components/Challenges.tsx">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="5lirmgkyr" data-path="src/components/Challenges.tsx">
                Difficulty Level
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md" disabled data-id="yy87muuof" data-path="src/components/Challenges.tsx">
                <option data-id="tffqf4jcx" data-path="src/components/Challenges.tsx">Easy</option>
                <option data-id="psyb014bl" data-path="src/components/Challenges.tsx">Medium</option>
                <option data-id="49lk0hus6" data-path="src/components/Challenges.tsx">Hard</option>
              </select>
            </div>
            
            <Button className="w-full" disabled data-id="v6kvzy2aw" data-path="src/components/Challenges.tsx">
              Submit Challenge
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>;


  return (
    <div className="max-w-6xl mx-auto p-6" data-id="n5vayz6sk" data-path="src/components/Challenges.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="ofde63dy0" data-path="src/components/Challenges.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="tw7l3mqib" data-path="src/components/Challenges.tsx">Coding Challenges</h1>
        <p className="text-gray-600" data-id="ha47khdc9" data-path="src/components/Challenges.tsx">Solve challenges and see what your friends have accomplished</p>
      </motion.div>

      <div className="flex flex-wrap gap-4 mb-8" data-id="t8af8k6mb" data-path="src/components/Challenges.tsx">
        <Button
          onClick={() => setActiveTab('browse')}
          variant={activeTab === 'browse' ? 'default' : 'outline'} data-id="sg84ftana" data-path="src/components/Challenges.tsx">

          Browse Challenges
        </Button>
        <Button
          onClick={() => setActiveTab('enter')}
          variant={activeTab === 'enter' ? 'default' : 'outline'} data-id="58iikynq0" data-path="src/components/Challenges.tsx">

          Enter a Challenge
        </Button>
      </div>

      <div className="min-h-96" data-id="48rt3m08v" data-path="src/components/Challenges.tsx">
        {activeTab === 'browse' && renderBrowseChallenges()}
        {activeTab === 'enter' && renderEnterChallenge()}
      </div>
    </div>);

};

export default Challenges;