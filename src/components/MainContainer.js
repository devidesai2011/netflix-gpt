import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movieData = useSelector((store) => store?.movies?.nowPlayingMovies);
    const mainMovie = movieData ? movieData[0] : null;
    // console.log(mainMovie);
    if (!mainMovie) return;

    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>

    )
}

export default MainContainer