"use client"; 
import { createContext, useContext, useState } from "react";


const TimelineContext = createContext();

export const ProviderContext = ({ children }) => {
 
  const [interactions, setInteractions] = useState([]);

 
  const addInteraction = (type, friendDetails) => {
    
    const newInteraction = {
      id: Date.now(), 
      type: type, 
      friendDetails: friendDetails,
      date: new Date().toISOString(), 
    };

    setInteractions((prevInteractions) => [newInteraction, ...prevInteractions]);
  };

  
  const contextValue = {
    interactions, 
    addInteraction, 
  };

  
  return (
    <TimelineContext.Provider value={contextValue}>
      {children}
    </TimelineContext.Provider>
  );
};


export function useTimeline() {
  return useContext(TimelineContext);
}