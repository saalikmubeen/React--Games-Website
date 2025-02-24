import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes } from './types';
import { getNewGamesURL, getPopularGamesURL, getUpcomingGamesURL } from '../api';


export type Game = {
    name: string,
    id: number,
    background_image: string,
    rating: number,
    released: number
}


export type FetchGamesAction = {
    type: actionTypes.fetchGames,
    payload: {
        popular: Game[],
        upcoming: Game[],
        newGames: Game[]
    }
}

export type LoadingGamesAction = {
    type: actionTypes.loadingGames,
}


export const fetchGames = () => {
    return async function (dispatch: Dispatch) {

        dispatch<LoadingGamesAction>({ type: actionTypes.loadingGames });
        
        const popularGames = await axios.get(getPopularGamesURL());
        const upcomingGames = await axios.get(getUpcomingGamesURL());
        const newGames = await axios.get(getNewGamesURL());

        dispatch<FetchGamesAction>({
            type: actionTypes.fetchGames,
            payload: {
                popular: popularGames.data.results,
                upcoming: upcomingGames.data.results,
                newGames: newGames.data.results
            }
        })
    }
};
