"use client";
import useFetch from "@/api/useFetch";
import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const { posts, error, loading } = useFetch(url );
  console.log("say hello to data", posts);

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
