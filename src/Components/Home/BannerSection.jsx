// src/Components/Home/BannerSection.jsx

import React from 'react';
import { HiUserAdd } from 'react-icons/hi';
import StatCard from './Dashboard/StatCard';


const BannerSection = () => {
    // Stats data array- 
    const statsData = [
        { number: 10, label: "Total Friends" },
        { number: 3, label: "On Track" },
        { number: 6, label: "Need Attention" },
        { number: 12, label: "Interactions This Month" },
    ];

    return (
        // Main container padding for spacing aur centering
        <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-125">
            <div className="flex flex-col items-center text-center">
                
                {/* 1. Text Content Block */}
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-gray-950 leading-tight">
                        Friends to keep close in your life
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-gray-600">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.
                    </p>
                </div>

                {/* 2. CTA Button */}
                <div className="mt-10 mb-16">
                   
                    <button className="btn btn-md sm:btn-lg gap-2 bg-[#1A4D39] hover:bg-[#1A4D39]/90 text-white rounded-xl border-0">
                        <HiUserAdd className="w-5 h-5" />
                        Add a Friend
                    </button>
                </div>

                {/* 3. Stats Cards Grid: Core Responsive Logic */}
                <div className="w-full border-b border-gray-200 grid grid-cols-2 pb-10 md:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BannerSection;