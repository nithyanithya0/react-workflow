import React, { useState } from "react"; 
import { FaRegBell, FaPlus, FaBell, FaWhatsapp, FaTrash, FaEdit } from "react-icons/fa"; 
import { MdClose, MdNotificationsActive } from "react-icons/md"; 
import AddAnotherButton from "./AddAnotherButton"; // Import AddAnotherButton

// 📌 Custom Icon Component
const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-gray-800"
  >
    <rect x="7" y="3" width="10" height="1.5" rx="1" fill="currentColor" />
    <rect x="6" y="6" width="12" height="1.5" fill="currentColor" />
    <rect x="6" y="10" width="12" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// 📘 Updated Book Icon (For "Company Information" Sections)
const UpdatedBookIcon = () => (
  <div className="p-2 bg-blue-50 rounded-xl inline-flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-gray-800"
    >
      {/* Left Section */}
      <rect x="4" y="5" width="8" height="13" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Right Section */}
      <rect x="13" y="5" width="7" height="13" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Horizontal Lines (Text) */}
      <rect x="14.5" y="8" width="4" height="1.5" fill="currentColor" />
      <rect x="14.5" y="11" width="4" height="1.5" fill="currentColor" />
      <rect x="14.5" y="14" width="4" height="1.5" fill="currentColor" />
    </svg>
  </div>
);

const SixDotIcon = () => (
  <div className="p-2 bg-gray-100 rounded-l-xl inline-flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h- text-gray-800"
    >
      {/* Top Row */}
      <circle cx="7" cy="9" r="1.5" fill="currentColor" /> {/* Moved further down */}
      <circle cx="12" cy="9" r="1.5" fill="currentColor" /> {/* Moved further down */}
      <circle cx="17" cy="9" r="1.5" fill="currentColor" /> {/* Moved further down */}

      {/* Bottom Row */}
      <circle cx="7" cy="14" r="1.5" fill="currentColor" /> {/* Moved further down */}
      <circle cx="12" cy="14" r="1.5" fill="currentColor" /> {/* Moved further down */}
      <circle cx="17" cy="14" r="1.5" fill="currentColor" /> {/* Moved further down */}
    </svg>
  </div>
);

// Remove the incorrect export statement for SixDotIcon
// export default SixDotIcon;

// 📘 Company Icon Component
const CompanyIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6 text-blue-600" // Adjusted size
  >
    {/* Outer rounded rectangle */}
    <rect x="3" y="5" width="18" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>

    {/* Left-side lines (representing text) */}
    <line x1="6" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5"/> {/* Reduced size */}
    <line x1="6" y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth="1.5"/> {/* Reduced size */}
    <line x1="6" y1="17" x2="9" y2="17" stroke="currentColor" strokeWidth="1.5"/> {/* Reduced size */}

    {/* Right-side rectangle (representing a document or content block) */}
    <rect x="13" y="9" width="5" height="7" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// 📘 In Icon Component
const InIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    {/* Top Rectangular Bar */}
    <rect x="4" y="3" width="16" height="4" rx="1" fill="white" stroke="black" strokeWidth="1"/>
    
    {/* Left Large Rectangle */}
    <rect x="4" y="9" width="7" height="11" rx="1" fill="white" stroke="black" strokeWidth="1"/>
    
    {/* Right-Side Lines */}
    <rect x="13" y="10" width="7" height="2" rx="1" fill="currentColor"/>
    <rect x="13" y="14" width="7" height="2" rx="1" fill="currentColor"/>
    <rect x="13" y="18" width="7" height="2" rx="1" fill="currentColor"/>
  </svg>
)

