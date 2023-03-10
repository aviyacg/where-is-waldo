import React from "react";
import PropTypes from "prop-types";
import Character from "./Character";

import waldo from "../../assets/images/waldo.jpg";
import odlaw from "../../assets/images/odlaw.jpg";
import wenda from "../../assets/images/wenda.jpg";
import wizard from "../../assets/images/wizard.jpg";

function CharactersBar({ characterList, shouldDisplayName }) {
  const imageMap = {
    waldo: waldo,
    odlaw: odlaw,
    wenda: wenda,
    wizard: wizard,
  };
  return (
    <div className="flex flex-row justify-around items-center gap-2">
      {characterList.map((character, index) => {
        return (
          <Character
            key={index}
            image={imageMap[character.name || character]}
            name={shouldDisplayName ? character.name || character : undefined}
            isFound={character.isFound || false}
          />
        );
      })}
    </div>
  );
}

CharactersBar.propTypes = {
  characterList: PropTypes.array,
  shouldDisplayName: PropTypes.bool,
};

export default CharactersBar;
