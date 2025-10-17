
import geminiApi from '../utils/geminiAI';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/store/gptSlice';
import { setIsLoading } from '../utils/store/gptSlice';

const useGPTSearchBar = (searchText) => {
    const dispatch = useDispatch();
    const fetchMoviesByName = async (movieName) => {
        // Call TMDB API to fetch movie details by name
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query="' + movieName + '"&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        return data.results;
    }

    const handleGPTSearchClick = async (searchText) => {
        // Logic to handle GPT search click
        dispatch(setIsLoading(true));
        // MAke an API call to GPT and get movie reults.
        // const gptResults = await client.chat.completions.create({
        //     model: 'gpt-4o',
        //     messages: [
        //         { role: 'developer', content: 'Talk like a pirate.' },
        //         { role: 'user', content: 'Are semicolons optional in JavaScript?' },
        //     ],
        // });
        // console.log(gptResults.choices[0].message.content);
        const gptQuery = "Act as a movie recommendation engine. Based on the following user input, give five movies name comma separated. User input: " + searchText.current.value + "Give me movies in comma separated format. Eg Gadar, Sholay, Don, Shershah, Dangal";
        const response = await geminiApi.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: gptQuery,
        });
        console.log(response.text);
        if (!response.text) {
            console.error("No response from Gemini API");
            return;
        } else {
            // Andaz Apna Apna, Chupke Chupke, Gol Maal, Padosan, Bawarchi
            const movieNames = response.text.split(',');
            // For each movie search for the TMDB api and get movie details.
            const promiseArray = movieNames.map(movieName => fetchMoviesByName(movieName));
            const tmdbSearchResults = await Promise.all(promiseArray);

            // console.log(tmdbSearchResults); // This will be an array of arrays containing movie details 
            dispatch(addGptMovieResults({ movieNames, movieResult: tmdbSearchResults }));
            dispatch(setIsLoading(false));
        }
    }

    return {
        handleGPTSearchClick
    }
}

export default useGPTSearchBar;