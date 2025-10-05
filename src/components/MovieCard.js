import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-40 md:w-48 flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-200">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="Movie Card"
                className="w-full h-auto rounded-md shadow-lg"
            />
        </div>
    )
}

export default MovieCard