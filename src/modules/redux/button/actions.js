import {PRESS_BUTTON} from './types.js';

export const pressBtn = () => {
    return {
        type: PRESS_BUTTON,
        info: 'Executes when the user presses a button'
    }
}