import React from "react";
import PropTypes from "prop-types";
import CharactersBar from "./CharactersBar";

function LevelCard({ image, level, characterList, onClick }) {
  return (
    <div className="flex felx-col p-0" onClick={onClick}>
      <img className="flex-grow" src={image} alt="preview" />
      <div className="flex flex-row justify-between p-2">
        <div className="text-xl">Level {level}</div>
        <CharactersBar
          characterList={characterList}
          shuoldDisplayName={false}
        />
      </div>
    </div>
  );
}

LevelCard.propTypes = {
  image: PropTypes.string,
  level: PropTypes.number.isRequired,
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

export default LevelCard;
