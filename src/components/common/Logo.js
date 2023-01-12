import React from "react";
import waldo_logo from "../../assets/images/waldo-logo.jpg";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  const gotoHomepage = () => navigate("/");
  return (
    <div
      className="bg-white h-20 w-fit flex items-center hover:cursor-pointer"
      onClick={gotoHomepage}
    >
      <img
        className="h-full hover:animate-bounce"
        src={waldo_logo}
        alt="logo"
      />
      <div className="logo-text text-7xl font-black">
        <span className="text-blue-600">Where's </span>
        <span className="text-red-600"> Waldo</span>
      </div>
    </div>
  );
}

export default Logo;
