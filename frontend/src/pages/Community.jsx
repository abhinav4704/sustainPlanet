import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Is rainwater harvesting still effective in cities?",
    author: "aqua_mind",
    time: "2 hours ago",
    votes: 18,
    content: "I'm considering installing a rainwater system. Is it worth it with all the pollution?",
    replies: [
      {
        id: 101,
        author: "green_fix",
        time: "1 hour ago",
        content: "Totally! You just need a good filter before storage.",
      },
    ],
  },
  {
    id: 2,
    title: "What plants grow best in recycled bottles?",
    author: "urban_eco",
    time: "6 hours ago",
    votes: 25,
    content: "Want to make a vertical garden using plastic bottles. Any tips?",
    replies: [
      {
        id: 102,
        author: "plantlover",
        time: "3 hours ago",
        content: "Herbs like basil and mint work great, plus they’re useful daily!",
      },
    ],
  },
];

const Community = () => {
  const [openReplies, setOpenReplies] = useState({});

  const toggleReplies = (postId) => {
    setOpenReplies((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="min-h-screen px-4 py-10 max-w-3xl mx-auto text-white font-sans">
      <h1 className="text-3xl font-bold mb-6 border-b pb-3 border-zinc-700">🌍 Community Discussions</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex bg-zinc-900/60 rounded-lg border border-zinc-800 shadow-md"
          >
            {/* Upvotes */}
            <div className="w-12 flex flex-col items-center justify-start py-4 text-gray-400">
              <ArrowUp className="w-4 h-4 text-white mb-1" />
              <span className="text-sm">{post.votes}</span>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 space-y-2">
              <div className="text-sm text-gray-400">
                Posted by <span className="text-green-400">@{post.author}</span> · {post.time}
              </div>
              <h2 className="text-lg font-semibold text-white">{post.title}</h2>
              <p className="text-gray-300">{post.content}</p>

              {/* Read more */}
              <button
                onClick={() => toggleReplies(post.id)}
                className="text-sm text-white hover:underline mt-2"
              >
                {openReplies[post.id] ? "– Hide replies" : "+ Read more"}
              </button>

              {/* Replies */}
              {openReplies[post.id] && (
                <div className="mt-4 space-y-3 border-l border-zinc-700 pl-4">
                  {post.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="bg-zinc-800/50 rounded p-3 text-sm text-gray-300"
                    >
                      <div className="text-sm text-green-300 font-semibold">
                        @{reply.author}
                        <span className="text-gray-400 text-xs ml-2">{reply.time}</span>
                      </div>
                      <p className="pl-2 mt-1">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
