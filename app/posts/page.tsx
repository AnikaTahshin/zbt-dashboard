"use client";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useEffect } from "react";


const Posts = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const { posts, error, loading } = useFetch(url );


   useEffect(() => {
    document.title = "Posts - ZBT Dashboard";
  }, []);
  
  

  return (
    <div>
   {
    loading ? <Loader /> : (
        <PostCard posts={Array.isArray(posts) ? posts : []} />
      )
   }

      
    </div>
  );
};

export default Posts;
