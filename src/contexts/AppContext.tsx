import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface QuizScore {
  id: string;
  quizName: string;
  score: number;
  date: string;
  userId: string;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solvedBy: string[];
}

interface DSAResource {
  id: string;
  title: string;
  uploadedBy: string;
  uploadDate: string;
}

interface FriendRequest {
  id: string;
  fromUserId: string;
  fromUserName: string;
  toUserId: string;
  status: 'pending' | 'accepted' | 'rejected';
  date: string;
}

interface Friend {
  id: string;
  name: string;
}

interface ChatMessage {
  id: string;
  fromUserId: string;
  toUserId: string;
  message: string;
  timestamp: string;
}

interface Activity {
  id: string;
  userId: string;
  type: 'quiz' | 'challenge' | 'dsa_upload' | 'dsa_download';
  description: string;
  timestamp: string;
}

interface AppContextType {
  quizScores: QuizScore[];
  addQuizScore: (quizName: string, score: number) => void;
  challenges: Challenge[];
  solveChallenge: (challengeId: string) => void;
  dsaResources: DSAResource[];
  uploadDSAResource: (title: string) => void;
  friendRequests: FriendRequest[];
  friends: Friend[];
  sendFriendRequest: (toUserId: string, toUserName: string) => void;
  acceptFriendRequest: (requestId: string) => void;
  rejectFriendRequest: (requestId: string) => void;
  chatMessages: ChatMessage[];
  sendMessage: (toUserId: string, message: string) => void;
  activities: Activity[];
  getUserActivities: (userId: string) => Activity[];
  getUserQuizScores: (userId: string) => QuizScore[];
  getUserSolvedChallenges: (userId: string) => Challenge[];
  getUserDSAResources: (userId: string) => DSAResource[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const { user } = useAuth();
  const [quizScores, setQuizScores] = useState<QuizScore[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [dsaResources, setDSAResources] = useState<DSAResource[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  // Initialize data
  useEffect(() => {
    // Load quiz scores
    const savedScores = localStorage.getItem('quiz_scores');
    if (savedScores) {
      setQuizScores(JSON.parse(savedScores));
    } else {
      // Initialize with sample data
      const sampleScores = [
      { id: '1', quizName: 'Python Basics', score: 85, date: '2024-01-15', userId: 'user-sample-1' },
      { id: '2', quizName: 'Java OOP', score: 92, date: '2024-01-16', userId: 'user-sample-2' },
      { id: '3', quizName: 'C++ Fundamentals', score: 78, date: '2024-01-17', userId: 'user-sample-1' }];

      setQuizScores(sampleScores);
      localStorage.setItem('quiz_scores', JSON.stringify(sampleScores));
    }

    // Load challenges
    const savedChallenges = localStorage.getItem('challenges');
    if (savedChallenges) {
      setChallenges(JSON.parse(savedChallenges));
    } else {
      const sampleChallenges: Challenge[] = [
      { id: '1', title: 'Array Sum', description: 'Calculate the sum of all elements in an array', difficulty: 'Easy', solvedBy: ['user-sample-1', 'user-sample-2'] },
      { id: '2', title: 'Palindrome Checker', description: 'Check if a string is a palindrome', difficulty: 'Medium', solvedBy: ['user-sample-1'] },
      { id: '3', title: 'Binary Tree Traversal', description: 'Implement in-order traversal of a binary tree', difficulty: 'Hard', solvedBy: [] },
      { id: '4', title: 'Two Sum Problem', description: 'Find two numbers that add up to a target', difficulty: 'Easy', solvedBy: ['user-sample-2'] }];

      setChallenges(sampleChallenges);
      localStorage.setItem('challenges', JSON.stringify(sampleChallenges));
    }

    // Load DSA resources
    const savedResources = localStorage.getItem('dsa_resources');
    if (savedResources) {
      setDSAResources(JSON.parse(savedResources));
    } else {
      const sampleResources: DSAResource[] = [
      { id: '1', title: 'Sorting Algorithms Cheat Sheet', uploadedBy: 'user-sample-1', uploadDate: '2024-01-10' },
      { id: '2', title: 'Graph Theory Notes', uploadedBy: 'user-sample-2', uploadDate: '2024-01-12' }];

      setDSAResources(sampleResources);
      localStorage.setItem('dsa_resources', JSON.stringify(sampleResources));
    }

    // Load friend requests and friends
    const savedFriendRequests = localStorage.getItem('friend_requests');
    if (savedFriendRequests) {
      setFriendRequests(JSON.parse(savedFriendRequests));
    }

    const savedFriends = localStorage.getItem('friends');
    if (savedFriends) {
      setFriends(JSON.parse(savedFriends));
    }

    // Load activities
    const savedActivities = localStorage.getItem('activities');
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    } else {
      const sampleActivities: Activity[] = [
      { id: '1', userId: 'user-sample-1', type: 'quiz', description: 'Completed Python Basics quiz with score 85', timestamp: '2024-01-15T10:30:00Z' },
      { id: '2', userId: 'user-sample-2', type: 'challenge', description: 'Solved Array Sum challenge', timestamp: '2024-01-16T14:20:00Z' }];

      setActivities(sampleActivities);
      localStorage.setItem('activities', JSON.stringify(sampleActivities));
    }
  }, []);

  const addQuizScore = (quizName: string, score: number) => {
    if (!user) return;

    const newScore: QuizScore = {
      id: Date.now().toString(),
      quizName,
      score,
      date: new Date().toISOString().split('T')[0],
      userId: user.id
    };

    const updatedScores = [...quizScores, newScore];
    setQuizScores(updatedScores);
    localStorage.setItem('quiz_scores', JSON.stringify(updatedScores));

    // Add activity
    const newActivity: Activity = {
      id: Date.now().toString(),
      userId: user.id,
      type: 'quiz',
      description: `Completed ${quizName} quiz with score ${score}`,
      timestamp: new Date().toISOString()
    };
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  const solveChallenge = (challengeId: string) => {
    if (!user) return;

    const updatedChallenges = challenges.map((challenge) => {
      if (challenge.id === challengeId && !challenge.solvedBy.includes(user.id)) {
        return { ...challenge, solvedBy: [...challenge.solvedBy, user.id] };
      }
      return challenge;
    });

    setChallenges(updatedChallenges);
    localStorage.setItem('challenges', JSON.stringify(updatedChallenges));

    // Add activity
    const challenge = challenges.find((c) => c.id === challengeId);
    if (challenge) {
      const newActivity: Activity = {
        id: Date.now().toString(),
        userId: user.id,
        type: 'challenge',
        description: `Solved ${challenge.title} challenge`,
        timestamp: new Date().toISOString()
      };
      const updatedActivities = [...activities, newActivity];
      setActivities(updatedActivities);
      localStorage.setItem('activities', JSON.stringify(updatedActivities));
    }
  };

  const uploadDSAResource = (title: string) => {
    if (!user) return;

    const newResource: DSAResource = {
      id: Date.now().toString(),
      title,
      uploadedBy: user.id,
      uploadDate: new Date().toISOString().split('T')[0]
    };

    const updatedResources = [...dsaResources, newResource];
    setDSAResources(updatedResources);
    localStorage.setItem('dsa_resources', JSON.stringify(updatedResources));

    // Add activity
    const newActivity: Activity = {
      id: Date.now().toString(),
      userId: user.id,
      type: 'dsa_upload',
      description: `Uploaded DSA resource: ${title}`,
      timestamp: new Date().toISOString()
    };
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  const sendFriendRequest = (toUserId: string, toUserName: string) => {
    if (!user) return;

    const newRequest: FriendRequest = {
      id: Date.now().toString(),
      fromUserId: user.id,
      fromUserName: user.name,
      toUserId,
      status: 'pending',
      date: new Date().toISOString()
    };

    const updatedRequests = [...friendRequests, newRequest];
    setFriendRequests(updatedRequests);
    localStorage.setItem('friend_requests', JSON.stringify(updatedRequests));
  };

  const acceptFriendRequest = (requestId: string) => {
    const request = friendRequests.find((r) => r.id === requestId);
    if (!request) return;

    // Add to friends
    const newFriend: Friend = {
      id: request.fromUserId,
      name: request.fromUserName
    };

    const updatedFriends = [...friends, newFriend];
    setFriends(updatedFriends);
    localStorage.setItem('friends', JSON.stringify(updatedFriends));

    // Update request status
    const updatedRequests = friendRequests.map((r) =>
    r.id === requestId ? { ...r, status: 'accepted' as const } : r
    );
    setFriendRequests(updatedRequests);
    localStorage.setItem('friend_requests', JSON.stringify(updatedRequests));
  };

  const rejectFriendRequest = (requestId: string) => {
    const updatedRequests = friendRequests.map((r) =>
    r.id === requestId ? { ...r, status: 'rejected' as const } : r
    );
    setFriendRequests(updatedRequests);
    localStorage.setItem('friend_requests', JSON.stringify(updatedRequests));
  };

  const sendMessage = (toUserId: string, message: string) => {
    if (!user) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      fromUserId: user.id,
      toUserId,
      message,
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [...chatMessages, newMessage];
    setChatMessages(updatedMessages);
    localStorage.setItem('chat_messages', JSON.stringify(updatedMessages));

    // Simulate reply after 2 seconds
    setTimeout(() => {
      const replyMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        fromUserId: toUserId,
        toUserId: user.id,
        message: "Thanks for your message! This is a simulated reply.",
        timestamp: new Date().toISOString()
      };

      const updatedMessagesWithReply = [...updatedMessages, replyMessage];
      setChatMessages(updatedMessagesWithReply);
      localStorage.setItem('chat_messages', JSON.stringify(updatedMessagesWithReply));
    }, 2000);
  };

  const getUserActivities = (userId: string) => {
    return activities.filter((activity) => activity.userId === userId);
  };

  const getUserQuizScores = (userId: string) => {
    return quizScores.filter((score) => score.userId === userId);
  };

  const getUserSolvedChallenges = (userId: string) => {
    return challenges.filter((challenge) => challenge.solvedBy.includes(userId));
  };

  const getUserDSAResources = (userId: string) => {
    return dsaResources.filter((resource) => resource.uploadedBy === userId);
  };

  const value = {
    quizScores,
    addQuizScore,
    challenges,
    solveChallenge,
    dsaResources,
    uploadDSAResource,
    friendRequests,
    friends,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    chatMessages,
    sendMessage,
    activities,
    getUserActivities,
    getUserQuizScores,
    getUserSolvedChallenges,
    getUserDSAResources
  };

  return (
    <AppContext.Provider value={value} data-id="weu4rs6mz" data-path="src/contexts/AppContext.tsx">
      {children}
    </AppContext.Provider>);

};