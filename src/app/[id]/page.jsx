
import { getFriendById } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MdNotificationsPaused } from 'react-icons/md';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import QuickActions from '@/Components/Home/QuickActions';


// Helper: Status er color dynamically 
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'overdue': return 'bg-red-500 text-white';
    case 'almost due': return 'bg-yellow-400 text-white';
    case 'on-track': return 'bg-green-500 text-white';
    default: return 'bg-gray-200 text-gray-700';
  }
};


const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const metadata = {
  title: "Keen Keeper - Friend Details",

};

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;
  const friend = await getFriendById(id);
   
  if (!friend) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto my-8 rounded p-4 md:p-8 bg-[#F8FAFC] ">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          
          {/* Profile Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 relative mb-4">
              <Image 
                src={friend.picture} 
                alt={friend.name} 
                width={100}
                height={100}
                className="rounded-full object-cover border-4 border-gray-50"
              />
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-2">{friend.name}</h2>
            
            <span className={`px-4 py-1 rounded-full text-xs font-semibold mb-3 capitalize ${getStatusColor(friend.status)}`}>
              {friend.status}
            </span>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {friend.tags?.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic mb-4">{friend.bio}</p>
            <p className="text-xs text-gray-400">Preferred: {friend.email}</p>
          </div>

          {/* Action Buttons (Static for now) */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <MdNotificationsPaused size={16} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <HiArchiveBoxArrowDown size={16} /> Archive
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition">
              <RiDeleteBin5Line size={16} /> Delete
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Top 3 Stats Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#1a4a38] mb-1">{friend.days_since_contact}</span>
              <span className="text-sm text-gray-500">Days Since Contact</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#1a4a38] mb-1">{friend.goal}</span>
              <span className="text-sm text-gray-500">Goal (Days)</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#1a4a38] mb-1">{formatDate(friend.next_due_date)}</span>
              <span className="text-sm text-gray-500">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white h-41 p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className=" text-3xl font-semibold text-[#1a4a38] mb-2">Relationship Goal</h3>
              <p className="text-2xl text-gray-600">Connect every <strong className="text-gray-900">{friend.goal} days</strong></p>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition flex items-center gap-2">
              <BiEdit size={14} /> Edit
            </button>
          </div>

          {/* Quick Check-In Card (Later we will move this to a Client Component) */}
          {/* <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#1a4a38] mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <LuPhoneCall  className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <FcSms className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-100 rounded-xl hover:border-[#1a4a38] hover:bg-green-50/50 transition group">
                <FiVideo className="text-gray-600 group-hover:text-[#1a4a38]" size={28} />
                <span className="font-medium text-gray-700">Video</span>
              </button>
            </div>
          </div> */}
      <div >
         <QuickActions friendDetails={friend} />
      </div>

        </div>
      </div>

     
    </div>
  );
}