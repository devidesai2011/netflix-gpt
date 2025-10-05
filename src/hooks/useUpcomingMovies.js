import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// Fetching the now playing movies from TMDB API and storing it in Redux store
const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;