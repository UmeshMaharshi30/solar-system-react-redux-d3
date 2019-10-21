import { combineReducers } from 'redux';
import starsReducer from './stars.config';
import sunReducer from './sun.config';
import planetsReducer from './planet.config';
import cometsReducer from './comet.config';

const rootReducer = combineReducers({
    starsReducer,
    sunReducer,
    planetsReducer,
    cometsReducer
});

export default rootReducer;