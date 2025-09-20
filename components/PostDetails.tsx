"use client";
import Loader from "@/components/Loader";
import { getPostDetails } from "@/service/api.service";
import { Post } from "@/types/type";
import React, { useEffect, useState } from "react";

interface PostDetailsProps {
  id: string;
}

const PostDetails =  ({ id }: PostDetailsProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Post>();
  const [error, setError] = useState<string>("");

  

  const fetchDetails = async () => {
    try {
      const response = await getPostDetails(id);
      if (response) {
        setData(response);
      } else {
        setError("Post not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Post not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Post Not Found</h2>
          <p className="text-gray-500 mb-6">The post you're looking for doesn't exist.</p>
          <a 
            href="/posts" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Posts
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm text-slate-600 font-medium">
            User Id: {data?.userId}
          </span>
        </div>
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {data?.title}
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            {data?.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
