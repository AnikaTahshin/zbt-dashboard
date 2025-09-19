"use client";
import Loader from "@/components/Loader";
import { getPostDetails } from "@/service/api.service";
import { Post } from "@/types/type";
import React, { useEffect, useState } from "react";

interface PostDetailsProps {
  id: string;
}

const PostDetails = ({ id }: PostDetailsProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Post>();

  const fetchDetails = async () => {
    try {
      const response = await getPostDetails(id);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
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
