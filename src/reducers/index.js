import { combineReducers } from 'redux';
import starsReducer from './stars.config';
import sunReducer from './sun.config';

const rootReducer = combineReducers({
    starsReducer,
    sunReducer
});

export default rootReducer;