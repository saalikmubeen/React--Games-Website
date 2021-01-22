import { FetchGamesAction, Game, LoadingGamesAction } from '../actions/gameActions';
import { SearchGamesAction, ClearSearchAction , LoadingSearchedGamesAction} from '../actions/searchGamesAction';
import { actionTypes } from '../actions/types';

export interface GamesState {
    popular: Game[],
    upcoming: Game[],
    newGames: Game[],
    searched: Game[],
    loadingSearchedGames: boolean,
    loadingGames: boolean
}


const initialState = {
     popular: [],
     upcoming: [],
     newGames: [],
     searched: [],
     loadingSearchedGames: false,
     loadingGames: false
}


const gamesReducer = (state: GamesState = initialState, action: FetchGamesAction | SearchGamesAction | ClearSearchAction | LoadingGamesAction | LoadingSearchedGamesAction): GamesState => {
    switch (action.type) {
        case actionTypes.fetchGames:
            return { ...state, popular: action.payload.popular, upcoming: action.payload.upcoming, newGames: action.payload.newGames, loadingGames: false };
        case actionTypes.searchGames: 
            return { ...state, searched: action.payload.searched, loadingSearchedGames: false }
        case actionTypes.clearSearchResults:
            return { ...state, searched: action.payload.searched, loadingSearchedGames: false }
        case actionTypes.loadingGames:
            return { ...state, loadingGames: true }
        case actionTypes.loadingSearchedGames: 
            return { ...state, loadingSearchedGames: true }
        default:
            return state;
    }
}

export default gamesReducer;