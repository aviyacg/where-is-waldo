function Photo({ image, handleClick }) {
  return (
    <img
      className=" m-auto border-8 border-blue-600 cursor-stick"
      src={image}
      alt="where's waldo"
      onClick={handleClick}
    />
  );
}

export default Photo;
