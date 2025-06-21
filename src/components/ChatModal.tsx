import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'motion/react';

interface ChatModalProps {
  friend: {id: string;name: string;};
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ friend, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const { chatMessages, sendMessage } = useApp();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const conversation = chatMessages.filter(
        (msg) =>
        msg.fromUserId === user.id && msg.toUserId === friend.id ||
        msg.fromUserId === friend.id && msg.toUserId === user.id
      ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

      setMessages(conversation);
    }
  }, [chatMessages, user, friend.id]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    sendMessage(friend.id, message.trim());
    setMessage('');
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog open={true} onOpenChange={onClose} data-id="zy6bp98fa" data-path="src/components/ChatModal.tsx">
      <DialogContent className="max-w-md" data-id="7u2tavrwr" data-path="src/components/ChatModal.tsx">
        <DialogHeader data-id="0varwu7ip" data-path="src/components/ChatModal.tsx">
          <DialogTitle className="flex items-center space-x-2" data-id="rrtx9tusv" data-path="src/components/ChatModal.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm" data-id="5vszzh2ym" data-path="src/components/ChatModal.tsx">
              {friend.name.charAt(0).toUpperCase()}
            </div>
            <span data-id="smqxay5el" data-path="src/components/ChatModal.tsx">Chat with {friend.name}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4" data-id="h5kbfl6yh" data-path="src/components/ChatModal.tsx">
          {/* Messages Area */}
          <div className="h-64 overflow-y-auto border rounded-lg p-3 bg-gray-50 space-y-3" data-id="5rqbrnk0q" data-path="src/components/ChatModal.tsx">
            {messages.length === 0 ?
            <div className="text-center text-gray-500 mt-8" data-id="odxdhlu9g" data-path="src/components/ChatModal.tsx">
                <div className="text-2xl mb-2" data-id="owh8umg5y" data-path="src/components/ChatModal.tsx">💬</div>
                <p data-id="1xntfui7u" data-path="src/components/ChatModal.tsx">No messages yet. Start the conversation!</p>
              </div> :

            messages.map((msg, index) =>
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={`flex ${msg.fromUserId === user?.id ? 'justify-end' : 'justify-start'}`} data-id="9cb8e90x3" data-path="src/components/ChatModal.tsx">

                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
              msg.fromUserId === user?.id ?
              'bg-blue-500 text-white' :
              'bg-white border'}`
              } data-id="2hlsuoxu2" data-path="src/components/ChatModal.tsx">
                    <p className="text-sm" data-id="far1wc98f" data-path="src/components/ChatModal.tsx">{msg.message}</p>
                    <p className={`text-xs mt-1 ${
                msg.fromUserId === user?.id ? 'text-blue-100' : 'text-gray-500'}`
                } data-id="919opawc6" data-path="src/components/ChatModal.tsx">
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </motion.div>
            )
            }
          </div>

          {/* Message Input */}
          <div className="flex space-x-2" data-id="j9nw9zise" data-path="src/components/ChatModal.tsx">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1" data-id="dbb98dw0c" data-path="src/components/ChatModal.tsx" />

            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()} data-id="yame7vip6" data-path="src/components/ChatModal.tsx">

              Send
            </Button>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg" data-id="0r2ownu0i" data-path="src/components/ChatModal.tsx">
            <p className="text-yellow-700 text-sm" data-id="8lspsrlzt" data-path="src/components/ChatModal.tsx">
              💡 <strong data-id="ztq56nazt" data-path="src/components/ChatModal.tsx">Simulation Note:</strong> Messages are simulated. Your friend will automatically reply after 2 seconds.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>);

};

export default ChatModal;