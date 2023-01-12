import React, { useContext, useState } from "react";

// Images for the levels
import level1IMG from "../assets/images/cake-factory.jpg";
import level2IMG from "../assets/images/ski-slopes.jpg";
import level3IMG from "../assets/images/beach.jpg";

// Create context objects for the current level and its update function
const CurrentLevelIdContext = React.createContext();
const CurrentLevelIdUpdateContext = React.createContext();

// Custom Hook for consuming the current level context
export function useCurrentLevelId() {
  return useContext(CurrentLevelIdContext);
}

// Custom Hook for consuming the current level update context
export function useCurrentLevelIdUpdate() {
  return useContext(CurrentLevelIdUpdateContext);
}

// Provider for the current level context and its update function
export function CurrentLevelProvider({ children }) {
  const [currentLevel, setCurrentLevel] = useState(null);
  return (
    <CurrentLevelIdContext.Provider value={currentLevel}>
      <CurrentLevelIdUpdateContext.Provider value={setCurrentLevel}>
        {children}
      </CurrentLevelIdUpdateContext.Provider>
    </CurrentLevelIdContext.Provider>
  );
}

// list of levels
export const levelList = [
  {
    id: 1,
    image: level1IMG,
    title: "The cake factory",
    characterList: ["waldo", "odlaw", "wenda"],
  },
  {
    id: 2,
    image: level2IMG,
    title: "The ski slopes",
    characterList: ["waldo", "odlaw", "wenda", "wizard"],
  },
  {
    id: 3,
    image: level3IMG,
    title: "The beach",
    characterList: ["waldo", "odlaw", "wenda", "wizard"],
  },
];

export function getCurrentLevel(levelId) {
  return levelList.find((level) => level.id === levelId) || null;
}
