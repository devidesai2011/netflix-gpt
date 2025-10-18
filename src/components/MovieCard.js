import { IMG_CDN_URL } from "../utils/constants"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieCard = ({ posterPath, movie }) => {
    const navigate = useNavigate();
    const playMovieView = useSelector((state) => state.config.playMovieView);
    if (!posterPath) {
        return null; // Don't render anything if posterPath is missing
    }
    const handleMovieItemClick = () => {
        // Navigate with movie ID as URL parameter and pass movie object in state
        if (!playMovieView && movie?.id) {
            console.log('Navigating to movie:', movie.id, movie.title || movie.name);
            navigate(`/playMovie/${movie.id}`, {
                state: { movie }
            });
        } else {
            console.log('Navigation blocked - playMovieView:', playMovieView, 'movieId:', movie?.id);
        }
    }
    return (
        <div className="w-20 h-20 sm:w-32 sm:h-auto md:w-36 lg:w-40 xl:w-44 flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-200">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="Movie Card"
                className="w-full h-full object-cover rounded-md shadow-lg"
                onClick={handleMovieItemClick}
            />
        </div>
    )
}

export default MovieCard