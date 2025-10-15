import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import useGPTSearchBar from '../hooks/useGPTSearchBar';
import React, { useRef } from 'react'

const GptSearchBar = () => {
    const { handleGPTSearchClick } = useGPTSearchBar();
    const langKey = useSelector((state) => state.config.lang);
    const isLoading = useSelector((state) => state.gpt.isLoading);
    const selectedLanguage = lang[langKey];
    const searchText = useRef('');

    const handleSearchClick = async () => {
        await handleGPTSearchClick(searchText);
    }

    // const fetchMoviesByName = async (movieName) => {
    //     // Call TMDB API to fetch movie details by name
    //     const response = await fetch('https://api.themoviedb.org/3/search/movie?query="' + movieName + '"&include_adult=false&language=en-US&page=1', API_OPTIONS);
    //     const data = await response.json();
    //     return data.results;
    // }

    // const handleGPTSearchClick = async () => {
    //     // Logic to handle GPT search click
    //     dispatch(setIsLoading(true));
    //     // MAke an API call to GPT and get movie reults.
    //     // const gptResults = await client.chat.completions.create({
    //     //     model: 'gpt-4o',
    //     //     messages: [
    //     //         { role: 'developer', content: 'Talk like a pirate.' },
    //     //         { role: 'user', content: 'Are semicolons optional in JavaScript?' },
    //     //     ],
    //     // });
    //     // console.log(gptResults.choices[0].message.content);
    //     const gptQuery = "Act as a movie recommendation engine. Based on the following user input, give five movies name comma separated. User input: " + searchText.current.value + "Give me movies in comma separated format. Eg Gadar, Sholay, Don, Shershah, Dangal";
    //     const response = await geminiApi.models.generateContent({
    //         model: 'gemini-2.0-flash-001',
    //         contents: gptQuery,
    //     });
    //     console.log(response.text);
    //     if (!response.text) {
    //         console.error("No response from Gemini API");
    //         return;
    //     } else {
    //         // Andaz Apna Apna, Chupke Chupke, Gol Maal, Padosan, Bawarchi
    //         const movieNames = response.text.split(',');
    //         // For each movie search for the TMDB api and get movie details.
    //         const promiseArray = movieNames.map(movieName => fetchMoviesByName(movieName));
    //         const tmdbSearchResults = await Promise.all(promiseArray);

    //         // console.log(tmdbSearchResults); // This will be an array of arrays containing movie details 
    //         dispatch(addGptMovieResults({ movieNames, movieResult: tmdbSearchResults }));
    //         dispatch(setIsLoading(false));
    //     }
    // }

    return (
        <div>
            <div className='pt-[10%] flex justify-center'>
                <form className='w-full max-w-4xl mx-4' onSubmit={(e) => e.preventDefault()}>
                    <div className='bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-gray-700'>
                        <div className='grid grid-cols-12 gap-4 items-center'>
                            <input
                                ref={searchText}
                                type="text"
                                className="col-span-9 p-4 text-lg bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                placeholder={selectedLanguage?.placeHolder}
                            />
                            <button
                                type="submit"
                                className="col-span-3 py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                                onClick={handleSearchClick}
                            >
                                {selectedLanguage?.search}
                            </button>
                        </div>
                    </div>
                </form>

                {isLoading && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
                            <p className="text-white text-lg font-semibold">Searching for movies...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GptSearchBar