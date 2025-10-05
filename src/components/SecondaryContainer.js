import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        movies && (
            <div className="bg-black ">
                {/* Content goes here

                    Movie list - Popular
                    Movie list - Now Playing
                    Movie list - Top Rated
                Movie list - Upcoming
            */}
                <div className="-mt-52 z-20 pl-12 relative">
                    <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                    <MovieList title="Popular movies" movies={movies.popularMovies} />
                    <MovieList title="Top Rated" movies={movies.topRatedMovies} />
                    <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
                </div>
            </div>)
    );
};

export default SecondaryContainer;