import { combineReducers, createStore } from 'redux'
import {reduxValueReducer} from './reducer'

const rootReducer = combineReducers({
    reduxValue: reduxValueReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const createReduxStore = () => createStore(rootReducer)