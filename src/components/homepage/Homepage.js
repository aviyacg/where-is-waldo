import React from "react";
import Header from "../common/Header";
import ChooseLevel from "./ChooseLevel";
import GoToLeaderboard from "./GoToLeaderboard";

function Homepage() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <ChooseLevel />
      <GoToLeaderboard />
    </div>
  );
}

export default Homepage;
