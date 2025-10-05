import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies();
    return (
        <div className="overflow-x-hidden">
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* Browse
            Main video container has 
                -video background
                - video title
                - video description
            Secondary container
                - Movie list *n
                    - card * n

            
            */}

        </div>
    )
}

export default Browse