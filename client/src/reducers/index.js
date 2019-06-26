import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';
import speciesReducer from './speciesReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    plants: plantsReducer,
    species: speciesReducer,
    menu: menuReducer
});