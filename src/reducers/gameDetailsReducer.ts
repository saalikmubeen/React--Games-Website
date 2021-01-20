import { GameDetails, FetchGameDetailsAction } from '../actions/gameDetailsAction';
import {actionTypes } from '../actions/types';

const initialState = {
    id: 0,
    name: '',
    description_raw: '',
    released: '',
    background_image: '',
    rating: 0,
    platforms: [],
    screenshots: []
}

const gameDetailsReducer = (state: GameDetails = initialState, action: FetchGameDetailsAction): GameDetails => {
    switch (action.type) {
        case actionTypes.fetchGameDetails:
            return { ...state, ...action.payload }
        default:
            return state
    }
}


export default gameDetailsReducer;