import React from "react";
import LevelCard from "../common/LevelCard";
import { useNavigate } from "react-router-dom";

import { useCurrentLevelUpdate, useLevelList } from "../../contex/LevelContex";

function ChooseLevel() {
  const levelsList = useLevelList();
  const currentLevelUpdate = useCurrentLevelUpdate();
  const navigate = useNavigate();
  const playLevel = (level) => {
    currentLevelUpdate(level);
    navigate("/game");
  };
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center p-4">
      {levelsList.map((level, index) => {
        return (
          <LevelCard
            key={level.level}
            {...level}
            onClick={() => playLevel(level.level)}
          />
        );
      })}
    </div>
  );
}

export default ChooseLevel;
