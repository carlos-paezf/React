import { types } from '../types/types'

const initialState = {
    gameData: [],
    gameDataByAdmin: []
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
            gameData: action.payload
        }
        case types.gameReadByAdmin : return {
            ...state,
            gameDataByAdmin: action.payload
        }
        case types.gameDelete : return {
            ...state,
            gameData: state.gameData.filter((game) => {
                return game.idGame !== action.payload
            }),
            gameDataByAdmin: state.gameDataByAdmin.filter((game) => {
                return game.idGame !== action.payload
            })
        }
        default: return state
    }
}
