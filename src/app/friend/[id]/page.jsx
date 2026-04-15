
import { getFriendById } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function FriendDetailsPage({ params }) {

  const { id } = await params;
  const friend = await getFriendById(id);
   
  console.log(friend, "Hi Ami Friend Data");
  
  if (!friend) {
   notFound();
  }

  return (
   <div>
       <h1>Frien Details Comming Soon</h1>
   </div>
  );
}