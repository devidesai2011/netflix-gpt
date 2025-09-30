import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
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