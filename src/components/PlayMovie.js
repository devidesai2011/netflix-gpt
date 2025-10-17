import React from 'react'
import Header from './Header';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const PlayMovie = () => {
    const { movieId } = useParams(); // Get movieId from URL
    const location = useLocation();
    const { movie } = location.state || {}; // Get movie data from navigation state

    useMovieTrailer(movieId);
    const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
    const movies = useSelector((store) => store.movies);
    if (!movies) {
        return <div>Loading...</div>; // or some loading indicator
    }

    return (
        <div>
            <div className="overflow-hidden relative h-screen">
                <Header />
                <div>
                    <iframe className="w-full aspect-video" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=kD8UqhJwmZ30b7dj&autoplay=1&mute=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>

                {/* Movie Information Section */}
                {movie && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                        <div className="relative group mb-4">
                            <h1 className="text-3xl md:text-5xl font-bold text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                                {movie.title || movie.name}
                            </h1>
                            {/* Tooltip showing overview on hover */}
                            <div className="absolute bottom-full left-0 mb-2 w-96 max-w-full bg-gray-900 border border-gray-700 text-white p-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                                <div className="text-sm text-gray-300 leading-relaxed">
                                    {movie.overview || "No overview available"}
                                </div>
                                {/* Arrow pointing down */}
                                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <span className="bg-yellow-600 px-2 py-1 rounded">
                                ⭐ {movie.vote_average?.toFixed(1)}
                            </span>
                            <span>{movie.release_date}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PlayMovie