import React from "react"
import {Provider} from "react-redux"
import {CssBaseline} from '@material-ui/core'
import {createReduxStore} from './src/store/index'

export default ({element}: any) => {
    const store = createReduxStore()
    return (
        <Provider store={store}>
            <CssBaseline />
            {element}
        </Provider>
    )
}