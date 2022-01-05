import {createStore} from 'redux';
import combinedReducer from './reducer.js';

const store = createStore(combinedReducer);

export default store;