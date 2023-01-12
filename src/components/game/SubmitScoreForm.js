import React, { useState } from "react";
import CustomButton from "../common/CustomButton";

function SubmitScoreForm({ title, elapsedTime, submitScore }) {
  const [name, setName] = useState();
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-50 rounded p-4 shadow flex flex-col justify-around gap-2 text-2xl">
        <div>{`You finished ${title} in ${elapsedTime} seconds!`}</div>
        <div>Submit your score:</div>
        <input
          className="border border-red-600 rounded p-1 placeholder:text-gray-500 focus-within:outline-red-600"
          type="text"
          placeholder="enter your name"
          onChange={(event) => setName(event.target.value)}
        />
        <div className="w-5/6 flex gap-4">
          <CustomButton
            styleClass="primary"
            text="Submit"
            onClick={() => submitScore(name || "secret someone")}
          />
          <CustomButton
            styleClass="secondary"
            text="Cancel"
            onClick={() => alert("canceled")}
          />
        </div>
      </div>
    </div>
  );
}

export default SubmitScoreForm;
