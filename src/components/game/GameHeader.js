import React from "react";
import CharactersBar from "../common/CharactersBar";
import Logo from "../common/Logo";
import Timer from "./Timer";

function GameHeader({ characterList, elapsedTime }) {
  return (
    <div className="bg-white px-4 pt-4 shadow flex justify-between items-center sticky top-0 z-20">
      <CharactersBar {...{ characterList, shouldDisplayName: true }} />
      <Timer {...{ elapsedTime }} />
      <Logo />
    </div>
  );
}

export default GameHeader;
