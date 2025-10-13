import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_SIGNIN_PAGE_IMAGE_URL } from '../utils/constants';

const GptSearchComponent = () => {
    return (
        <div>
            {/* GPT search bar
            <GptSearchBar />
                Gpt movie suggestions
            */}
            <div>
                <div className="absolute">
                    <img src={NETFLIX_SIGNIN_PAGE_IMAGE_URL} alt="Netflix background" />
                </div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>


        </div>
    )
}

export default GptSearchComponent