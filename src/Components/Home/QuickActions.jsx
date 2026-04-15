"use client";

import { useTimeline } from "@/Context/ProviderContext";
import { FcSms } from "react-icons/fc";


import {  FiVideo } from "react-icons/fi"; 
import { LuPhoneCall } from "react-icons/lu";
import { toast } from "react-toastify";

export default function QuickActions({ friendDetails }) {
  const { addInteraction } = useTimeline();

  const handleAction = (type) => {
    addInteraction(type, friendDetails);
    toast.success(`${type} logged with ${friendDetails.name}!`);
  };

return (
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#1a4a38] mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onClick={() => handleAction('Call')} className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <LuPhoneCall  className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Call</span>
                </button>
                <button onClick={() => handleAction('Text')} className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <FcSms className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Text</span>
                </button>
                <button onClick={() => handleAction('Video')}  className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <FiVideo className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Video</span>
                </button>
            </div>
            </div>
  );
}