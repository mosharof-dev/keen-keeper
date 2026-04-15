import BannerSection from "@/Components/Home/BannerSection";

import FriendPage from "./friend/page";
import FriendList from "@/Components/Home/Friend/FriendList";


export default function Home() {
  return (
   <div>
       <BannerSection/>
       <FriendList/>
      
   </div>
  );
}
