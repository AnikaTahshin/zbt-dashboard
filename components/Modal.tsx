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
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative h-full flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-[500px] relative border border-gray-100"
          >
             <motion.div
               initial={{ scale: 0, opacity: 0, rotate: -180 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               exit={{ scale: 0, opacity: 0, rotate: 180 }}
               transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
               whileHover={{ 
                 scale: 1.1, 
                 rotate: 90,
                 backgroundColor: "rgba(239, 68, 68, 0.1)"
               }}
               whileTap={{ scale: 0.9 }}
               className="absolute top-4 right-4 z-10"
             >
               <motion.button
                 onClick={() => setIsOpen(false)}
                 className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center cursor-pointer transition-all duration-300 border border-gray-200 hover:border-red-200 shadow-sm hover:shadow-md"
                 whileHover={{ 
                   boxShadow: "0 4px 12px rgba(239, 68, 68, 0.2)",
                   borderColor: "#fecaca"
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <motion.div
                   animate={{ rotate: 0 }}
                   whileHover={{ rotate: 90 }}
                   transition={{ duration: 0.2 }}
                 >
                   <RxCross2 
                     className="text-gray-600 hover:text-red-500 transition-colors duration-200" 
                     size={18}
                   />
                 </motion.div>
               </motion.button>
             </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {data ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="space-y-3"
                >
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {data.name}
                  </motion.h2>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <p className="text-gray-700 flex items-center">
                      <span className="font-semibold text-gray-900 w-20">Email:</span> 
                      {data.email}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <span className="font-semibold text-gray-900 w-20">Phone:</span> 
                      {data.phone}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <span className="font-semibold text-gray-900 w-20">Website:</span> 
                      {data.website}
                    </p>
                    {data.address && (
                      <p className="text-gray-700 flex items-start">
                        <span className="font-semibold text-gray-900 w-20 mt-1">Address:</span> 
                        <span>
                          {data.address.street}, {data.address.city}, {data.address.zipcode}
                        </span>
                      </p>
                    )}
                    {data.company?.name && (
                      <p className="text-gray-700 flex items-center">
                        <span className="font-semibold text-gray-900 w-20">Company:</span> 
                        {data.company.name}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.p 
                    className="text-gray-600 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Loading user details...
                  </motion.p>
                </motion.div>
              )}
            </motion.div>

           
          </motion.div>



        </div>
      </motion.div>
    </>
  );
}

export default Modal;
