"use client";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import { getUserData, getUserDetails } from "@/service/api.service";
import type { User, Users } from "@/types/type";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<Users>();
  const [userDetails, setUserDetails] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number>();

  const fetchUserData = async () => {
    try {
      const response = await getUserData();
      if (response && response.length > 0) {
        setUsers(response);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error?.message);
      } else {
        setError("An unknown error occurred");
      }
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserDetails = async (id: number) => {
    setIsOpen(true);
    setUserId(id);
    setUserDetails(undefined); // Clear previous user details
    try {
      const response = await getUserDetails(id);
      if (response) {
        setUserDetails(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  return (
    <div className={`relative ${isOpen ? "opacity-50" : "opacity-100"}`}>
      {isOpen && (
        <Modal data={userDetails} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {error && (
        <p className="text-red-500 text-center">Something went wrong...</p>
      )}
      {loading && <Loader />}

      <div className="flex flex-col items-center justify-center p-6 w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Zetta<span className="text-[#066dca] font-unbounded">Users</span>
        </h1>

        <div className="relative overflow-x-auto w-full max-w-4xl mx-auto">
          <table className="w-full min-w-[600px] text-left table-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <thead className="sticky top-0 bg-slate-50 z-10">
              <tr>
                <th className="p-4 border-b border-slate-300">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    ID
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Name
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Email
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Company
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr
                  key={user?.id}
                  onClick={() => handleUserDetails(user?.id)}
                  className="hover:bg-slate-50 cursor-pointer"
                >
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">{index + 1}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">{user?.name}</p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                      {user?.email}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="block text-sm text-slate-800">
                      {user?.company?.name}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
