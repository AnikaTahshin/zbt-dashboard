"use client";
import Loader from "@/components/Loader";
import { getPostDetails } from "@/service/api.service";
import { Post } from "@/types/type";
import React, { useEffect, useState } from "react";
interface PostDetailsProps {
  params: {
    id: number;
  };
}

const PostDetails = ({ params }: PostDetailsProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Post>();

  const fetchDetails = async () => {
    try {
      if (params?.id) {
        const response = await getPostDetails(params?.id);
        setLoading(false);
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
     
     {
      loading ? 
      <Loader />
      :
      (
        <>
          <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl p-4">Post Details</h1>
          <div key={data?.id} className="max-w-sm rounded overflow-hidden shadow-lg relative">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data?.title}</div>
              <p className="text-gray-700 text-base">{data?.body}</p>
            </div>
          </div>
          </div>
        </>
        
      )
     }
    </>
  );
};

export default PostDetails;
