"use client";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const Dashboard =  () => {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="flex min-h-[100vh] h-[100vh] overflow-y-hidden">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          ></div>
        )}

        <div className="flex-1 bg-gray-100 h-[100vh] min-h-[100vh] overflow-y-scroll">
          <Navbar setIsOpen={setIsOpen} />

          <div className="main-content p-5 bg-[#f3f8fe]">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
