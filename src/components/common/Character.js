import React from "react";
import PropTypes from "prop-types";

function Character({ image, name }) {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <img className="max-h-8" src={image} alt="character" />
      <div className="font-sans text-black text-sm">{name || undefined}</div>
    </div>
  );
}

Character.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string,
};

export default Character;
