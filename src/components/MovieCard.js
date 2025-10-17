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
        !playMovieView && navigate(`/playMovie/${movie.id}`, {
            state: { movie }
        });
    }
    return (
        <div className="w-40 md:w-48 flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-200">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="Movie Card"
                className="w-full h-auto rounded-md shadow-lg"
                onClick={handleMovieItemClick}
            />
        </div>
    )
}

export default MovieCard