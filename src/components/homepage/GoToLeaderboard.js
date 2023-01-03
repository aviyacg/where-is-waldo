import React from "react";
import CustomButton from "../common/CustomButton";
import { redirect } from "react-router-dom";

function GoToLeaderboard() {
  return (
    <div className="w-10/12 mx-auto flex justify-around p-4 border border-gray-300 rounded-lg shadow">
      <div className="logo-text text-6xl font-black">
        <span className="text-blue-600">Are you the </span>
        <span className="text-red-600"> Best?</span>
      </div>
      <CustomButton
        styleClass="primary"
        text="Leaderboard"
        onClick={() => redirect("/leaderboard")}
      />
    </div>
  );
}

export default GoToLeaderboard;
