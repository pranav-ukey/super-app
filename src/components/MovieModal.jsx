const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/80
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-[#1E1E1E]
          rounded-2xl
          w-[700px]
          overflow-hidden
        "
      >
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-white">
              {movie.title}
            </h2>

            <button
              onClick={onClose}
              className="
                text-white
                text-3xl
                leading-none
              "
            >
              ×
            </button>
          </div>

          <div className="flex gap-8 mt-4 text-gray-300">
            <p>
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p>
              📅 {movie.release_date}
            </p>

            <p>
              🌐 {movie.original_language.toUpperCase()}
            </p>
          </div>

          <p
            className="
              text-gray-200
              mt-6
              leading-7
            "
          >
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;