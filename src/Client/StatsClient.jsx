
"use client"; 
import React from 'react';
import { useTimeline } from "@/Context/ProviderContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FiPieChart } from 'react-icons/fi'; 

export default function StatsClient() {
  // 1. Context  data 
  const { interactions } = useTimeline();

  // 2. Data Transformation 
  const callCount = interactions.filter(i => i.type === 'Call').length;
  const textCount = interactions.filter(i => i.type === 'Text').length;
  const videoCount = interactions.filter(i => i.type === 'Video').length;

 
 
  const chartData = [
    { name: 'Text', value: textCount, color: '#8b5cf6' }, // Purple
    { name: 'Call', value: callCount, color: '#1a4a38' }, // Dark Green 
    { name: 'Video', value: videoCount, color: '#22c55e' } // Light Green
  ].filter(item => item.value > 0); 

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-[#1a4a38] mb-8">Friendship Analytics</h1>

      {interactions.length === 0 ? (
  
        <div className="flex flex-col items-center justify-center p-16 bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200">
          <div className="bg-green-50 p-5 rounded-full mb-5">
            <FiPieChart className="text-[#1a4a38] text-4xl animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Not enough data yet</h3>
          <p className="text-gray-500 max-w-sm mx-auto text-center leading-relaxed">
            Start logging your calls, texts, and video chats on your friends` profiles to see your analytics here!
          </p>
        </div>
      ) : (
        //  The Donut Chart Section
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider">
            By Interaction Type
          </h3>

          {/*  Responsive Container*/}
          <div className="h-87.5 w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%" // Center X
                  cy="50%" // Center Y
                  innerRadius={90} 
                  outerRadius={130}
                  paddingAngle={5} 
                  dataKey="value"
                  stroke="none" 
                >
                 
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                
               
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                  }} 
                />
                
            
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle" 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}