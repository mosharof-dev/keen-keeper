


export async function getAllFriends() {
  const res = await fetch('https://keen-keepe.vercel.app//friends.json', { cache: 'no-store' }); // dev mode  cache 
  if (!res.ok) {
    throw new Error('Failed to fetch friends data');
  }
  return res.json();
}


export async function getFriendById(id) {
  const friends = await getAllFriends();
 
  return friends.find((friend) => friend.id === parseInt(id)); 
}