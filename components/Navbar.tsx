"use client";
import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";

const Navbar = ({setIsOpen}:any) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationOpen(false);
  }
   const toggleNotification = () => {
    setIsNotificationOpen(!isUserMenuOpen);
    setIsUserMenuOpen(false);
  }
  return (
    <>
    <div className="bg-white h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">
      <div className="search-box border border-[#dfe0e4] relative h-[45px] hidden lg:flex items-center rounded-full w-70 outline-none">
        <input type="text" placeholder='Search' className='h-full w-full ps-4 outline-none' />
        <MdSearch className='absolute bg-[#006dca] text-white right-0.5 p-3 rounded-[50%]' />

      </div>
    </div>
    </>
  )
}

export default Navbar