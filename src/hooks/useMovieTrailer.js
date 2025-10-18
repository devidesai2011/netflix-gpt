import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // Use useCallback to memoize the function and prevent unnecessary re-renders
    const getTrailer = useCallback(async () => {
        if (!movieId) return; // Don't fetch if movieId is not available
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const jsonData = await data.json();
        let trailer = jsonData.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (!trailer) {
            trailer = jsonData.results[0];
        }
        dispatch(addTrailerVideo(trailer));
        // This trailer will have a youtube video key
        // Every youtube video has a key.
    }, [movieId, dispatch]);

    useEffect(() => {
        if (movieId) {
            // Clear previous trailer and fetch new one for each movie
            dispatch(addTrailerVideo(null));
            getTrailer();
        }
    }, [movieId, getTrailer, dispatch]);
}

export default useMovieTrailer;