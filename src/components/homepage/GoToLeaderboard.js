import React from "react";
import CustomButton from "../common/CustomButton";
import { useNavigate } from "react-router-dom";

function GoToLeaderboard() {
  const navigate = useNavigate();
  return (
    <div className="w-10/12 mx-auto flex justify-around p-4 border border-gray-300 rounded-lg shadow">
      <div className="logo-text  md:text-6xl sm:text-4xl font-black">
        <span className="text-blue-600">Are you the </span>
        <span className="text-red-600"> Best?</span>
      </div>
      <CustomButton
        styleClass="primary"
        text="Leaderboard"
        onClick={() => navigate("/leaderboard")}
      />
    </div>
  );
}

export default GoToLeaderboard;
