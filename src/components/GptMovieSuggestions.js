import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const gptData = useSelector((state) => state.gpt);
    const { movieNames, movieResult } = gptData;

    if (!movieNames) {
        return null;
    }

    return (
        <div className="bg-black bg-opacity-40 min-h-screen pt-8">
            {/* Header Section */}
            <div className="px-6 mb-8">
                <h1 className='text-white text-3xl md:text-4xl font-bold text-center mb-2'>
                    🎬 GPT Movie Recommendations
                </h1>
                <p className="text-gray-300 text-center text-lg">
                    AI-powered suggestions based on your search
                </p>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Movie Lists Container */}
            <div className='px-4 space-y-8'>
                {movieNames.map((movie, index) => (
                    <div key={index} className="mb-8">
                        <MovieList
                            title={`✨ ${movie.trim()}`}
                            movies={movieResult[index]}
                        />
                    </div>
                ))}
            </div>

            {/* Footer Spacing */}
            <div className="h-16"></div>
        </div>
    )
}

export default GptMovieSuggestions