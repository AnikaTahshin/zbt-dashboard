'use client';
import Main from "@/components/Main";
import MyChart from "@/components/MyChart";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className="flex min-h-[100vh] h-100vh overflow-y-hidden">
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    {/* <Navbar />
   
    <MyChart />
    <Main /> */}
    </>
  )
};

export default Dashboard;
