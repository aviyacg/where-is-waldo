import React from "react";
import LevelCard from "../common/LevelCard";

import level1IMG from "../../assets/images/cake-factory.jpg";
import level2IMG from "../../assets/images/ski-slopes.jpg";
import level3IMG from "../../assets/images/beach.jpg";

function ChooseLevel() {
  const levelsList = [
    {
      image: level1IMG,
      title: "The cake factory",
      characterList: ["waldo", "odlaw", "wenda"],
    },
    {
      image: level2IMG,
      title: "The ski slopes",
      characterList: ["waldo", "odlaw", "wenda", "wizard"],
    },
    {
      image: level3IMG,
      title: "The beach",
      characterList: ["waldo", "odlaw", "wenda", "wizard"],
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {levelsList.map((level, index) => {
        return <LevelCard key={index} {...level} />;
      })}
    </div>
  );
}

export default ChooseLevel;