// 📌 Main Workflow Editor Component
const WorkflowEditor: React.FC = () => {
  const [showNode, setShowNode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNewNotifications, setShowNewNotifications] = useState(false);
  const [showAnotherNotifications, setShowAnotherNotifications] = useState(false);
  const [showMoreNotifications, setShowMoreNotifications] = useState(false);
  const [showExtraNotifications, setShowExtraNotifications] = useState(false);
  const [boxes, setBoxes] = useState<{ id: number; content: string; details: string }[]>([]); // State to manage boxes

  const addBox = () => {
    setBoxes([...boxes, { id: boxes.length + 1, content: `New Box ${boxes.length + 1}`, details: "Node Information" }]);
  };

  const deleteBox = (index: number) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const editBox = (index: number, newContent: string, newDetails: string) => {
    const updatedBoxes = boxes.map((box, i) => (i === index ? { ...box, content: newContent, details: newDetails } : box));
    setBoxes(updatedBoxes);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 relative font-mulish">
      {/* 🟣 Start Button */}
      <button
        onClick={() => setShowNode(true)}
        className="mt-40 bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold relative z-10"
      >
        Start →
      </button>

      {/* 📍 Dotted Line Animation */}
      <div
        className={`absolute top-[200px] left-1/2 transform -translate-x-1/2 border-r-4 border-purple-600 border-dashed transition-all duration-1000 ${
          showNode ? "h-20" : "h-0"
        }`}
      ></div>

      {/* 🏠 Main Node (White Box) */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">Welcome to Tesla</h3>
            </div>
            <UpdatedBookIcon /> {/* ✅ New Book Icon */}
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span className="text-black-100 font-small">Company Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon /> {/* ✅ In Icon moved to the left side */}
                Visual Intro
              </button>
            </div>

            {/* 🔵 Second Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span className="text-black-400 font-small">Company Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
              <InIcon /> {/* ✅ In Icon moved to the left side */}
                Board Letter
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the white box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}

 

      {/* Add another box similar to the Main Node (White Box) and place it outside under the existing one */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold font-mulish">Additional Information</h3>
            </div>
            <UpdatedBookIcon /> {/* ✅ New Book Icon */}
          </div>

          {/* 📑 Information Sections */}
          <div class="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div class="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span class="text-black-100 font-small">Additional Information</span>
              </div>
              <button class="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon /> {/* ✅ In Icon moved to the left side */}
                More Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div class="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowNewNotifications(!showNewNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showNewNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showNewNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showNewNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showNewNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showNewNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showNewNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add another box similar to the new box and place it outside under the existing one */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">More Information</h3>
            </div>
            <UpdatedBookIcon /> {/* ✅ New Book Icon */}
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span className="text-black-100 font-small">More Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon /> {/* ✅ In Icon moved to the left side */}
                More Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowAnotherNotifications(!showAnotherNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showAnotherNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showAnotherNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showAnotherNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showAnotherNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showAnotherNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showAnotherNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add another box similar to the new box and place it outside under the existing one */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">More Information</h3>
            </div>
            <UpdatedBookIcon /> {/* ✅ New Book Icon */}
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span className="text-black-100 font-small">More Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon /> {/* ✅ In Icon moved to the left side */}
                More Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowMoreNotifications(!showMoreNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showMoreNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showMoreNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showMoreNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showMoreNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showMoreNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showMoreNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add another box similar to the new box and place it outside under the existing one */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">Extra Information</h3>
            </div>
            <UpdatedBookIcon /> {/* ✅ New Book Icon */}
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon /> {/* ✅ Updated Icon for "Company Information" */}
                <span className="text-black-100 font-small">Extra Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon /> {/* ✅ In Icon moved to the left side */}
                More Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowExtraNotifications(!showExtraNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showExtraNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showExtraNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showExtraNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showExtraNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showExtraNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showExtraNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add Node Box */}
      {showNode && (
        <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">Add Node</h3>
            </div>
            <UpdatedBookIcon />
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon />
                <span className="text-black-100 font-small">Node Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon />
                Add Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* 🔔 Notification Button */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
              showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
          >
            <FaRegBell className="text-xl" />
            <div className={`absolute top-2.5 right-2 ${
              showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
            } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}>
              <FaPlus className="text-[8px]" />
            </div>
          </button>

          {/* 📍 Horizontal Dotted Line Animation */}
          {showNotifications && (
            <div
              className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
              style={{ width: showNotifications ? "3rem" : "0" }}
            ></div>
          )}

          {/* 📌 Notification Panel */}
          {showNotifications && (
            <div
              className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem] transition-all duration-1000 ease-in-out"
              style={{ right: showNotifications ? "1rem" : "-30rem" }}
            >
              {/* 🔹 Header */}
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <CustomIcon className="text-gray-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
                </div>
                <button className="p-2 rounded-lg ">
                  <UpdatedBookIcon className="text-gray-500 text-xl" />
                </button>
              </div>
              {/* 📑 WhatsApp Reminder */}
              <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-xl" />
                  <span className="text-black font-medium">WhatsApp</span>
                </div>
                <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
                  <InIcon className="text-black-600" />
                  Remind
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Render additional boxes */}
      {boxes.map((box, index) => (
        <div key={index} className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
          {/* 🔹 Header Section */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 p-2 rounded-full">
                <CustomIcon />
              </div>
              <h3 className="text-lg font-semibold">{box.content}</h3>
            </div>
            <UpdatedBookIcon />
          </div>

          {/* 📑 Information Sections */}
          <div className="mt-3 space-y-3">
            {/* 🔵 First Information Block */}
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <CompanyIcon />
                <span className="text-black-100 font-small">Node Information</span>
              </div>
              <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
                <InIcon />
                Add Details
              </button>
            </div>
          </div>

          {/* Add SixDotIcon to the left side of the new box */}
          <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
            <SixDotIcon />
          </div>

          {/* Edit Box Button */}
          <button
            onClick={() => {
              const newContent = prompt("Edit box content:", box.content);
              if (newContent) {
                editBox(index, newContent);
              }
            }}
            className="absolute top-2 right-10 bg-blue-500 text-white p-2 rounded-full"
          >
            <FaEdit className="text-lg" />
          </button>

          {/* Delete Box Button */}
          <button
            onClick={() => deleteBox(index)}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          >
            <FaTrash className="text-lg" />
          </button>
        </div>
      ))}

      {/* Add Another Button */}
      <button
        onClick={addBox}
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2"
      >
        <FaPlus className="text-xl" />
        Add Another
      </button>
    </div>
  );
};

// 📌 Notification Panel Component
const NotificationPanel: React.FC = () => {
  return (
    <div className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem]">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-2 rounded-full">
            <CustomIcon className="text-gray-600 text-xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Reminder Message</h3>
        </div>
        <button className="p-2 rounded-lg ">
          <UpdatedBookIcon className="text-gray-500 text-xl" />
        </button>
      </div>
      {/* 📑 WhatsApp Reminder */}
      <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-600 text-xl" />
          <span className="text-black font-medium">WhatsApp</span>
        </div>
        <button className="px-3 py-1 border border-green-300 rounded-lg flex items-center gap-2 text-black-600 bg-white ">
          <InIcon className="text-black-600" />
          Remind
        </button>
      </div>
    </div>
  );
};

export default WorkflowEditor;
