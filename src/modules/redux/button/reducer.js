import {pressBtn} from './actions.js'
import * as btnTypes from './types.js'

const buttonReducer = (state,action) => {
    switch(action.type ) {
        case btnTypes.PRESS_BUTTON:
            return {
            ...state,
            textInScreen: state.textInScreen
        }
        default: return state;

    }
}

export default buttonReducer;