import axios from 'axios';
import { Dispatch } from 'redux';
import { getSearchedGamesURL } from '../api';
import { Game } from './gameActions';
import { actionTypes } from './types';

export type SearchGamesAction = {
    type: actionTypes.searchGames,
    payload: {
        searched: Game[]
    }
}

export const searchGames = (game_name: string) => {
    return async function (dispatch: Dispatch) {
        
        const response = await axios.get(getSearchedGamesURL(game_name));

        dispatch<SearchGamesAction>({
            type: actionTypes.searchGames,
            payload: {
                searched: response.data.results
            }
        })

    }
}