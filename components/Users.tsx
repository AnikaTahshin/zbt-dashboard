"use client";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import { getUserData, getUserDetails } from "@/service/api.service";
import type { User, Users } from "@/types/type";
import React, { useEffect, useState } from "react";
interface UsersPageProps {
  users: Users;
  error: string;
}
const UsersPage = ({ users, error }: UsersPageProps) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleUserDetails = async (id: number) => {
    setIsOpen(true);
    setLoadingDetails(true);
    setErrorDetails("");
    try {
      const details = await getUserDetails(id);
      setUserDetails(details);
    } catch (err) {
      setErrorDetails(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div>
      {isOpen && userDetails && (
        <Modal data={userDetails} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}

      <div className={`relative ${isOpen ? "opacity-50" : "opacity-100"}`}>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex flex-col items-center justify-center p-6 w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Zetta<span className="text-[#066dca] font-unbounded">Users</span>
          </h1>

          <div className="relative overflow-x-auto w-full max-w-4xl mx-auto">
            <table className="w-full min-w-[600px] text-left table-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <thead className="sticky top-0 bg-slate-50 z-10">
                <tr>
                  <th className="p-4 border-b border-slate-300">ID</th>
                  <th className="p-4 border-b border-slate-300">Name</th>
                  <th className="p-4 border-b border-slate-300">Email</th>
                  <th className="p-4 border-b border-slate-300">Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    onClick={() => handleUserDetails(user.id)}
                    className="hover:bg-slate-50 cursor-pointer"
                  >
                    <td className="p-4 border-b border-slate-200">{index + 1}</td>
                    <td className="p-4 border-b border-slate-200">{user.name}</td>
                    <td className="p-4 border-b border-slate-200">{user.email}</td>
                    <td className="p-4 border-b border-slate-200">{user.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {loadingDetails && <Loader />}
        {errorDetails && <p className="text-red-500 text-center">{errorDetails}</p>}
      </div>
    </div>
  );
};

export default UsersPage;

