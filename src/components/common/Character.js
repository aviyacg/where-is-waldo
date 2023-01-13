import React from "react";
import PropTypes from "prop-types";

function Character({ image, name, isFound }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className={"max-h-9" + (isFound ? " grayscale" : "")}
        src={image}
        alt="character"
      />
      <div
        className={
          "font-sans text-sm font-semibold" +
          (isFound ? " text-gray-600" : " text-gray-900")
        }
      >
        {name}
      </div>
    </div>
  );
}

Character.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string,
};

export default Character;
