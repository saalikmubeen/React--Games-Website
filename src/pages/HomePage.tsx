import React, {useEffect} from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import styled from 'styled-components';
import { fetchGames } from '../actions/gameActions';
import { AppState } from '../reducers';
import GameCard from '../components/GameCard';


const HomePage = (): JSX.Element => {
    const dispatch = useDispatch();
    
    const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

    const {popular, upcoming, newGames} = useTypedSelector((state) => state.games);


    useEffect(() => {

        dispatch(fetchGames());

    }, [dispatch])

    return (
        <GamesList>
            <h2>Popular games</h2>
            <Game>
                {popular.map((game) => <GameCard game={game} />)}
            </Game>    
            
            <h2>Upcoming Games</h2>
            <Game>
                {upcoming.map((game) => <GameCard game={game} />)}
            </Game>

            <h2>New Games</h2>
            <Game>
                {newGames.map((game) => <GameCard game={game} />)}
            </Game>    
        </GamesList>
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
