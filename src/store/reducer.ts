import {ReduxValueState, ValueActionTypes, UPDATE_VALUE} from './types'

export const initalState: ReduxValueState = {
    currentValue: 0
}

export function reduxValueReducer(
    state = initalState,
    action: ValueActionTypes
): ReduxValueState {
    switch (action.type) {
        case UPDATE_VALUE:
            return {
                currentValue: action.payload.currentValue
            }
        default:
            return state
    }
}