import React from "react";
import CustomIcon from "./CustomIcon";
import UpdatedBookIcon from "./UpdatedBookIcon";
import CompanyIcon from "./CompanyIcon";
import InIcon from "./InIcon";
import SixDotIcon from "./SixDotIcon";
import { FaRegBell, FaPlus } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";

interface BoxProps {
  showNotifications: boolean;
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}

const Box5: React.FC<BoxProps> = ({ showNotifications, setShowNotifications }) => {
  return (
    <div className="mt-10 p-5 bg-white border rounded-xl shadow-lg w-[500px] relative z-0 rounded-tl-none">
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <CustomIcon />
          </div>
          <h3 className="text-lg font-semibold">Extra Information</h3>
        </div>
        <UpdatedBookIcon />
      </div>
      <div className="mt-3 space-y-3">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border">
          <div className="flex items-center gap-2">
            <CompanyIcon />
            <span className="text-black-100 font-small">Extra Information</span>
          </div>
          <button className="px-3 py-0.5 border rounded-lg text-black-400 border-[#BEDBFF] flex items-center gap-2">
            <InIcon />
            More Details
          </button>
        </div>
      </div>
      <div className="absolute left-[-2.7rem] top-[1.4rem] transform -translate-y-1/2">
        <SixDotIcon />
      </div>
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className={`absolute right-[-3.3rem] top-1/2 transform -translate-y-1/2 ${
          showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
        } text-white px-4 py-3 rounded-l-lg rounded-r-full shadow-lg flex items-center justify-center z-[-1]`}
      >
        <FaRegBell className="text-xl" />
        <div
          className={`absolute top-2.5 right-2 ${
            showNotifications ? "bg-[#00BC7D]" : "bg-gray-400"
          } text-white p-1 rounded-full w-4 h-4 flex items-center justify-center`}
        >
          <FaPlus className="text-[8px]" />
        </div>
      </button>
      {showNotifications && (
        <div
          className="absolute top-1/2 right-[-6.3rem] transform translate-y-[-50%] border-t-4 border-purple-600 border-dashed transition-all duration-1000 ease-in-out"
          style={{ width: showNotifications ? "3rem" : "0" }}
        ></div>
      )}
      {showNotifications && <NotificationPanel />}
    </div>
  );
};

export default Box5;
