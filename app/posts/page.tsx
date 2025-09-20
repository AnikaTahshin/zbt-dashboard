"use client";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useEffect } from "react";

const Posts = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const { posts, error, loading } = useFetch(url);

  useEffect(() => {
    document.title = "Posts - ZBT Dashboard";
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <PostCard posts={Array.isArray(posts) ? posts : []} />
      )}
      {error ? (
        <div className="flex justify-center items-center h-[100vh]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Error</h2>
            <p className="text-gray-500 mb-6">{error}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Posts;
