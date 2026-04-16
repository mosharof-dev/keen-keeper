import Image from 'next/image';
import Link from 'next/link';


const getStatusColor = (status) => {
  switch (status) {
    case 'overdue':
      return 'bg-red-100 text-red-600';
    case 'almost due':
      return 'bg-yellow-100 text-yellow-700';
    case 'on-track':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function FriendCard({ friend }) {
  return (
   
    <Link href={`/${friend.id}`} className="block w-full">
<div className="flex flex-col items-center p-6 bg-white rounded-xl text-center cursor-pointer border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-green-400 hover:ring-8 hover:ring-green-200">
        
        {/* Profile Image */}
        <div className="w-16 h-16 relative mb-3">
          <Image
            src={friend.picture}
            alt={friend.name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Name & Days */}
        <h3 className="text-gray-900 font-semibold text-lg">{friend.name}</h3>
        <p className="text-gray-400 text-xs mb-3">{friend.days_since_contact}d ago</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <span className={`px-4 py-1 text-xs font-bold rounded-full capitalize ${getStatusColor(friend.status)}`}>
          {friend.status}
        </span>

      </div>
    </Link>
  );
}