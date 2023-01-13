import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";
import Loading from "../common/Loading";

function SubmitScoreForm({ title, elapsedTime, submit, levelId }) {
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      setError();
      setSubmitting(true);
      await submit(name, elapsedTime, levelId);
      navigate("/leaderboard");
    } catch (e) {
      console.log(e);
      setSubmitting(false);
      setError(e.message);
    }
  }
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-gray-50 rounded p-4 shadow flex flex-col justify-around gap-2 text-2xl">
        <div>{`You finished ${title} in ${elapsedTime} seconds!`}</div>
        <div>Submit your score:</div>
        <input
          className="border border-red-600 rounded p-1 placeholder:text-gray-500 focus-within:outline-red-600"
          type="text"
          placeholder="enter your name"
          onChange={(event) => setName(event.target.value)}
        />
        <div className="text-xl italic text-blue-600">{error}</div>
        {submitting && <Loading />}
        <div className="flex gap-4">
          <CustomButton
            styleClass="primary"
            text="Submit"
            onClick={handleSubmit}
          />
          <CustomButton
            styleClass="secondary"
            text="Back to homepage"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}

export default SubmitScoreForm;
