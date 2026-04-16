import StatsClient from "@/Client/StatsClient";



export const metadata = {
  title: "  KeenKeeper | Stats",
  description: "Analyze your friendship interactions with charts.",
};

// 2. Page render 
export default function StatsPage() {
  return (
    
    <StatsClient/>
  );
}