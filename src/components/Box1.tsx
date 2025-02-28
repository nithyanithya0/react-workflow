import React, { useState, useEffect } from "react";
import CustomIcon from "./CustomIcon";
import UpdatedBookIcon from "./UpdatedBookIcon";
import CompanyIcon from "./CompanyIcon";
import InIcon from "./InIcon";
import SixDotIcon from "./SixDotIcon";
import { FaRegBell, FaPlus, FaWhatsapp } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";

const Box1: React.FC = () => {
  const [showLine, setShowLine] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  // Handle animation sequence
  useEffect(() => {
    if (showPanel) {
      setShowLine(true); // Ensure line is visible when panel opens
    }
  }, [showPanel]);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".box-container")) {
        setShowPanel(false);
        setShowLine(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="box-container mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none cursor-pointer"
      onClick={() => setShowLine(true)} // 🔹 Clicking Box1 shows the line but NOT the panel
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <CustomIcon />
          </div>
          <h3 className="text-lg font-semibold">Welcome to Tesla</h3>
        </div>
        <UpdatedBookIcon />
      </div>

      {/* Content */}
      <div className="mt-3 space-y-3">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
          <div className="flex items-center gap-2">
            <CompanyIcon />
            <span className="text-black-100 font-small">Company Information</span>
          </div>
          <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
            <InIcon />
            Visual Intro
          </button>
        </div>
      </div>

      <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
        <SixDotIcon />
      </div>

      {/* 🔔 Notification Button (Now Always Visible) */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents Box1 click event
          setShowPanel(!showPanel);
        }}
        className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
          showPanel ? "bg-[#00BC7D]" : "bg-gray-400"
        } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-10`}
      >
        <FaRegBell className="text-xl" />
        <div
          className={`absolute top-2.5 right-2 ${
            showPanel ? "bg-[#00BC7D]" : "bg-gray-400"
          } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}
        >
          <FaPlus className="text-[8px]" />
        </div>
      </button>

      {/* Animated Elements */}
      <>
        {/* Horizontal Dotted Line Animation */}
        <div
          className={`absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-500 ease-in-out ${
            showLine ? "w-[3rem]" : "w-0"
          }`}
        ></div>

        {/* Notification Panel */}
        {showPanel && (
          <div
            className={`absolute top-1/2 right-[1rem] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-100`}
            onClick={(e) => e.stopPropagation()} // 🔹 Prevents click inside panel from closing it
          >
            <NotificationPanel />
          </div>
        )}
      </>
    </div>
  );
};

export default Box1;
