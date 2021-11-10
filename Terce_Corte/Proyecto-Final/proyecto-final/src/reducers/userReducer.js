import { types } from "../types/types"

const initialState = {
    userData: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userCreate: return {
            ...state,
            userData: action.payload
        }
        case types.userRead : return {
            ...state,
            userData: action.payload
        }
        default: return state
    }
}
