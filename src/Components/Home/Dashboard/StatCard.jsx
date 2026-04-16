// src/Components/Dashboard/StatCard.jsx

import React from 'react';

const StatCard = ({ number, label }) => {
    return (
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-[#1a4a38]/30 cursor-pointer">
            <span className="text-4xl sm:text-5xl font-semibold text-[#1A4D39]">
                {number}
            </span>
            <span className="text-sm font-medium text-gray-500 mt-2">
                {label}
            </span>
        </div>
    );
};

export default StatCard;
