"use client";
import useFetch from "@/api/useFetch";
import PostCard from "@/components/PostCard";
import React, { useEffect, useState } from "react";
import fetchDataFromApi from "@/api/useFetch";
const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const url = "https://jsonplaceholder.typicode.com/posts";

   useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi({ url });
        setPosts(result);
      } catch (err: any) {
        console.error("see error", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  console.log("hello api res", posts);

  return (

    <div>
      {error && <p className="text-red-500">Error: {error}</p>}

      {posts.length === 0 && !error ? (
        <p>Loading...</p>
      ) : (
        <PostCard posts={posts} />
      )}
    </div>
   
  );
};

export default Posts;
