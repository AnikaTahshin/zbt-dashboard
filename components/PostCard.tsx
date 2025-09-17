import React from "react";

const PostCard = ({ posts }: { posts: any[] }) => {
  return (
    <div className="grid gap-4 grid-cols-5">
      {posts.map((post) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{post.title}</div>
    <p className="text-gray-700 text-base">
      {post.body}</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Read more
</button>
  </div>
</div>

        
      ))}
      
    </div>
  );
};

export default PostCard;
