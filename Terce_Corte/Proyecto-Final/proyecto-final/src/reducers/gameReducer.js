import { types } from '../types/types'

const initialState = {
    gameData: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.gameCreate: return {
            ...state,
            gameData: [
                ...state.gameData,
                action.payload
            ]
        }
        case types.gameRead : return {
            ...state,
            userData: action.payload
        }
        default: return state
    }
}
