'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Loader from './Loader';

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'authenticated' && pathname === '/login') {
      router.replace('/');
    }
  }, [status, pathname, router]);

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/login') {
      router.replace('/login');
    }
  }, [status, pathname, router]);

 

  
  if (pathname === '/login' || pathname?.startsWith('/auth')) {
    return <>{children}</>;
  }

  if (!session) return null;

  return (
    <div className="flex min-h-screen h-screen overflow-y-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">
        <Navbar setIsOpen={setIsOpen} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        />
      )}
    </div>
  );
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </SessionProvider>
  );
}
