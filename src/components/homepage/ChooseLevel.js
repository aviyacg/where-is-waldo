import React from "react";
import LevelCard from "../common/LevelCard";
import { useNavigate } from "react-router-dom";
import { useCurrentLevelIdUpdate, levelList } from "../../contex/LevelContex";

function ChooseLevel() {
  const currentLevelIdUpdate = useCurrentLevelIdUpdate();
  const navigate = useNavigate();
  const playLevel = (levelId) => {
    currentLevelIdUpdate(levelId);
    navigate("/game");
  };
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center p-4">
      {levelList.map((level) => {
        return (
          <LevelCard
            key={level.id}
            {...level}
            onClick={() => playLevel(level.id)}
          />
        );
      })}
    </div>
  );
}

export default ChooseLevel;
