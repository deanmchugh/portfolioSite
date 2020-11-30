import {ReduxValueState, UPDATE_VALUE, ValueActionTypes} from './types'

export function updateValue(newValue: ReduxValueState): ValueActionTypes {
    return {
        type: UPDATE_VALUE,
        payload: newValue
    }
}