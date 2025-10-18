import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

// Fetching the now playing movies from TMDB API and storing it in Redux store
const usePopularMovies = () => {

    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        if (!popularMovies || popularMovies.length === 0) {
            getPopularMovies();
        }
    }, []);
};

export default usePopularMovies;