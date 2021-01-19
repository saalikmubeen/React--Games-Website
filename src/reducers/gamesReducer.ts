import { actionTypes, FetchGamesAction } from '../actions/gameActions';

export interface GamesState {
    popular: object[],
    upcoming: object[],
    newGames: object[],
    searched: object[]
}


const initialState = {
     popular: [],
     upcoming: [],
     newGames: [],
     searched: []
}


const gamesReducer = (state: GamesState = initialState, action: FetchGamesAction) => {
    switch (action.type) {
        case actionTypes.fetchGames:
            return { ...state, popular: action.payload.popular, upcoming: action.payload.upcoming, newGames: action.payload.newGames };
        default:
            return state;
    }
}

export default gamesReducer;