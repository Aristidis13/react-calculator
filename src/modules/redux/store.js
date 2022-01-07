import {createStore} from 'redux';
import combinedReducer from './reducer.js';

const store = createStore(reducer);

export default store;