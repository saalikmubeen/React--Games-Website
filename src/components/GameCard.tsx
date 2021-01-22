import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchGameDetails } from '../actions/gameDetailsAction';


interface GameCardProps {
    game: {
        name: string,
        id: number,
        background_image: string,
        rating: number,
        released: number
    }
}


const CardVariants = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
    exit: { opacity: 0, scale: 0 },
    hover: {
        scale: 1.1, transition: {duration: 0.5}
    }
}


const GameCard = (props: GameCardProps): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
    const game = props.game;


    const handleClick = () => {
        dispatch(fetchGameDetails(game.id));
        history.push(`/games/${game.id}`);
    }


    return (
        <Card onClick={handleClick} layoutId={game.id.toString()} variants={CardVariants} initial="hidden" animate="visible" exit="exit" whileHover="hover">
            <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
            <motion.p layoutId={`released ${game.id}`}>{game.released}</motion.p>
            <motion.img src={game.background_image} alt={game.name} layoutId={ `image ${game.id}`}/>
        </Card>
    )
}


const Card = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    cursor: pointer;

    p{
        margin-bottom: .8rem;
    }

    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        display: block;
    }
`


export default GameCard
