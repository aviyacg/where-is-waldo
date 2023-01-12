function SelectCharacter({ clickPosition, characterList, tagCharacter }) {
  return (
    <div
      className="absolute flex flex-col rounded-md border border-gray-900"
      style={clickPosition}
    >
      {characterList.map((character) =>
        !character.isFound ? (
          <button
            className={
              "bg-gray-50 hover:bg-gray-100 cursor-pointer text-lg text-gray-900 p-2 border border-gray-600 rounded-none"
            }
            key={character.name}
            onClick={() => tagCharacter(character.name)}
          >
            {character.name}
          </button>
        ) : undefined
      )}
    </div>
  );
}

export default SelectCharacter;
