import FriendCard from "./FriendCard";



const getFriendsData = async () => {
 
  const res = await fetch('http://localhost:3000/friends.json', { cache: 'no-store' }); // Disable cache for dev testing
  if (!res.ok) {
    throw new Error('Failed to fetch friends data');
  }
  return res.json();
};

export default async function FriendList() {
  const friends = await getFriendsData();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:6 lg:px-8 py-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6 px-4">Your Friends</h2>
      
      {/* Responsive Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}