import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCurrentLevelId,
  useCurrentLevelIdUpdate,
  getCurrentLevel,
} from "../../contex/LevelContex";
import { submitScore as submit } from "../../firebase/firestore";

import GameHeader from "./GameHeader";
import Photo from "./Photo";
import SelectCharacter from "./SelectCharacter";
import SubmitScoreForm from "./SubmitScoreForm";
import Loading from "../common/Loading";

function Game() {
  // custom context hooks
  const levelId = useCurrentLevelId();
  const levelIdUpdate = useCurrentLevelIdUpdate();

  const navigate = useNavigate();

  // get the current level id
  const level = getCurrentLevel(levelId);
  const { title, image } = level;

  // Declare a state variable to track the characters that has been tagged
  const [characterList, setCharacterList] = useState(
    level.characterList.map((character) => ({
      name: character,
      isFound: false,
    }))
  );

  // Declare a state variable for the elapsed time in seconds
  const [elapsedTime, setElapsedTime] = useState(0);

  // Declare a reference to the timer interval
  const intervalId = useRef(null);

  // Use the useEffect hook to create an interval that increments the elapsed time by 1 second
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setElapsedTime((elapsedTime) => elapsedTime + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId.current);
  }, []);

  // Declare a state variable for the click position
  const [clickPosition, setClickPosition] = useState(null);

  // Declare a state variable for the selectChararcters visible
  const [selectCharactersVisible, setSelectCharactersVisible] = useState(false);

  // This function handles click events on the Photo component
  function handleClick(e) {
    if (!selectCharactersVisible) {
      setClickPosition({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        top: e.nativeEvent.pageY,
        left: e.nativeEvent.pageX,
      });
    } else {
      setClickPosition(null);
    }
    // toggle selectChararcters visibility
    setSelectCharactersVisible(!selectCharactersVisible);
  }

  // This function tags a character if the click position is correct
  function tagCharacter(selectedCharacter) {
    if (
      clickPosition &&
      validateCharacterPosition(selectedCharacter, clickPosition)
    ) {
      const newCharacterList = [...characterList];
      newCharacterList.map((character) => {
        if (character.name === selectedCharacter) {
          character.isFound = true;
        }
        return character;
      });
      setCharacterList(newCharacterList);
      setClickPosition(null);
      setSelectCharactersVisible(false);
    }
  }

  // --------------------- TO DO --------------------
  // This function calls the server to check if the given position matches the selected character
  function validateCharacterPosition(character, position) {
    // TO DO
    return true;
  }

  // Declare a state variable to track whether game is over or not
  const [isGameOver, setIsGameOver] = useState(false);

  // This effect updates the isGameOver state when character list is updated
  useEffect(() => {
    if (characterList.every((character) => character.isFound)) {
      setIsGameOver(true);
    }
  }, [characterList]);

  // This effect stopes the timer when isGameOver is set to true
  useEffect(() => {
    if (isGameOver) {
      clearInterval(intervalId.current);
    }
  }, [isGameOver]);

  // // --------------------- TO DO --------------------
  // // This function submits the users name with the elapsed time and levelId to the server
  // async function submitScore(name) {
  //   submit(name, elapsedTime, levelId);
  // }

  return (
    <div className="p-4 relative">
      <GameHeader {...{ characterList, elapsedTime }} />
      <Photo {...{ image, handleClick }} />
      {selectCharactersVisible && (
        <SelectCharacter {...{ clickPosition, characterList, tagCharacter }} />
      )}
      {isGameOver && (
        <SubmitScoreForm {...{ title, elapsedTime, submit, levelId }} />
      )}
    </div>
  );
}

export default Game;
