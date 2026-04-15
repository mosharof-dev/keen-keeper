"use client";

import { useTimeline } from "@/Context/ProviderContext";
import { useState } from "react";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const getIcon = (type) => {
  if (type === 'Call') return <FiPhone className="text-blue-500" size={20} />;
  if (type === 'Text') return <FiMessageSquare className="text-green-500" size={20} />;
  if (type === 'Video') return <FiVideo className="text-purple-500" size={20} />;
  return null;
};


const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',    
    day: 'numeric',    
    year: 'numeric',   
    hour: 'numeric',   
    minute: '2-digit',
    hour12: true      
  });
};

export default function TimelinePage() {
  const { interactions } = useTimeline();
 const [filterType, setFilterType] = useState("All");
 

  const filteredInteractions = interactions.filter((item) => {
    if (filterType === "All") return true; 
    return item.type === filterType;      
  });

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold text-[#1a4a38] mb-6">Timeline</h1>
      
<div className="flex justify-between items-center mb-6">
  {/* DaisyUI Premium Dropdown */}
<div className="dropdown dropdown-end">

  <div 
    tabIndex={0} 
    role="button" 
    className="btn bg-white border border-gray-200 hover:border-[#1a4a38] hover:bg-white text-gray-700 font-normal rounded-lg px-6 flex items-center gap-2 min-w-40 justify-between"
  >
    {/* Current selected item  */}
    {filterType === "All" ? "Filter timeline" : filterType}
    
    {/* Dropdown Arrow Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  </div>

  {/* Dropdown Menu  */}
  <ul 
    tabIndex={0} 
    
    className="dropdown-content z-50 menu p-2 shadow-lg bg-white border border-gray-100 rounded-xl w-48 mt-2 translate-x-8 sm:translate-x-0"
  >
    {/* All Interactions */}
    <li onClick={() => { setFilterType("All"); document.activeElement.blur(); }}>
      <a className={filterType === "All" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>
        All Interactions
      </a>
    </li>
    
    {/* Call */}
    <li onClick={() => { setFilterType("Call"); document.activeElement.blur(); }}>
      <a className={filterType === "Call" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>
        Call
      </a>
    </li>
    
    {/* Text */}
    <li onClick={() => { setFilterType("Text"); document.activeElement.blur(); }}>
      <a className={filterType === "Text" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>
        Text
      </a>
    </li>
    
    {/* Video */}
    <li onClick={() => { setFilterType("Video"); document.activeElement.blur(); }}>
      <a className={filterType === "Video" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>
        Video
      </a>
    </li>
  </ul>
</div>
</div>
      {interactions.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500">No interactions yet.</p>
        </div>
      ) : (
       
        <div className="flex flex-col gap-4">
          
          {filteredInteractions.map((item) => (
          
            <div 
              key={item.id} 
              className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Icon */}
              <div className="p-3 bg-gray-50 rounded-full border border-gray-100">
                {getIcon(item.type)}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {item.type} <span className="text-gray-500 font-normal">with {item.friendDetails?.name}</span>
                </h3>
              
                <p className="text-sm text-gray-400 mt-1">
                  {formatDateTime(item.date)}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}