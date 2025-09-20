'use client';
import { motion } from "framer-motion";
import { User } from "@/types/type";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: User | undefined;
}
function Modal({ isOpen, setIsOpen, data }: ModalProps) {

   useEffect(() => {
     
   }, [data?.id])
   
    
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        <div
          className="absolute inset-0 bg-black/90"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-[500px] relative"
          >
             <RxCross2 className="absolute top-0 right-0 m-2 cursor-pointer" onClick={() => setIsOpen(false)} />
            <div className="space-y-4">
              {data ? (
                <>
                  <h2 className="text-xl text-black">{data.name}</h2>
                  <p className="text-black">Email: {data.email}</p>
                  <p className="text-black">Contact: {data.phone}</p>
                  <p className="text-black">Website: {data.website}</p>
                  {data.address && (
                    <p className="text-black">
                      Address: {data.address.street}, {data.address.city},{" "}
                      {data.address.zipcode}
                    </p>
                  )}
                  {data.company?.name && (
                    <p className="text-black">Company: {data.company.name}</p>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600 text-lg">Loading user details...</p>
                </div>
              )}
            </div>

           
          </motion.div>



        </div>
      </motion.div>
    </>
  );
}

export default Modal;
