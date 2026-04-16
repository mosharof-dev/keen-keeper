"use client";

import { useTimeline } from "@/Context/ProviderContext";
import { useState } from "react";
import { FiPhone, FiMessageSquare, FiVideo, FiCoffee, FiSearch } from "react-icons/fi";

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

export default function TimelineClient() {
  const { interactions } = useTimeline();
  
  // 1. Notun States
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // newest ba oldest

  //  2. Filter, Search ar Sort er Combined Logic
  const processedInteractions = interactions
    .filter((item) => {
      // Prothome Dropdown Filter check 
      if (filterType === "All") return true; 
      return item.type === filterType;      
    })
    .filter((item) => {
      // Tarpor Search check 
      const searchLower = searchTerm.toLowerCase();
      const typeMatch = item.type.toLowerCase().includes(searchLower);
      const nameMatch = item.friendDetails?.name?.toLowerCase().includes(searchLower);
      return typeMatch || nameMatch;
    })
    .sort((a, b) => {
      
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-[#1a4a38] mb-6">Timeline</h1>
      
      {/* Top Bar: Search, Dropdown & Sort */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        
       

        <div className="flex w-full md:w-auto gap-3 items-center justify-between md:justify-end">
          {/* DaisyUI Premium Dropdown  */}
          <div className="dropdown dropdown-end">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn bg-white border border-gray-200 hover:border-[#1a4a38] hover:bg-white text-gray-700 font-normal rounded-lg px-4 flex items-center gap-2 min-w-35 justify-between h-10 min-h-10"
            >
              {filterType === "All" ? "All History" : filterType}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>

            <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow-lg bg-white border border-gray-100 rounded-xl w-48 mt-2 translate-x-8 sm:translate-x-0">
              <li onClick={() => { setFilterType("All"); document.activeElement.blur(); }}>
                <a className={filterType === "All" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>All History</a>
              </li>
              <li onClick={() => { setFilterType("Call"); document.activeElement.blur(); }}>
                <a className={filterType === "Call" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>Call History</a>
              </li>
              <li onClick={() => { setFilterType("Text"); document.activeElement.blur(); }}>
                <a className={filterType === "Text" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>Chat History</a>
              </li>
              <li onClick={() => { setFilterType("Video"); document.activeElement.blur(); }}>
                <a className={filterType === "Video" ? "text-[#1a4a38] font-bold bg-green-50" : "text-gray-600 hover:bg-gray-50"}>Video History</a>
              </li>
            </ul>
          </div>

            {/* Sort Dropdown (New) */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered select-sm h-10 border-gray-200 focus:outline-none focus:border-[#1a4a38] font-normal"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
         
        </div>
         {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1a4a38] text-sm"
          />
        </div>
      </div>

      {/* 📜 Content Area */}
      {interactions.length === 0 ? (
        /* Empty State  */
        <div className="flex flex-col items-center justify-center text-center p-16 bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200 mt-8">
          <div className="bg-green-50 p-5 rounded-full mb-5">
            <FiCoffee className="text-[#1a4a38] text-4xl animate-bounce" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">It`s quiet in here...</h3>
          <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
            Your timeline is waiting for some memories. Go to a friend` s profile and log a Call, Message, or Video check-in to get started!
          </p>
        </div>
      ) : processedInteractions.length === 0 ? (
        /* Search korar por jodi kichu na pay */
        <div className="text-center py-16 text-gray-500 bg-white rounded-2xl border border-gray-100">
          No interactions found matching your search or filter.
        </div>
      ) : (
        /* Cards Map */
        <div className="flex flex-col gap-4">
          {processedInteractions.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="p-3 bg-gray-50 rounded-full border border-gray-100">
                {getIcon(item.type)}
              </div>
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