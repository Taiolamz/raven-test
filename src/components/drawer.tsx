import React from "react";
import { cn } from "../lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: string; 
  className?: string; 
  backdropClassName?: string; 
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  height = "h-[60%]",
  className = "",
  backdropClassName = "",
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          backdropClassName
        )}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={cn(
          "fixed bottom-0 left-0 w-full bg-[#262932] overflow-y-auto hidden-scrollbar rounded-t-[16px] shadow-lg transition-transform duration-300",
          isOpen ? "translate-y-0" : "translate-y-full",
          height,
          className
        )}
      >
    
        {/* <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div> */}
        {/* Drawer Content */}
        <div className="px-4 py-2">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
