import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// Fetching the now playing movies from TMDB API and storing it in Redux store
const useTopRated = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRated;