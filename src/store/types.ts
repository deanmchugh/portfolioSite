export interface ReduxValueState {
    currentValue: number
}

export const UPDATE_VALUE = 'UPDATE_VALUE'

interface ChangeValue {
    type: typeof UPDATE_VALUE
    payload: ReduxValueState
}

export type ValueActionTypes = ChangeValue