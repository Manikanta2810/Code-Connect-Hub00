import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { motion } from 'motion/react';

interface FriendProfileModalProps {
  friend: {id: string;name: string;};
  onClose: () => void;
}

const FriendProfileModal: React.FC<FriendProfileModalProps> = ({ friend, onClose }) => {
  const {
    getUserQuizScores,
    getUserSolvedChallenges,
    getUserDSAResources,
    getUserActivities
  } = useApp();

  const friendQuizScores = getUserQuizScores(friend.id);
  const friendSolvedChallenges = getUserSolvedChallenges(friend.id);
  const friendDSAResources = getUserDSAResources(friend.id);
  const friendActivities = getUserActivities(friend.id).slice(0, 5); // Show last 5

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':return 'bg-green-100 text-green-800';
      case 'Medium':return 'bg-yellow-100 text-yellow-800';
      case 'Hard':return 'bg-red-100 text-red-800';
      default:return 'bg-gray-100 text-gray-800';
    }
  };

  const formatActivityTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'quiz':return '📝';
      case 'challenge':return '🏆';
      case 'dsa_upload':return '📤';
      case 'dsa_download':return '📥';
      default:return '📋';
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose} data-id="i1qbdsi6h" data-path="src/components/FriendProfileModal.tsx">
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" data-id="raq280q71" data-path="src/components/FriendProfileModal.tsx">
        <DialogHeader data-id="rn4gpffvq" data-path="src/components/FriendProfileModal.tsx">
          <DialogTitle className="flex items-center space-x-3" data-id="wvrcx7mz1" data-path="src/components/FriendProfileModal.tsx">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold" data-id="yp225jxuj" data-path="src/components/FriendProfileModal.tsx">
              {friend.name.charAt(0).toUpperCase()}
            </div>
            <div data-id="8tecdkab8" data-path="src/components/FriendProfileModal.tsx">
              <div data-id="5hx3w3h0x" data-path="src/components/FriendProfileModal.tsx">{friend.name}'s Profile</div>
              <div className="text-sm text-gray-600 font-normal" data-id="aom99s714" data-path="src/components/FriendProfileModal.tsx">{friend.id}</div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6" data-id="gupyvsidr" data-path="src/components/FriendProfileModal.tsx">
          {/* Quiz Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} data-id="xqhft83pn" data-path="src/components/FriendProfileModal.tsx">

            <Card data-id="0g7k7rp8t" data-path="src/components/FriendProfileModal.tsx">
              <CardHeader data-id="c4ao3ccj8" data-path="src/components/FriendProfileModal.tsx">
                <CardTitle className="text-lg flex items-center space-x-2" data-id="txjxlbijr" data-path="src/components/FriendProfileModal.tsx">
                  <span data-id="87mhgtasv" data-path="src/components/FriendProfileModal.tsx">📝</span>
                  <span data-id="66gycgq7m" data-path="src/components/FriendProfileModal.tsx">Quiz Scores ({friendQuizScores.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent data-id="4xiiim7rq" data-path="src/components/FriendProfileModal.tsx">
                {friendQuizScores.length === 0 ?
                <p className="text-gray-500 text-center py-4" data-id="4wyli2eap" data-path="src/components/FriendProfileModal.tsx">No quiz scores yet</p> :

                <div className="space-y-2" data-id="42pnod8zs" data-path="src/components/FriendProfileModal.tsx">
                    {friendQuizScores.map((score) =>
                  <div key={score.id} className="flex items-center justify-between p-2 bg-gray-50 rounded" data-id="kdqzvo7dy" data-path="src/components/FriendProfileModal.tsx">
                        <span className="font-medium" data-id="jpsd481mr" data-path="src/components/FriendProfileModal.tsx">{score.quizName}</span>
                        <div className="flex items-center space-x-2" data-id="hoksdntmq" data-path="src/components/FriendProfileModal.tsx">
                          <Badge variant={score.score >= 80 ? 'default' : score.score >= 60 ? 'secondary' : 'destructive'} data-id="j07h7va5h" data-path="src/components/FriendProfileModal.tsx">
                            {score.score}%
                          </Badge>
                          <span className="text-sm text-gray-600" data-id="mwk7jxv3d" data-path="src/components/FriendProfileModal.tsx">{score.date}</span>
                        </div>
                      </div>
                  )}
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>

          {/* Solved Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }} data-id="b549eqyvr" data-path="src/components/FriendProfileModal.tsx">

            <Card data-id="gdh9dn2re" data-path="src/components/FriendProfileModal.tsx">
              <CardHeader data-id="ylc2i4fa2" data-path="src/components/FriendProfileModal.tsx">
                <CardTitle className="text-lg flex items-center space-x-2" data-id="zy6mfzh7s" data-path="src/components/FriendProfileModal.tsx">
                  <span data-id="fhahabg01" data-path="src/components/FriendProfileModal.tsx">🏆</span>
                  <span data-id="or4gt2sla" data-path="src/components/FriendProfileModal.tsx">Challenges Solved ({friendSolvedChallenges.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent data-id="nhbmq6hjl" data-path="src/components/FriendProfileModal.tsx">
                {friendSolvedChallenges.length === 0 ?
                <p className="text-gray-500 text-center py-4" data-id="uiva7krg5" data-path="src/components/FriendProfileModal.tsx">No challenges solved yet</p> :

                <div className="space-y-2" data-id="3zaz5fdt0" data-path="src/components/FriendProfileModal.tsx">
                    {friendSolvedChallenges.map((challenge) =>
                  <div key={challenge.id} className="flex items-center justify-between p-2 bg-gray-50 rounded" data-id="tmrbqb0c9" data-path="src/components/FriendProfileModal.tsx">
                        <div data-id="ka2m1i9at" data-path="src/components/FriendProfileModal.tsx">
                          <span className="font-medium" data-id="rxl3zwp8r" data-path="src/components/FriendProfileModal.tsx">{challenge.title}</span>
                          <p className="text-sm text-gray-600" data-id="cmsa6nraw" data-path="src/components/FriendProfileModal.tsx">{challenge.description}</p>
                        </div>
                        <Badge className={getDifficultyColor(challenge.difficulty)} data-id="cf7kge9zg" data-path="src/components/FriendProfileModal.tsx">
                          {challenge.difficulty}
                        </Badge>
                      </div>
                  )}
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>

          {/* DSA Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }} data-id="1yg7sepi1" data-path="src/components/FriendProfileModal.tsx">

            <Card data-id="7dk9uvgh2" data-path="src/components/FriendProfileModal.tsx">
              <CardHeader data-id="zz7a6std6" data-path="src/components/FriendProfileModal.tsx">
                <CardTitle className="text-lg flex items-center space-x-2" data-id="4l9bqwqnw" data-path="src/components/FriendProfileModal.tsx">
                  <span data-id="vm4hofyr6" data-path="src/components/FriendProfileModal.tsx">📚</span>
                  <span data-id="b7oy027xs" data-path="src/components/FriendProfileModal.tsx">DSA Resources ({friendDSAResources.length})</span>
                </CardTitle>
              </CardHeader>
              <CardContent data-id="ljjs32bex" data-path="src/components/FriendProfileModal.tsx">
                {friendDSAResources.length === 0 ?
                <p className="text-gray-500 text-center py-4" data-id="8nsm55fkc" data-path="src/components/FriendProfileModal.tsx">No resources uploaded yet</p> :

                <div className="space-y-2" data-id="u6mr1so2a" data-path="src/components/FriendProfileModal.tsx">
                    {friendDSAResources.map((resource) =>
                  <div key={resource.id} className="flex items-center justify-between p-2 bg-gray-50 rounded" data-id="877ovvxlk" data-path="src/components/FriendProfileModal.tsx">
                        <span className="font-medium" data-id="g6ywo1xh9" data-path="src/components/FriendProfileModal.tsx">{resource.title}</span>
                        <span className="text-sm text-gray-600" data-id="c3921iap9" data-path="src/components/FriendProfileModal.tsx">{resource.uploadDate}</span>
                      </div>
                  )}
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }} data-id="mn4t7kcmn" data-path="src/components/FriendProfileModal.tsx">

            <Card data-id="2o8b8t2zm" data-path="src/components/FriendProfileModal.tsx">
              <CardHeader data-id="6c7wbhgw7" data-path="src/components/FriendProfileModal.tsx">
                <CardTitle className="text-lg flex items-center space-x-2" data-id="wcy27bx1a" data-path="src/components/FriendProfileModal.tsx">
                  <span data-id="dto0dwhj1" data-path="src/components/FriendProfileModal.tsx">📋</span>
                  <span data-id="8hzq0ruao" data-path="src/components/FriendProfileModal.tsx">Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent data-id="dlsilb3d5" data-path="src/components/FriendProfileModal.tsx">
                {friendActivities.length === 0 ?
                <p className="text-gray-500 text-center py-4" data-id="y0m9smj49" data-path="src/components/FriendProfileModal.tsx">No recent activities</p> :

                <div className="space-y-3" data-id="c9sxcnk9a" data-path="src/components/FriendProfileModal.tsx">
                    {friendActivities.map((activity) =>
                  <div key={activity.id} className="flex items-start space-x-3 p-2 bg-gray-50 rounded" data-id="3wrwq187s" data-path="src/components/FriendProfileModal.tsx">
                        <span className="text-lg" data-id="5nvju4geu" data-path="src/components/FriendProfileModal.tsx">{getActivityIcon(activity.type)}</span>
                        <div className="flex-1" data-id="t30wdy9ht" data-path="src/components/FriendProfileModal.tsx">
                          <p className="text-sm" data-id="2ye3b06in" data-path="src/components/FriendProfileModal.tsx">{activity.description}</p>
                          <p className="text-xs text-gray-600 mt-1" data-id="q0lbiqrp5" data-path="src/components/FriendProfileModal.tsx">
                            {formatActivityTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                  )}
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>);

};

export default FriendProfileModal;