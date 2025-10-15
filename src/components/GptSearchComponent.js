import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_SIGNIN_PAGE_IMAGE_URL } from '../utils/constants';

const GptSearchComponent = () => {
    return (
        <div className="min-h-screen relative">
            {/* Background Image - Lower z-index */}
            <div className="absolute inset-0 z-0">
                <img
                    src={NETFLIX_SIGNIN_PAGE_IMAGE_URL}
                    alt="Netflix background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content - Higher z-index */}
            <div className="relative z-10">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </div>
    )
}

export default GptSearchComponent