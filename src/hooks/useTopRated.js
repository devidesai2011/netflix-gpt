import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

// Fetching the now playing movies from TMDB API and storing it in Redux store
const useTopRated = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    };

    useEffect(() => {
        if (!topRatedMovies || topRatedMovies.length === 0) {
            getTopRatedMovies();
        }
    }, []);
};

export default useTopRated;