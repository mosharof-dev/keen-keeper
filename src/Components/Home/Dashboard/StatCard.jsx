// src/Components/Dashboard/StatCard.jsx

import React from 'react';

const StatCard = ({ number, label }) => {
    return (
        <div className="bg-white p-6 rounded shadow-lg border border-gray-50 flex flex-col items-center justify-center text-center">
            
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