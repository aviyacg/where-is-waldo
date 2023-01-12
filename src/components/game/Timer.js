function Timer({ elapsedTime }) {
  // Calculate the elapsed time in minutes and seconds
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  // Format the elapsed time as mm:ss
  const elapsedTimeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Render the elapsed time in the mm:ss format
  return <div>{elapsedTimeFormatted}</div>;
}

export default Timer;
