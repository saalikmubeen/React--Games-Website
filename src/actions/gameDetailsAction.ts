import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes } from './types';
import { getGameDetailURL, getGameScreenshotsURL } from '../api';

export interface Screenshot{
    id: number;
    image: string;
}

export interface GameDetails {
    id: number,
    name: string,
    description: string,
    released: string,
    background_image: string,
    rating: number,
    screenshots: Screenshot[]
}


export type FetchGameDetailsAction = {
    type: actionTypes,
    payload: GameDetails
}


export const fetchGameDetails = (id: number) => {
    return async function (dispatch: Dispatch) {

        const response = await axios.get(getGameDetailURL(id));
        const screenshots = await axios.get(getGameScreenshotsURL(id));

        dispatch<FetchGameDetailsAction>({
            type: actionTypes.fetchGameDetails,
            payload: { ...response.data, screenshots: screenshots.data.results }
        })
    }
} 
