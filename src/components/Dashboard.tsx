import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'motion/react';

const Dashboard: React.FC = () => {
  const { quizScores, friends } = useApp();
  const { user } = useAuth();

  // Get user's quiz scores
  const myQuizScores = quizScores.filter((score) => score.userId === user?.id);

  // Get top 10 quiz scorers
  const topScorers = quizScores.
  sort((a, b) => b.score - a.score).
  slice(0, 10).
  map((score, index) => {
    const friend = friends.find((f) => f.id === score.userId);
    const isCurrentUser = score.userId === user?.id;
    return {
      ...score,
      rank: index + 1,
      displayName: isCurrentUser ? 'You' : friend ? friend.name : 'Unknown User',
      isCurrentUser
    };
  });

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return 'default';
    if (score >= 70) return 'secondary';
    return 'destructive';
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:return '🥇';
      case 2:return '🥈';
      case 3:return '🥉';
      default:return `${rank}.`;
    }
  };

  const calculateAverageScore = () => {
    if (myQuizScores.length === 0) return 0;
    const total = myQuizScores.reduce((sum, score) => sum + score.score, 0);
    return Math.round(total / myQuizScores.length);
  };

  const getBestScore = () => {
    if (myQuizScores.length === 0) return 0;
    return Math.max(...myQuizScores.map((score) => score.score));
  };

  return (
    <div className="max-w-6xl mx-auto p-6" data-id="o1kwul4bz" data-path="src/components/Dashboard.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="ssu6jtfw3" data-path="src/components/Dashboard.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="gbhj5s9hb" data-path="src/components/Dashboard.tsx">Dashboard</h1>
        <p className="text-gray-600" data-id="7eugysv2w" data-path="src/components/Dashboard.tsx">Track your progress and see how you compare with others</p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="ti1kbz86v" data-path="src/components/Dashboard.tsx">

        <Card data-id="35czoxrvi" data-path="src/components/Dashboard.tsx">
          <CardHeader className="pb-2" data-id="iind42c5p" data-path="src/components/Dashboard.tsx">
            <CardTitle className="text-lg flex items-center space-x-2" data-id="w9l87sszg" data-path="src/components/Dashboard.tsx">
              <span data-id="84nrgp4ac" data-path="src/components/Dashboard.tsx">📝</span>
              <span data-id="374xuuwv2" data-path="src/components/Dashboard.tsx">Quizzes Taken</span>
            </CardTitle>
          </CardHeader>
          <CardContent data-id="fsu9rjpac" data-path="src/components/Dashboard.tsx">
            <div className="text-3xl font-bold text-blue-600" data-id="24ftezmva" data-path="src/components/Dashboard.tsx">{myQuizScores.length}</div>
          </CardContent>
        </Card>

        <Card data-id="9fvy9qjhb" data-path="src/components/Dashboard.tsx">
          <CardHeader className="pb-2" data-id="7fkv819ud" data-path="src/components/Dashboard.tsx">
            <CardTitle className="text-lg flex items-center space-x-2" data-id="5q82inits" data-path="src/components/Dashboard.tsx">
              <span data-id="0bwt18yun" data-path="src/components/Dashboard.tsx">📊</span>
              <span data-id="h6hx500mq" data-path="src/components/Dashboard.tsx">Average Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent data-id="jlwf83i64" data-path="src/components/Dashboard.tsx">
            <div className="text-3xl font-bold text-green-600" data-id="4ar16vrgf" data-path="src/components/Dashboard.tsx">{calculateAverageScore()}%</div>
          </CardContent>
        </Card>

        <Card data-id="mlg6hf0is" data-path="src/components/Dashboard.tsx">
          <CardHeader className="pb-2" data-id="2gt8yg8k7" data-path="src/components/Dashboard.tsx">
            <CardTitle className="text-lg flex items-center space-x-2" data-id="a856irs1l" data-path="src/components/Dashboard.tsx">
              <span data-id="ahrczxbow" data-path="src/components/Dashboard.tsx">🏆</span>
              <span data-id="gowkg7ubo" data-path="src/components/Dashboard.tsx">Best Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent data-id="8ay7l89q4" data-path="src/components/Dashboard.tsx">
            <div className="text-3xl font-bold text-purple-600" data-id="adsveezkp" data-path="src/components/Dashboard.tsx">{getBestScore()}%</div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="q5kros7gi" data-path="src/components/Dashboard.tsx">
        {/* My Quiz Scores */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} data-id="ytkolalej" data-path="src/components/Dashboard.tsx">

          <Card data-id="6q2xj7kw5" data-path="src/components/Dashboard.tsx">
            <CardHeader data-id="kewhoo2p5" data-path="src/components/Dashboard.tsx">
              <CardTitle className="flex items-center space-x-2" data-id="j34w1tpfr" data-path="src/components/Dashboard.tsx">
                <span data-id="74zf2hdop" data-path="src/components/Dashboard.tsx">📝</span>
                <span data-id="uz9zwy7z0" data-path="src/components/Dashboard.tsx">My Quiz Scores</span>
              </CardTitle>
              <CardDescription data-id="i2un1xgj8" data-path="src/components/Dashboard.tsx">Your quiz performance history</CardDescription>
            </CardHeader>
            <CardContent data-id="3xvbmjjtm" data-path="src/components/Dashboard.tsx">
              {myQuizScores.length === 0 ?
              <div className="text-center py-8 text-gray-500" data-id="g0yw5ok6v" data-path="src/components/Dashboard.tsx">
                  <div className="text-4xl mb-2" data-id="s6j33hm52" data-path="src/components/Dashboard.tsx">📊</div>
                  <p data-id="3aja7bvpo" data-path="src/components/Dashboard.tsx">No quiz scores yet. Take a quiz to see your results here!</p>
                </div> :

              <div className="space-y-3 max-h-64 overflow-y-auto" data-id="strcxspeq" data-path="src/components/Dashboard.tsx">
                  {myQuizScores.
                sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).
                map((score, index) =>
                <motion.div
                  key={score.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" data-id="1uubo8905" data-path="src/components/Dashboard.tsx">

                        <div data-id="oa72x900l" data-path="src/components/Dashboard.tsx">
                          <p className="font-semibold" data-id="qgr43809p" data-path="src/components/Dashboard.tsx">{score.quizName}</p>
                          <p className="text-sm text-gray-600" data-id="vifkf4bo8" data-path="src/components/Dashboard.tsx">{score.date}</p>
                        </div>
                        <Badge variant={getScoreBadgeVariant(score.score)} data-id="4xmu5hqxs" data-path="src/components/Dashboard.tsx">
                          {score.score}%
                        </Badge>
                      </motion.div>
                )}
                </div>
              }
            </CardContent>
          </Card>
        </motion.div>

        {/* Top 10 Quiz Scorers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} data-id="ybf5oy6rp" data-path="src/components/Dashboard.tsx">

          <Card data-id="kbquo3vt3" data-path="src/components/Dashboard.tsx">
            <CardHeader data-id="n0q5xg4hl" data-path="src/components/Dashboard.tsx">
              <CardTitle className="flex items-center space-x-2" data-id="31mmodxya" data-path="src/components/Dashboard.tsx">
                <span data-id="q6g5taudx" data-path="src/components/Dashboard.tsx">🏆</span>
                <span data-id="cst4kh41g" data-path="src/components/Dashboard.tsx">Top 10 Quiz Scorers</span>
              </CardTitle>
              <CardDescription data-id="ayr7czct0" data-path="src/components/Dashboard.tsx">Leaderboard of highest quiz scores</CardDescription>
            </CardHeader>
            <CardContent data-id="7p0zd3koy" data-path="src/components/Dashboard.tsx">
              {topScorers.length === 0 ?
              <div className="text-center py-8 text-gray-500" data-id="h4kbngunk" data-path="src/components/Dashboard.tsx">
                  <div className="text-4xl mb-2" data-id="h8nk2j1k8" data-path="src/components/Dashboard.tsx">🏆</div>
                  <p data-id="at29yt56j" data-path="src/components/Dashboard.tsx">No scores recorded yet. Be the first to take a quiz!</p>
                </div> :

              <div className="space-y-2 max-h-64 overflow-y-auto" data-id="pmr748tyc" data-path="src/components/Dashboard.tsx">
                  {topScorers.map((scorer, index) =>
                <motion.div
                  key={`${scorer.id}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                  scorer.isCurrentUser ?
                  'bg-blue-50 border-2 border-blue-200' :
                  'bg-gray-50'}`
                  } data-id="4e9j4b2zq" data-path="src/components/Dashboard.tsx">

                      <div className="flex items-center space-x-3" data-id="b1gkrd40r" data-path="src/components/Dashboard.tsx">
                        <div className="w-8 h-8 flex items-center justify-center font-bold" data-id="c8j8y3r8e" data-path="src/components/Dashboard.tsx">
                          {getRankIcon(scorer.rank)}
                        </div>
                        <div data-id="0i2emng3q" data-path="src/components/Dashboard.tsx">
                          <p className={`font-semibold ${scorer.isCurrentUser ? 'text-blue-700' : ''}`} data-id="dxhgngvxr" data-path="src/components/Dashboard.tsx">
                            {scorer.displayName}
                          </p>
                          <p className="text-sm text-gray-600" data-id="e6m4lji9b" data-path="src/components/Dashboard.tsx">{scorer.quizName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2" data-id="3eac6bknx" data-path="src/components/Dashboard.tsx">
                        <Badge
                      variant={getScoreBadgeVariant(scorer.score)}
                      className={scorer.rank <= 3 ? 'font-bold' : ''} data-id="ng3f0aetf" data-path="src/components/Dashboard.tsx">

                          {scorer.score}%
                        </Badge>
                        {scorer.isCurrentUser &&
                    <Badge variant="outline" className="text-blue-600 border-blue-600" data-id="ll6n9hcjm" data-path="src/components/Dashboard.tsx">
                            You
                          </Badge>
                    }
                      </div>
                    </motion.div>
                )}
                </div>
              }
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Achievement Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8" data-id="7qhr35pbf" data-path="src/components/Dashboard.tsx">

        <Card data-id="b7316bhva" data-path="src/components/Dashboard.tsx">
          <CardHeader data-id="wsif3n6v0" data-path="src/components/Dashboard.tsx">
            <CardTitle className="flex items-center space-x-2" data-id="renz46fed" data-path="src/components/Dashboard.tsx">
              <span data-id="091tv20hs" data-path="src/components/Dashboard.tsx">🎯</span>
              <span data-id="fkseuv84l" data-path="src/components/Dashboard.tsx">Achievements</span>
            </CardTitle>
            <CardDescription data-id="iu6ew90tg" data-path="src/components/Dashboard.tsx">Your coding journey milestones</CardDescription>
          </CardHeader>
          <CardContent data-id="ku85iyge2" data-path="src/components/Dashboard.tsx">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-id="0x36s8zbz" data-path="src/components/Dashboard.tsx">
              <div className={`text-center p-4 rounded-lg ${
              myQuizScores.length >= 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'}`
              } data-id="ggmtg8398" data-path="src/components/Dashboard.tsx">
                <div className="text-2xl mb-2" data-id="bzlvq1yxn" data-path="src/components/Dashboard.tsx">
                  {myQuizScores.length >= 1 ? '🎉' : '🎯'}
                </div>
                <h4 className={`font-semibold mb-1 ${
                myQuizScores.length >= 1 ? 'text-green-700' : 'text-gray-600'}`
                } data-id="14o52wt8x" data-path="src/components/Dashboard.tsx">
                  First Quiz
                </h4>
                <p className="text-sm text-gray-600" data-id="qi6eiw6jx" data-path="src/components/Dashboard.tsx">
                  {myQuizScores.length >= 1 ? 'Completed!' : 'Take your first quiz'}
                </p>
              </div>

              <div className={`text-center p-4 rounded-lg ${
              getBestScore() >= 90 ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50'}`
              } data-id="zeef38crm" data-path="src/components/Dashboard.tsx">
                <div className="text-2xl mb-2" data-id="fpia1t987" data-path="src/components/Dashboard.tsx">
                  {getBestScore() >= 90 ? '⭐' : '🎯'}
                </div>
                <h4 className={`font-semibold mb-1 ${
                getBestScore() >= 90 ? 'text-purple-700' : 'text-gray-600'}`
                } data-id="v7yhs2436" data-path="src/components/Dashboard.tsx">
                  High Achiever
                </h4>
                <p className="text-sm text-gray-600" data-id="rxm1faqhi" data-path="src/components/Dashboard.tsx">
                  {getBestScore() >= 90 ? 'Score 90%+ achieved!' : 'Score 90% or higher'}
                </p>
              </div>

              <div className={`text-center p-4 rounded-lg ${
              myQuizScores.length >= 5 ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`
              } data-id="fvbfzr7ww" data-path="src/components/Dashboard.tsx">
                <div className="text-2xl mb-2" data-id="gf9bt8ss8" data-path="src/components/Dashboard.tsx">
                  {myQuizScores.length >= 5 ? '🔥' : '🎯'}
                </div>
                <h4 className={`font-semibold mb-1 ${
                myQuizScores.length >= 5 ? 'text-blue-700' : 'text-gray-600'}`
                } data-id="6hnm6a9p1" data-path="src/components/Dashboard.tsx">
                  Quiz Master
                </h4>
                <p className="text-sm text-gray-600" data-id="mmwjd31k5" data-path="src/components/Dashboard.tsx">
                  {myQuizScores.length >= 5 ? 'Completed 5+ quizzes!' : 'Complete 5 quizzes'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default Dashboard;