import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((state) => state.config.lang);
    const selectedLanguage = lang[langKey];

    return (
        <div>
            <div className='pt-[10%] flex justify-center'>
                <form className='w-full max-w-4xl mx-4'>
                    <div className='bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-gray-700'>
                        <div className='grid grid-cols-12 gap-4 items-center'>
                            <input
                                type="text"
                                className="col-span-9 p-4 text-lg bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                placeholder={selectedLanguage?.placeHolder}
                            />
                            <button
                                type="submit"
                                className="col-span-3 py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                            >
                                {selectedLanguage?.search}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar