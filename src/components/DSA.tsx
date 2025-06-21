import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'motion/react';

const DSA: React.FC = () => {
  const [newResourceTitle, setNewResourceTitle] = useState('');
  const { dsaResources, uploadDSAResource, friends } = useApp();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleUploadResource = () => {
    if (!newResourceTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter a resource title",
        variant: "destructive"
      });
      return;
    }

    uploadDSAResource(newResourceTitle.trim());
    toast({
      title: "Resource Uploaded!",
      description: `"${newResourceTitle}" has been added to the resource library.`
    });
    setNewResourceTitle('');
  };

  const handleDownloadResource = (resource: any) => {
    console.log(`Downloading resource: ${resource.title}`);
    toast({
      title: "Download Started",
      description: `Downloading "${resource.title}". Check console for details.`
    });
  };

  const getUploaderName = (uploadedBy: string) => {
    if (user && uploadedBy === user.id) {
      return 'You';
    }
    const friend = friends.find((f) => f.id === uploadedBy);
    return friend ? friend.name : 'Unknown User';
  };

  return (
    <div className="max-w-6xl mx-auto p-6" data-id="kcwuuq6rr" data-path="src/components/DSA.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8" data-id="nsc6rk2ch" data-path="src/components/DSA.tsx">

        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-id="7byu9cxou" data-path="src/components/DSA.tsx">DSA Resources</h1>
        <p className="text-gray-600" data-id="3kt76unog" data-path="src/components/DSA.tsx">Share and access Data Structures & Algorithms resources</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="d8x30kyp6" data-path="src/components/DSA.tsx">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1" data-id="vkwtscl5q" data-path="src/components/DSA.tsx">

          <Card data-id="d8jvd4zwt" data-path="src/components/DSA.tsx">
            <CardHeader data-id="um19ygdw8" data-path="src/components/DSA.tsx">
              <CardTitle className="flex items-center space-x-2" data-id="wjjqrenku" data-path="src/components/DSA.tsx">
                <span data-id="gor5e98a1" data-path="src/components/DSA.tsx">📤</span>
                <span data-id="na3qir6s7" data-path="src/components/DSA.tsx">Upload Resource</span>
              </CardTitle>
              <CardDescription data-id="siryw0hh6" data-path="src/components/DSA.tsx">
                Share your DSA notes, cheat sheets, or study materials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-id="vxzl2weh7" data-path="src/components/DSA.tsx">
              <div data-id="yror01k79" data-path="src/components/DSA.tsx">
                <label className="block text-sm font-medium text-gray-700 mb-1" data-id="6i2s7aysa" data-path="src/components/DSA.tsx">
                  Resource Title
                </label>
                <Input
                  value={newResourceTitle}
                  onChange={(e) => setNewResourceTitle(e.target.value)}
                  placeholder="e.g., Binary Search Tree Notes"
                  onKeyPress={(e) => e.key === 'Enter' && handleUploadResource()} data-id="l6ftxww7p" data-path="src/components/DSA.tsx" />

              </div>
              <Button
                onClick={handleUploadResource}
                className="w-full"
                disabled={!newResourceTitle.trim()} data-id="hilqiw3p9" data-path="src/components/DSA.tsx">

                Simulate Upload
              </Button>
              
              <div className="bg-blue-50 p-3 rounded-lg" data-id="ts6k315yz" data-path="src/components/DSA.tsx">
                <p className="text-blue-700 text-sm" data-id="fjhxl35x7" data-path="src/components/DSA.tsx">
                  💡 <strong data-id="2bv8bsb5a" data-path="src/components/DSA.tsx">Note:</strong> This is a simulation. In a real app, you would upload actual files.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resources List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2" data-id="ngbjxqpur" data-path="src/components/DSA.tsx">

          <Card data-id="z2f4ks1zy" data-path="src/components/DSA.tsx">
            <CardHeader data-id="5s6mln66z" data-path="src/components/DSA.tsx">
              <CardTitle className="flex items-center space-x-2" data-id="pgontnjbd" data-path="src/components/DSA.tsx">
                <span data-id="5b3do7gz4" data-path="src/components/DSA.tsx">📚</span>
                <span data-id="6eer574xt" data-path="src/components/DSA.tsx">Available Resources ({dsaResources.length})</span>
              </CardTitle>
              <CardDescription data-id="1vflkn5w4" data-path="src/components/DSA.tsx">
                Download and study resources shared by the community
              </CardDescription>
            </CardHeader>
            <CardContent data-id="c99hj4fhm" data-path="src/components/DSA.tsx">
              {dsaResources.length === 0 ?
              <div className="text-center py-8 text-gray-500" data-id="gozlm42x8" data-path="src/components/DSA.tsx">
                  <div className="text-4xl mb-2" data-id="4r6pmmb6x" data-path="src/components/DSA.tsx">📭</div>
                  <p data-id="kyp1ifgct" data-path="src/components/DSA.tsx">No resources available yet. Be the first to upload one!</p>
                </div> :

              <div className="space-y-4" data-id="cqhirox10" data-path="src/components/DSA.tsx">
                  {dsaResources.map((resource, index) =>
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow" data-id="1acwx351c" data-path="src/components/DSA.tsx">

                      <div className="flex items-start justify-between" data-id="ciyuefllv" data-path="src/components/DSA.tsx">
                        <div className="flex-1" data-id="bnz4w5cox" data-path="src/components/DSA.tsx">
                          <h3 className="font-semibold text-gray-800 mb-1" data-id="ikgr86o78" data-path="src/components/DSA.tsx">
                            {resource.title}
                          </h3>
                          <div className="text-sm text-gray-600 space-y-1" data-id="k32fzx3o5" data-path="src/components/DSA.tsx">
                            <div className="flex items-center space-x-4" data-id="gs5nt87uv" data-path="src/components/DSA.tsx">
                              <span data-id="be31yprbd" data-path="src/components/DSA.tsx">👤 Uploaded by: {getUploaderName(resource.uploadedBy)}</span>
                              <span data-id="4k82gessg" data-path="src/components/DSA.tsx">📅 Date: {new Date(resource.uploadDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                      onClick={() => handleDownloadResource(resource)}
                      size="sm"
                      variant="outline"
                      className="ml-4" data-id="2upp0o81n" data-path="src/components/DSA.tsx">

                          📥 Download
                        </Button>
                      </div>
                    </motion.div>
                )}
                </div>
              }
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Study Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8" data-id="1n503etqq" data-path="src/components/DSA.tsx">

        <Card data-id="a0276imts" data-path="src/components/DSA.tsx">
          <CardHeader data-id="vg3j4uuyi" data-path="src/components/DSA.tsx">
            <CardTitle className="flex items-center space-x-2" data-id="gzovau7w2" data-path="src/components/DSA.tsx">
              <span data-id="o5n5lb5pk" data-path="src/components/DSA.tsx">💡</span>
              <span data-id="1vd61l8gl" data-path="src/components/DSA.tsx">Study Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent data-id="m96wywlok" data-path="src/components/DSA.tsx">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-id="88dcqv5xt" data-path="src/components/DSA.tsx">
              <div className="text-center p-4 bg-blue-50 rounded-lg" data-id="eccnx0geu" data-path="src/components/DSA.tsx">
                <div className="text-2xl mb-2" data-id="e87wyzmqk" data-path="src/components/DSA.tsx">🎯</div>
                <h4 className="font-semibold mb-1" data-id="rgwmgqprn" data-path="src/components/DSA.tsx">Practice Regularly</h4>
                <p className="text-sm text-gray-600" data-id="3qblw25ka" data-path="src/components/DSA.tsx">Consistent practice is key to mastering DSA concepts</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg" data-id="i5gvnvqmb" data-path="src/components/DSA.tsx">
                <div className="text-2xl mb-2" data-id="4hfhgxtp4" data-path="src/components/DSA.tsx">🤝</div>
                <h4 className="font-semibold mb-1" data-id="e4r597r1v" data-path="src/components/DSA.tsx">Learn Together</h4>
                <p className="text-sm text-gray-600" data-id="celzunyqi" data-path="src/components/DSA.tsx">Share resources and learn from your peers</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg" data-id="tzhbw2roh" data-path="src/components/DSA.tsx">
                <div className="text-2xl mb-2" data-id="2tx8wjsko" data-path="src/components/DSA.tsx">📊</div>
                <h4 className="font-semibold mb-1" data-id="0nhbvlql2" data-path="src/components/DSA.tsx">Track Progress</h4>
                <p className="text-sm text-gray-600" data-id="z0xuxnudn" data-path="src/components/DSA.tsx">Monitor your learning journey and achievements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default DSA;