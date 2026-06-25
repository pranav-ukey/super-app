const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      onClick={() => onClick(movie)}
      className="
        w-[250px]
        h-[130px]
        flex-shrink-0
        rounded-lg
        overflow-hidden
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;