import React from "react";
import PropTypes from "prop-types";

function CustomButton({ styleClass, text, onClick }) {
  const styles = {
    primary: "bg-red-600 hover:bg-red-700 text-gray-50 border border-red-600",
    secondary:
      "bg-gray-50 hover:bg-gray-100 text-red-600 border border-red-600",
  };
  const style =
    "rounded-md px-5 py-2 text-2xl font-sans font-semibold cursor-pointer hover:shadow-md" +
    " " +
    styles[styleClass];

  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}

CustomButton.propTypes = {
  styleClass: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
