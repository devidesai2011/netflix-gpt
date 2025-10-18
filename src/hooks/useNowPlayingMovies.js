import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// Fetching the now playing movies from TMDB API and storing it in Redux store
const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
    };

    useEffect(() => {
        if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
            getNowPlayingMovies();
        }
    }, []);
};

export default useNowPlayingMovies;