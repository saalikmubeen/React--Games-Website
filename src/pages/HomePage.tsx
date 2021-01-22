import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useTypedSelector} from '../reducers';
import { fetchGames } from '../actions/gameActions';
import GameCard from '../components/GameCard';
import GameDetails from '../components/GameDetails';

import { useScroll } from '../useScroll';


const titleVariants = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -400 }
}


const HomePage = (): JSX.Element => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const pathId = pathname.split("/")[2];

    const { element, controls } = useScroll()
    const {element: element2, controls: controls2} = useScroll()
    

    const { popular, upcoming, newGames, searched } = useTypedSelector((state) => state.games);


    useEffect(() => {

        dispatch(fetchGames());

    }, [dispatch])

    return (
        <GamesList>
             <AnimateSharedLayout type="crossfade"> 
                <AnimatePresence> {pathId && <GameDetails pathId={ pathId }/>}</AnimatePresence>

                {searched.length > 0 && 
            <>
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" exit="exit">Search Results...</motion.h2>
            <Game>
                    {searched.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>
            </>        
                }        
                
                {popular.length > 0 &&
            <>        
            <motion.h2 variants={titleVariants} initial="hidden" animate="visible" exit="exit">Popular games</motion.h2>
            <Game>
                    {popular.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>
            </>            
                }        
            
                {upcoming.length > 0 &&
            <>
            <motion.h2 animate={controls} ref={element} variants={titleVariants}>Upcoming Games</motion.h2>
            <Game>
                {upcoming.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>
            </>
                }        

                {newGames.length > 0 &&
            <>        
            <motion.h2 animate={controls2} ref={element2} variants={titleVariants}>New Games</motion.h2>
            <Game>
                {newGames.map((game) => <GameCard game={game} key={game.id} />)}
            </Game>    
            </>
                }
                </AnimateSharedLayout> 
        </GamesList>
          
    )
}


const GamesList = styled(motion.div)`
    padding: 0 5rem; 

    h2{
        padding: 5rem 0;
    }
`;

const Game = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`


export default HomePage;
