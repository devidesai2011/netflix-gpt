import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-6 py-4 overflow-hidden">
            <h1 className="text-xl md:text-2xl font-semibold text-white mb-4 pb-2">{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide movie-scroll-container space-x-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    movies && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
                        ))
                    ) : (
                        <p className="text-white">No movies available</p>
                    )
                }
            </div>
        </div>

    )
}

export default MovieList