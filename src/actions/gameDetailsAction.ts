import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes } from './types';
import { getGameDetailURL, getGameScreenshotsURL } from '../api';

export interface Screenshot{
    id: number;
    image: string;
}

export interface Platform {
    platform: {
        id: number,
        name: string,
        image_background: string
    }
}

export interface GameDetails {
    id: number,
    name: string,
    description_raw: string,
    released: string,
    background_image: string,
    rating: number,
    platforms: Platform[],
    screenshots: Screenshot[],
    isLoading: boolean
}


export type FetchGameDetailsAction = {
    type: actionTypes,
    payload: GameDetails
}


export const fetchGameDetails = (id: number) => {
    return async function (dispatch: Dispatch) {

        dispatch({
            type: actionTypes.loadingGameDetails
        })

        const response = await axios.get(getGameDetailURL(id));
        const screenshots = await axios.get(getGameScreenshotsURL(id));

        dispatch<FetchGameDetailsAction>({
            type: actionTypes.fetchGameDetails,
            payload: { ...response.data, screenshots: screenshots.data.results }
        })
    }
} 
