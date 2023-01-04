import React, { useContext, useState } from "react";

// Images for the levels
import level2IMG from "../assets/images/ski-slopes.jpg";
import level1IMG from "../assets/images/cake-factory.jpg";
import level3IMG from "../assets/images/beach.jpg";

// Create context objects for the current level and its update function
const CurrentLevelContext = React.createContext();
const CurrentLevelUpdateContext = React.createContext();

// Custom Hook for consuming the current level context
export function useCurrentLevel() {
  return useContext(CurrentLevelContext);
}

// Custom Hook for consuming the current level update context
export function useCurrentLevelUpdate() {
  return useContext(CurrentLevelUpdateContext);
}

// Provider for the current level context and its update function
export function CurrentLevelProvider({ children }) {
  const [currentLevel, setCurrentLevel] = useState(null);
  return (
    <CurrentLevelContext.Provider value={currentLevel}>
      <CurrentLevelUpdateContext.Provider value={setCurrentLevel}>
        {children}
      </CurrentLevelUpdateContext.Provider>
    </CurrentLevelContext.Provider>
  );
}

// Create context objects for the list of levels and its update function
const LevelsContext = React.createContext();
const LevelsUpdateContext = React.createContext();

// Initial list of levels
const levelList = [
  {
    level: 1,
    image: level1IMG,
    title: "The cake factory",
    characterList: ["waldo", "odlaw", "wenda"],
  },
  {
    level: 2,
    image: level2IMG,
    title: "The ski slopes",
    characterList: ["waldo", "odlaw", "wenda", "wizard"],
  },
  {
    level: 3,
    image: level3IMG,
    title: "The beach",
    characterList: ["waldo", "odlaw", "wenda", "wizard"],
  },
];

// Provider for the list of levels context and its update function
export function LevelListProvider({ children }) {
  const [levels, setLevels] = useState(levelList);
  return (
    <LevelsContext.Provider value={levels}>
      <LevelsUpdateContext.Provider value={setLevels}>
        {children}
      </LevelsUpdateContext.Provider>
    </LevelsContext.Provider>
  );
}

// Custom Hook for consuming the list of levels context
export function useLevelList() {
  return useContext(LevelsContext);
}

// Custom Hook for consuming the list of levels update context
export function useLevelListUpdate() {
  return useContext(LevelsUpdateContext);
}
