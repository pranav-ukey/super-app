import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMoviesByGenre } from "../services/movieApi";
import { useStore } from "../store/useStore";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import profile from "../assets/profile.png";
import logo from "../assets/super-app-logo.png";

const genreMap = {
  Action: 28,
  Drama: 18,
  Romance: 10749,
  Thriller: 53,
  Horror: 27,
  Fantasy: 14,
  Music: 10402,
  Western: 37,
  Fiction: 878,
};

const Movies = () => {
  const categories = useStore((state) => state.categories);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [moviesByCategory, setMoviesByCategory] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = {};

      try {
        for (const category of categories) {
          const genreId = genreMap[category.title];

          if (genreId) {
            const movies = await getMoviesByGenre(genreId);
            console.log(category.title, movies[0]);
            moviesData[category.title] = movies;
          }
        }

        setMoviesByCategory(moviesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [categories]);

  return (
    <div className="min-h-screen bg-black text-white px-10 py-8">
      <div className="flex justify-between items-start mb-10">
      <div>
        <img
          src={logo}
          alt="Super App"
          className="w-36"
        />

        <h2 className="text-white text-2xl mt-8 pl-10">
          Entertainment according to your choice
        </h2>
      </div>

      <img
        src={profile}
        alt="profile"
        onClick={() => navigate("/dashboard")}
        className="
          w-12
          h-12
          rounded-full
          object-cover
          cursor-pointer
        "
      />
    </div>

      {categories.map((category) => (
        <div key={category.id} className="mb-16">
          <h3 className="text-xl font-semibold mb-4">
            {category.title}
          </h3>

          <div
            className="
              flex
              gap-8
              overflow-x-auto
              overflow-y-hidden
              pb-2
              scrollbar-hide
              mt-3
              mb-3
            "
          >
            {(moviesByCategory[category.title] || []).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={{
                  ...movie,
                  poster: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                  backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                }}
                onClick={setSelectedMovie}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;