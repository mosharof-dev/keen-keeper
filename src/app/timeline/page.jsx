import TimelineClient from "@/Client/TimelineClient";


export const metadata = {
  title: "KeenKeeper | Timeline  ",
  description: "View your relationship history and past interactions.",
};

// 2. Page render 
export default function TimelinePage() {
  return (
    
    <TimelineClient/>
  );
}

