// NotificationPanel.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import CustomIcon from "./CustomIcon";
import UpdatedBookIcon from "./UpdatedBookIcon";
import InIcon from "./InIcon";

const NotificationPanel: React.FC = () => {
  return (
    <div className="w-[400px] H-[116] bg-white border rounded-xl shadow-lg p-3 absolute bottom-80 right-[-30rem]">
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

export default NotificationPanel;
