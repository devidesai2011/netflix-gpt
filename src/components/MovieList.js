import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 overflow-hidden">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 pb-2">{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide movie-scroll-container space-x-2 sm:space-x-3 md:space-x-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    movies && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
                        ))
                    ) : (
                        <p className="text-white text-sm sm:text-base">No movies available</p>
                    )
                }
            </div>
        </div>

    )
}

export default MovieList