import React from "react";
import PropTypes from "prop-types";

function Character({ image, name, isFound }) {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img
        className={"max-h-8" + (isFound ? " grayscale" : "")}
        src={image}
        alt="character"
      />
      <div
        className={
          "font-sans text-sm" + (isFound ? " text-gray-600" : " text-gray-900")
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
