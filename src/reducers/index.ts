import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';



const reducers = combineReducers({
    games: gamesReducer
});

export type AppState = ReturnType<typeof reducers>


export default reducers;