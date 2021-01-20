import { FetchGamesAction, Game } from '../actions/gameActions';
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


const gamesReducer = (state: GamesState = initialState, action: FetchGamesAction): GamesState => {
    switch (action.type) {
        case actionTypes.fetchGames:
            return { ...state, popular: action.payload.popular, upcoming: action.payload.upcoming, newGames: action.payload.newGames };
        default:
            return state;
    }
}

export default gamesReducer;