import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // Fetch trailer video from TMDB API and update store with the trailer video key.
    const getTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const jsonData = await data.json();
        let trailer = jsonData.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (!trailer) {
            trailer = jsonData.results[0];
        }
        dispatch(addTrailerVideo(trailer));
        // This trailer will have a youtube video key
        // Every youtube video has a key.
    }

    useEffect(() => {
        getTrailer();
    }, []);
}

export default useMovieTrailer;