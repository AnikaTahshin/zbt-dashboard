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
  
  const fetchUserData = async () => {
    try {
      const response = await getUserData();
      if (response && response.length > 0) {
        setLoading(false);
        setUsers(response);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
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
    
    try {
     
        const response = await getUserDetails(id);
        if (response) {
        setLoading(false);
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
  }, []);

  

  return (
    <div className={`relative ${isOpen ? 'opacity-50' : 'opacity-100'}`}>
    {isOpen && userDetails && (
      <Modal 
        data={userDetails} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
      />
    )}
{
  loading && <Loader />
}
    
      <div className="flex flex-col items-center justify-center p-4">
        <h1>All Users</h1>
        <div className={`relative flex flex-col  overflow-scroll  text-gray-700 bg-white shadow-md rounded-lg bg-clip-border`}>
          <table className=" text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    id
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Name
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Email
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500">
                    Company
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="block text-sm font-normal leading-none text-slate-500"></p>
                </th>
              </tr>
            </thead>
            {users?.map((user, index) => (
              <tbody key={user?.id}>
                <tr
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
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
