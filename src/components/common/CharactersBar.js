import React from "react";
import PropTypes from "prop-types";
import Character from "./Character";

function CharactersBar({ characterList, shouldDisplayName }) {
  return (
    <div className="flex flex-row justify-around items-center">
      {characterList.map((character, index) => {
        return (
          <Character
            key={index}
            image={character.image}
            name={shouldDisplayName ? character.name : undefined}
          />
        );
      })}
    </div>
  );
}

CharactersBar.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
  shouldDisplayName: PropTypes.bool,
};

export default CharactersBar;
