import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import gamesReducer from './gamesReducer';
import gameDetailsReducer from './gameDetailsReducer';



const reducers = combineReducers({
    games: gamesReducer,
    gameDetails: gameDetailsReducer
});

export type AppState = ReturnType<typeof reducers>

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;


export default reducers;