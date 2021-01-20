import { actionTypes, FetchGamesAction, Game } from '../actions/gameActions';


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


const gamesReducer = (state: GamesState = initialState, action: FetchGamesAction) => {
    switch (action.type) {
        case actionTypes.fetchGames:
            return { ...state, popular: action.payload.popular, upcoming: action.payload.upcoming, newGames: action.payload.newGames };
        default:
            return state;
    }
}

export default gamesReducer;