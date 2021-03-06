import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'
import { userReducer } from "../reducers/userReducer";
import { gameReducer } from "../reducers/gameReducer";


const reducers = combineReducers({
    auth: authReducer,
    users: userReducer,
    games: gameReducer
})


const composeEnhancers = (typeof window !== 'undefined' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose))


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)