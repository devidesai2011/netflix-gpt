import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
    // Fetch trailer video from TMDB API and display it as background for this I need movie Id
    const getTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const jsonData = await data.json();
        console.log(jsonData);
        let trailer = jsonData.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (!trailer) {
            trailer = jsonData.results[0];
        }
        // This trailer will have a youtube video key
        // Every youtube video has a key.
    }

    useEffect(() => {
        getTrailer();
    }, []);
    return (
        <div>

        </div>
    );
};

export default VideoBackground;