import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector} from '../reducers';
import { fetchGames } from '../actions/gameActions';
import GameCard from '../components/GameCard';
import GameDetails from '../components/GameDetails';


const HomePage = (): JSX.Element => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const pathId = pathname.split("/")[2];


    const {popular, upcoming, newGames, searched} = useTypedSelector((state) => state.games);


    useEffect(() => {

        dispatch(fetchGames());

    }, [dispatch])

    return (
        <>
        {pathId && <GameDetails/>}
        <GamesList>

                {searched.length > 0 && 
            <>
            <h2>Search Results...</h2>
            <Game>
                    {searched.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>
            </>        
                }        
                
            <h2>Popular games</h2>
            <Game>
                    {popular.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>    
            
            <h2>Upcoming Games</h2>
            <Game>
                {upcoming.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>

            <h2>New Games</h2>
            <Game>
                {newGames.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>    
        </GamesList>
        </>    
    )
}


const GamesList = styled.div`
    padding: 0 5rem; 

    h2{
        padding: 5rem 0;
    }
`;

const Game = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`


export default HomePage;
