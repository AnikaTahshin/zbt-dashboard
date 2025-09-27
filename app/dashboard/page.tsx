"use client";
import Main from "@/components/Main";

import React, { useEffect } from "react";
const Dashboard = () => {
  useEffect(() => {
    document.title = "LearnHub Dashboard";
  }, []);
  return (
    <>
      
        <div className="p-5 bg-[#f3f8fe]">
          <Main />
        </div>
      
    </>
  );
};

export default Dashboard;
