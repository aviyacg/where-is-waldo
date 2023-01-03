import React from "react";
import PropTypes from "prop-types";
import CharactersBar from "./CharactersBar";

function LevelCard({ image, title, characterList, onClick }) {
  return (
    <div
      className="max-w-sm flex flex-col p-0 border border-gray-300 rounded-lg cursor-pointer hover:shadow"
      onClick={onClick}
    >
      <img className="flex-grow" src={image} alt="preview" />
      <div className="flex flex-row justify-between items-center p-2">
        <div className="text-xl">{title}</div>
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
  title: PropTypes.string.isRequired,
  characterList: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func,
};

export default LevelCard;
