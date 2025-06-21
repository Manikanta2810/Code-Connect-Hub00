import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';
import ChatModal from './ChatModal';
import FriendProfileModal from './FriendProfileModal';

const Friends: React.FC = () => {
  const [friendUserId, setFriendUserId] = useState('');
  const [friendUserName, setFriendUserName] = useState('');
  const [chatFriend, setChatFriend] = useState<{id: string;name: string;} | null>(null);
  const [profileFriend, setProfileFriend] = useState<{id: string;name: string;} | null>(null);

  const {
    friendRequests,
    friends,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest
  } = useApp();
  const { user } = useAuth();
  const { toast } = useToast();

  const pendingIncoming = friendRequests.filter(
    (req) => req.toUserId === user?.id && req.status === 'pending'
  );

  const pendingOutgoing = friendRequests.filter(
    (req) => req.fromUserId === user?.id && req.status === 'pending'
  );

  const handleSendFriendRequest = () => {
    if (!friendUserId.trim() || !friendUserName.trim()) {
      toast({
        title: "Error",
        description: "Please enter both User ID and Name",
        variant: "destructive"
      });
      return;
    }

    if (friendUserId === user?.id) {
      toast({
        title: "Error",
        description: "You cannot send a friend request to yourself",
        variant: "destructive"
      });
      return;
    }

    // Check if already friends
    if (friends.some((friend) => friend.id === friendUserId)) {
      toast({
        title: "Error",
        description: "You are already friends with this user",
        variant: "destructive"
      });
      return;
    }

    // Check if request already sent
    if (friendRequests.some((req) => req.fromUserId === user?.id && req.toUserId === friendUserId)) {
      toast({
        title: "Error",
        description: "Friend request already sent to this user",
        variant: "destructive"
      });
      return;
    }

    sendFriendRequest(friendUserId.trim(), friendUserName.trim());
    toast({
      title: "Friend Request Sent",
      description: `Friend request sent to ${friendUserName}`
    });
    setFriendUserId('');
    setFriendUserName('');
  };

  const handleAcceptRequest = (requestId: string) => {
    acceptFriendRequest(requestId);
    toast({
      title: "Friend Request Accepted",
      description: "You are now friends!"
    });
  };

  const handleRejectRequest = (requestId: string) => {
    rejectFriendRequest(requestId);
    toast({
      title: "Friend Request Rejected",
      description: "Friend request has been rejected"
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6" data-id="um9hfrl0c" data-path="src/components/Friends.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="hxcdlbju3" data-path="src/components/Friends.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="fwfpwyixa" data-path="src/components/Friends.tsx">Friends & Connections</h1>
        <p className="text-gray-600" data-id="55d86urg9" data-path="src/components/Friends.tsx">Connect with fellow developers and expand your network</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="7fourlrek" data-path="src/components/Friends.tsx">
        {/* Left Column */}
        <div className="space-y-6" data-id="os2op21i1" data-path="src/components/Friends.tsx">
          {/* Your User ID */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} data-id="q6ptg1gpw" data-path="src/components/Friends.tsx">

            <Card data-id="wk2p8o83w" data-path="src/components/Friends.tsx">
              <CardHeader data-id="z8ywtibp3" data-path="src/components/Friends.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="duuxwa9c8" data-path="src/components/Friends.tsx">
                  <span data-id="9zi49qk3h" data-path="src/components/Friends.tsx">🆔</span>
                  <span data-id="8yz6bpmew" data-path="src/components/Friends.tsx">Your User ID</span>
                </CardTitle>
                <CardDescription data-id="f6w2tlvlt" data-path="src/components/Friends.tsx">Share this ID with others to receive friend requests</CardDescription>
              </CardHeader>
              <CardContent data-id="re100nilz" data-path="src/components/Friends.tsx">
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-center" data-id="y0tomv8r5" data-path="src/components/Friends.tsx">
                  {user?.id}
                </div>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(user?.id || '');
                    toast({
                      title: "Copied!",
                      description: "User ID copied to clipboard"
                    });
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full mt-2" data-id="k55hbm0m5" data-path="src/components/Friends.tsx">

                  📋 Copy ID
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Send Friend Request */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} data-id="byv1u6czt" data-path="src/components/Friends.tsx">

            <Card data-id="75p62g3a0" data-path="src/components/Friends.tsx">
              <CardHeader data-id="k2v5tcpo4" data-path="src/components/Friends.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="tpe8gabyc" data-path="src/components/Friends.tsx">
                  <span data-id="1e5z70inf" data-path="src/components/Friends.tsx">📤</span>
                  <span data-id="wtohxpjjr" data-path="src/components/Friends.tsx">Send Friend Request</span>
                </CardTitle>
                <CardDescription data-id="jtadinqlx" data-path="src/components/Friends.tsx">Connect with other developers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4" data-id="hbzmizi3c" data-path="src/components/Friends.tsx">
                <div data-id="uep8sjsr8" data-path="src/components/Friends.tsx">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="hiceyujd5" data-path="src/components/Friends.tsx">
                    Friend's User ID
                  </label>
                  <Input
                    value={friendUserId}
                    onChange={(e) => setFriendUserId(e.target.value)}
                    placeholder="user-xxxxx-xxxxx" data-id="mcqydb174" data-path="src/components/Friends.tsx" />

                </div>
                <div data-id="s3ctcuy6u" data-path="src/components/Friends.tsx">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="2zbhbwc51" data-path="src/components/Friends.tsx">
                    Friend's Name
                  </label>
                  <Input
                    value={friendUserName}
                    onChange={(e) => setFriendUserName(e.target.value)}
                    placeholder="Enter their name" data-id="jmhw6d0c0" data-path="src/components/Friends.tsx" />

                </div>
                <Button
                  onClick={handleSendFriendRequest}
                  className="w-full"
                  disabled={!friendUserId.trim() || !friendUserName.trim()} data-id="kl381nbn0" data-path="src/components/Friends.tsx">

                  Send Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pending Requests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} data-id="otj558fpi" data-path="src/components/Friends.tsx">

            <Card data-id="wx52b6rwb" data-path="src/components/Friends.tsx">
              <CardHeader data-id="1wijth4pb" data-path="src/components/Friends.tsx">
                <CardTitle className="flex items-center space-x-2" data-id="fwhnjjsvd" data-path="src/components/Friends.tsx">
                  <span data-id="es5a2jlpy" data-path="src/components/Friends.tsx">⏳</span>
                  <span data-id="6apxn7qxj" data-path="src/components/Friends.tsx">Pending Requests</span>
                  {pendingIncoming.length + pendingOutgoing.length > 0 &&
                  <Badge variant="secondary" data-id="ccxwljfa0" data-path="src/components/Friends.tsx">
                      {pendingIncoming.length + pendingOutgoing.length}
                    </Badge>
                  }
                </CardTitle>
              </CardHeader>
              <CardContent data-id="pji1f776t" data-path="src/components/Friends.tsx">
                {pendingIncoming.length === 0 && pendingOutgoing.length === 0 ?
                <p className="text-gray-500 text-center py-4" data-id="mjgz036gz" data-path="src/components/Friends.tsx">No pending requests</p> :

                <div className="space-y-4" data-id="udqjphgo0" data-path="src/components/Friends.tsx">
                    {/* Incoming Requests */}
                    {pendingIncoming.length > 0 &&
                  <div data-id="jv89v2nye" data-path="src/components/Friends.tsx">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2" data-id="52und8dj9" data-path="src/components/Friends.tsx">
                          Incoming ({pendingIncoming.length})
                        </h4>
                        {pendingIncoming.map((request) =>
                    <div key={request.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg mb-2" data-id="5lh37nn2l" data-path="src/components/Friends.tsx">
                            <div data-id="rtqyftlbf" data-path="src/components/Friends.tsx">
                              <p className="font-medium" data-id="7ohuj05k7" data-path="src/components/Friends.tsx">{request.fromUserName}</p>
                              <p className="text-sm text-gray-600" data-id="t3205qbvo" data-path="src/components/Friends.tsx">{request.fromUserId}</p>
                            </div>
                            <div className="flex space-x-2" data-id="q26zfonlb" data-path="src/components/Friends.tsx">
                              <Button
                          onClick={() => handleAcceptRequest(request.id)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700" data-id="cwawx3wqo" data-path="src/components/Friends.tsx">

                                Accept
                              </Button>
                              <Button
                          onClick={() => handleRejectRequest(request.id)}
                          size="sm"
                          variant="outline" data-id="j7iloxxdj" data-path="src/components/Friends.tsx">

                                Reject
                              </Button>
                            </div>
                          </div>
                    )}
                      </div>
                  }

                    {/* Outgoing Requests */}
                    {pendingOutgoing.length > 0 &&
                  <div data-id="n93bw76r7" data-path="src/components/Friends.tsx">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2" data-id="5c8iejerm" data-path="src/components/Friends.tsx">
                          Sent ({pendingOutgoing.length})
                        </h4>
                        {pendingOutgoing.map((request) =>
                    <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2" data-id="8uuzfpm48" data-path="src/components/Friends.tsx">
                            <div data-id="01knbkkiu" data-path="src/components/Friends.tsx">
                              <p className="font-medium" data-id="xgb752fu2" data-path="src/components/Friends.tsx">{request.fromUserName}</p>
                              <p className="text-sm text-gray-600" data-id="ywdhamc9q" data-path="src/components/Friends.tsx">Sent to: {request.toUserId}</p>
                            </div>
                            <Badge variant="outline" data-id="suwgymscc" data-path="src/components/Friends.tsx">Pending</Badge>
                          </div>
                    )}
                      </div>
                  }
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Friends List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} data-id="i69fhs95w" data-path="src/components/Friends.tsx">

          <Card data-id="l92uibr20" data-path="src/components/Friends.tsx">
            <CardHeader data-id="rh79ieedl" data-path="src/components/Friends.tsx">
              <CardTitle className="flex items-center space-x-2" data-id="pes5c6lpa" data-path="src/components/Friends.tsx">
                <span data-id="9mym7c0st" data-path="src/components/Friends.tsx">👥</span>
                <span data-id="oshlfcqrb" data-path="src/components/Friends.tsx">My Friends ({friends.length})</span>
              </CardTitle>
              <CardDescription data-id="738unlbxb" data-path="src/components/Friends.tsx">Your connected developer network</CardDescription>
            </CardHeader>
            <CardContent data-id="blyfwhaj5" data-path="src/components/Friends.tsx">
              {friends.length === 0 ?
              <div className="text-center py-8 text-gray-500" data-id="9cpb715ee" data-path="src/components/Friends.tsx">
                  <div className="text-4xl mb-2" data-id="mvv7eq8ot" data-path="src/components/Friends.tsx">👋</div>
                  <p data-id="i2xqyw8ex" data-path="src/components/Friends.tsx">No friends yet. Send some friend requests to get started!</p>
                </div> :

              <div className="space-y-3" data-id="hrrqn5d2y" data-path="src/components/Friends.tsx">
                  {friends.map((friend, index) =>
                <motion.div
                  key={friend.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow" data-id="cy81man5r" data-path="src/components/Friends.tsx">

                      <div className="flex items-center space-x-3" data-id="ooyrc4pcz" data-path="src/components/Friends.tsx">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold" data-id="9lx2s6r67" data-path="src/components/Friends.tsx">
                          {friend.name.charAt(0).toUpperCase()}
                        </div>
                        <div data-id="wo090741g" data-path="src/components/Friends.tsx">
                          <button
                        onClick={() => setProfileFriend(friend)}
                        className="font-medium hover:text-blue-600 transition-colors text-left" data-id="8d7rm3m8n" data-path="src/components/Friends.tsx">

                            {friend.name}
                          </button>
                          <p className="text-sm text-gray-600" data-id="8txews3nb" data-path="src/components/Friends.tsx">{friend.id}</p>
                        </div>
                      </div>
                      <Button
                    onClick={() => setChatFriend(friend)}
                    size="sm"
                    variant="outline" data-id="mpt95c37h" data-path="src/components/Friends.tsx">

                        💬 Chat
                      </Button>
                    </motion.div>
                )}
                </div>
              }
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Chat Modal */}
      {chatFriend &&
      <ChatModal
        friend={chatFriend}
        onClose={() => setChatFriend(null)} data-id="13akr7sbe" data-path="src/components/Friends.tsx" />

      }

      {/* Friend Profile Modal */}
      {profileFriend &&
      <FriendProfileModal
        friend={profileFriend}
        onClose={() => setProfileFriend(null)} data-id="6muy1zkcy" data-path="src/components/Friends.tsx" />

      }
    </div>);

};

export default Friends;