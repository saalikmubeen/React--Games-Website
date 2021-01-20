import React from 'react'
import styled from 'styled-components';


interface GameCardProps {
    game: {
        name: string,
        id: number,
        background_image: string,
        rating: number,
        released: number
    }
}

const GameCard = (props: GameCardProps): JSX.Element => {
    const game = props.game;
    return (
        <Card>
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <img src={game.background_image} alt={ game.name}/>
        </Card>
    )
}


const Card = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    cursor: pointer;

    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        display: block;
    }
`


export default GameCard
