import { combineReducers } from 'redux';
import starsReducer from './stars.config';
import sunReducer from './sun.config';
import planetsReducer from './planet.config';
const rootReducer = combineReducers({
    starsReducer,
    sunReducer,
    planetsReducer
});

export default rootReducer;