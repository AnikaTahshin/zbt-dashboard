"use client";
import { Post } from "@/types/type";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index:number) => (
    {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 * index, ease: "easeInOut" },
  }
  )
};

const PostCard = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const handlePostDetails = async (id: number) => {
    router.push(`/posts/${id}`);
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-center my-5">All Posts</h1>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          {posts.map((post,index) => (
            <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
              key={post?.id}
              className="max-w-sm rounded overflow-hidden shadow-lg relative"
            >
              <div className="px-6 py-4">
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
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostCard;
