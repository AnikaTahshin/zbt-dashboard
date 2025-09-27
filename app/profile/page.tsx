import React from "react";
import { auth } from "@/auth";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile - LearnHub Dashboard",
  description: "User profile page",
};

const Profile = async () => {
  const session = await auth();
  const user = session?.user;

  
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="relative flex items-center justify-center flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      

        <div className="p-4">
          <Image
            src={user?.image ?? "/assets/user.jpg"}
            width={100}
            height={100}
            className="rounded-full"
            alt={user?.name ?? "Profile image"}
          />
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {user?.name}
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Profile;
