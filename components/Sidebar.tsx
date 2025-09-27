"use client";
import Link from "next/link";
import React from "react";
import { FiHome, FiUsers } from "react-icons/fi";
import { MdOutlineSignpost } from "react-icons/md";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions";

const Sidebar = ({ isOpen, setIsOpen }: any) => {
  const pathname = usePathname();

  const handleLogOut = async () => {
    await logout();
  };

  const links = [
    { href: "/", label: "Dashboard", icon: <FiHome /> },
    { href: "/posts", label: "Posts", icon: <MdOutlineSignpost /> },
    { href: "/users", label: "Users", icon: <FiUsers /> },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"; // ✅ Dashboard only on root
    }
    return pathname.startsWith(href); // ✅ Works for nested routes too
  };

  return (
    <div
      className={`h-100vh w-[320px] min-h-[100vh] pb-0 p-5 sidebar bg-white shadow-xl fixed lg:relative transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="nav-logo text-center py-2">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-3xl font-semibold font-unbounded">
            Learn<span className="text-[#066dca] font-unbounded">Hub</span>
          </h1>
        </Link>
      </div>

      <span className="h-[15px] bg-[#dfe0e4] w-full block my-2"></span>

      <ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
        {links.map(({ href, label, icon }) => {
          const active = isLinkActive(href);

          return (
            <li
              key={href}
              className={`py-4 px-4 rounded-xl transition-colors duration-300 font-sora ${
                active
                  ? "bg-[var(--prim-color)] text-white"
                  : "hover:bg-[var(--prim-color)]"
              }`}
            >
              <Link
                href={href}
                className="text-md transition-colors duration-300 flex flex-row items-center gap-3 group"
              >
                <span
                  className={`${
                    active ? "text-white" : "text-[#066dca] group-hover:text-white"
                  }`}
                >
                  {icon}
                </span>
                <p
                  className={`${
                    active ? "text-white" : "text-neutral-500 group-hover:text-white"
                  }`}
                >
                  {label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex sidebar-nav flex-col justify-end items-start gap-3 absolute bottom-0 left-0 right-0 w-full p-5 pb-2">
        <li className="w-full py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
          <button
            onClick={handleLogOut}
            className="text-md cursor-pointer hover:text-red-500"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
