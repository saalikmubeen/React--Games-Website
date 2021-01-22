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

export type ClearSearchAction = {
    type: actionTypes.clearSearchResults,
    payload: {
        searched: []
    }
}

export type LoadingSearchedGamesAction = {
    type: actionTypes.loadingSearchedGames
}


export const searchGames = (game_name: string) => {
    return async function (dispatch: Dispatch) {

        dispatch<LoadingSearchedGamesAction>({ type: actionTypes.loadingSearchedGames });
        
        const response = await axios.get(getSearchedGamesURL(game_name));

        dispatch<SearchGamesAction>({
            type: actionTypes.searchGames,
            payload: {
                searched: response.data.results
            }
        })

    }
}


export const clearSearch = () => {
    return {
        type: actionTypes.clearSearchResults,
        payload: {
            searched: []
        }
    }
}