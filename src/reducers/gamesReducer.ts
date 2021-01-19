
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

type GamesAction = {
    type: string,
    payload: []
}

const gamesReducer = (state: GamesState = initialState, action: GamesAction) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default gamesReducer;