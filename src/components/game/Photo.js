function Photo({ image, handleClick }) {
  return (
    <img
      className="max-w-full"
      src={image}
      alt="where's waldo"
      onClick={handleClick}
    />
  );
}

export default Photo;
