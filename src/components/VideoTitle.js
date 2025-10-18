// Add this to your public/index.html <head> for the font:
// <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">

import { useState } from 'react';

const VideoTitle = ({ title, overview }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="pt-[25%] sm:pt-[22%] md:pt-[20%] lg:pt-[18%] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 absolute bg-gradient-to-r from-black to-transparent w-screen aspect-video">
            {/* Title Section - positioned above buttons */}
            <div className={`relative transition-all duration-500 ease-in-out ${isHovered ? 'mb-8 sm:mb-12 md:mb-16' : 'mb-4 sm:mb-5 md:mb-6'}`}>
                <div
                    className="cursor-pointer relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Title */}
                    <h1
                        className={`text-2xl sm:text-xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold text-left text-yellow-400 transition-all duration-500 ease-in-out ${isHovered ? 'transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8' : 'transform translate-y-0'
                            }`}
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            letterSpacing: "0.08em",
                            textShadow: "0 0 20px #FFF8C6, 0 0 8px #FFF8C6, 0 0 2px #FFF8C6, 30px 0 20px #FFF8C6, -30px 0 20px #FFF8C6"
                        }}
                    >
                        {title}
                    </h1>

                    {/* Paragraph - revealed when title moves up - Hidden on small devices */}
                    <div className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <p className="text-base text-left w-6/12 text-white mt-2 leading-normal">
                            {overview}
                        </p>
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button type="button" className="flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Play
                </button>
                <button type="button" className="flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="white">i</text></svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;