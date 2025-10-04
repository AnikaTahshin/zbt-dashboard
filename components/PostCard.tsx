"use client";
import { Post } from "@/types/type";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 * index },
  }),
};

const PostCard = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const handlePostDetails = async (id: number) => {
    router.push(`/posts/${id}`);
  };
  return (
    <>
      <div className="px-16">
        <h1 className="text-4xl font-bold text-gray-800 my-6 text-center">
          All<span className="text-[#066dca] font-unbounded">Posts</span>
        </h1>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          {posts?.map((post, index) => (
            <motion.div
              variants={variants}
              initial="initial"
              animate="active"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={post?.id}
              className="max-w-sm overflow-hidden "
            >
              <div className="flex p-4 flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
                <div className="">
                  <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                    {post?.title.slice(0, 20)}...
                  </h5>
                  <p className="text-slate-600 leading-normal font-light">
                    {post?.body.slice(0, 80)}...
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => handlePostDetails(post?.id)}
                    className="cursor-pointer rounded-md bg-[#066dca] py-2 px-2 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read more
                  </button>
                </div>
              </div>
              {/* <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post?.title}</div>
                <p className="text-gray-700 text-base">
                  {post?.body.slice(0, 30)}...
                </p>
              </div>
              {post?.body?.length > 40 && (
                <div className="px-6 pt-4 pb-2 absolute bottom-0 right-0">
                  <button
                    onClick={() => handlePostDetails(post?.id)}
                    className="bg-blue-500 hover:bg-[#066dca] text-white font-bold py-1 px-2 rounded-[10px]"
                  >
                    More
                  </button>
                </div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostCard;
