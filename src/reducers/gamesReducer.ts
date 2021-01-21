import { FetchGamesAction, Game } from '../actions/gameActions';
import { SearchGamesAction } from '../actions/searchGamesAction';
import { actionTypes } from '../actions/types';

export interface GamesState {
    popular: Game[],
    upcoming: Game[],
    newGames: Game[],
    searched: Game[]
}


const initialState = {
     popular: [],
     upcoming: [],
     newGames: [],
     searched: []
}


const gamesReducer = (state: GamesState = initialState, action: FetchGamesAction | SearchGamesAction): GamesState => {
    switch (action.type) {
        case actionTypes.fetchGames:
            return { ...state, popular: action.payload.popular, upcoming: action.payload.upcoming, newGames: action.payload.newGames };
        case actionTypes.searchGames: 
            return {...state, searched: action.payload.searched}
        default:
            return state;
    }
}

export default gamesReducer;