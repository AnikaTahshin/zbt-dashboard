import { motion } from "framer-motion";
import { User } from "@/types/type";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: User;
}
function Modal({ isOpen, setIsOpen, data }: ModalProps) {

   
    
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        <div
          className="absolute inset-0 bg-black/50"
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
              <h2 className="text-xl font-semibold">{data?.name}</h2>
              <p className="text-gray-600">{data?.email}</p>
              <p className="text-gray-600">{data?.phone}</p>
              <p className="text-gray-600">{data?.website}</p>
              {data?.address && (
                <p className="text-gray-600">
                  Address: {data?.address?.street}, {data.address.city},{" "}
                  {data.address.zipcode}
                </p>
              )}

              {data?.company?.name && (
                <p className="text-gray-600">Company: {data.company.name}</p>
              )}
              
            </div>

           
          </motion.div>



        </div>
      </motion.div>
    </>
  );
}

export default Modal;
