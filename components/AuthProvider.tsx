'use client';

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "LearnHub Dashboard";
  }, []);

  return (
    <SessionProvider>
      <div className="flex min-h-[100vh] h-[100vh] overflow-y-hidden">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex-1 flex flex-col">
          <Navbar setIsOpen={setIsOpen} />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        />
      )}
    </SessionProvider>
  );
}
