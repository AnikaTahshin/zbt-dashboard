"use client";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";


const Posts = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const { posts, error, loading } = useFetch(url );
  

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
