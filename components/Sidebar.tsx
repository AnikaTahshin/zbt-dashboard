"use client";
import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSignpost } from "react-icons/md";

import { logout } from "@/app/actions";
const Sidebar =  ({ isOpen, setIsOpen }: any) => {

  const handleLogOut = async () => { 
    console.log("logout clicked");
    await logout();
   }
   
  return (
    <div
      className={`h-100vh w-[320px] min-h-[100vh] pb-0 p-5 sidebar bg-white shadow-xl fixed lg:relative transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="nav-logo text-center py-2">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-3xl font-semibold font-unbounded">
            Zetta<span className="text-[#066dca] font-unbounded">byte</span>
          </h1>
        </Link>
      </div>

      <span className="h-[15px] bg-[#dfe0e4] w-full block my-2"></span>
      
      <ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
        <li className="py-4 px-4 rounded-xl transition-colors duration-300 font-sora bg-[var(--prim-color)]">
          <Link
            href="/"
            className="text-md transition-colors duration-300 flex flex-row items-center gap-3"
          >
            
            <FiHome className="text-white" />
            <p className="text-white">Dashboard</p>
          </Link>
        </li>

        {/* Posts */}
        <li className="py-4 px-4 rounded-xl transition-colors duration-300 font-sora hover:bg-[var(--prim-color)]">
          <Link
            href="/posts"
            className="text-md transition-colors duration-300 flex flex-row items-center gap-3 group"
          >
            <MdOutlineSignpost className="text-[#066dca] group-hover:text-white" />
            <p className="text-neutral-500 group-hover:text-white">Posts</p>
          </Link>
        </li>

        {/* Users */}
        <li className="py-4 px-4 rounded-xl transition-colors duration-300 font-sora hover:bg-[var(--prim-color)]">
          <Link
            href="/users"
            className="text-md transition-colors duration-300 flex flex-row items-center gap-3 group"
          >
            <FiUsers className="text-[#066dca] group-hover:text-white" />
            <p className="text-neutral-500 group-hover:text-white">Users</p>
          </Link>
        </li>
      </ul>

      <ul className="flex sidebar-nav flex-col jusctify-end items-start gap-3 absolute bottom-0 left-0 right-0 w-full p-5 pb-2">
        <li className="w-full py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
            <button onClick={handleLogOut} className="text-md cursor-pointer">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
