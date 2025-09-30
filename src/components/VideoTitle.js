// Add this to your public/index.html <head> for the font:
// <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-36 px-10">
            <h1
                className="text-[5rem] font-bold mb-4 text-left text-blue-900"
                style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    letterSpacing: "0.08em",
                    textShadow: "0 0 40px #FFF8C6, 0 0 8px #FFF8C6, 0 0 2px #FFF8C6, 60px 0 40px #FFF8C6, -60px 0 40px #FFF8C6"
                }}
            >
                {title}
            </h1>
            <p className="text-lg mb-8 text-left opacity-90 w-3/12">{overview}</p>
            <div className="flex gap-4 mt-4">
                <button type="button" className="flex items-center px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Play
                </button>
                <button type="button" className="flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="white">i</text></svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;