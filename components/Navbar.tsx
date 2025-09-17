"use client";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const Navbar = ({ setIsOpen }: any) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    
  };
 
  return (
    <>
      <div className="bg-white h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">
        {/* search input starts*/}
        <div className="search-box border border-[#dfe0e4] relative h-[45px] hidden lg:flex items-center rounded-full w-70 outline-none">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full ps-4 outline-none"
          />
          <div className="absolute bg-[#006dca] right-0.5 p-3 rounded-[50%]">
            <MdSearch color="white" />
          </div>
        </div>
        {/* search input ends*/}

        <div
          className="toggle lg:hidden flex cursor-pointer text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <HiBars3BottomRight />
        </div>

        

        <div
          className="user cursor-pointer rounded-[50%] w-[50px] h-[50px] flex justify-center items-center relative"
          onClick={toggleUserMenu}
        >
          <Image
            src="/assets/user.jpg"
            alt="user-image"
            className="w-full h-full relative"
            width={50}
            height={50}
          />
          {isUserMenuOpen && (
            <ul className="absolute top-15 right-0 bg-white w-[200px] p-3 flex flex-col gap-3 rounded-2xl shadow-xl animate-fade-in">
              <li>
                <Link
                  href="/profile"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <FaUserCircle />
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/setttings"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <MdSettings />

                  Setttings
                </Link>
              </li>

              <li>
                <Link
                  href="/logout"
                  className="text-md hover:text-[#006dca] transition-colors duration-300 flex items-center gap-2"
                >
                  <MdLogout />

                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
