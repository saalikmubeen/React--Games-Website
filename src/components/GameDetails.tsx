import React from 'react';
import { useTypedSelector } from '../reducers';

const GameDetails = (): JSX.Element => {

    const {id } = useTypedSelector((state) => state.gameDetails);
    return (
        <div>
            <h1>Game Details</h1>
            {id}
        </div>
    )
}

export default GameDetails;
