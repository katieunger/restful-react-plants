import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';
import speciesReducer from './speciesReducer';

export default combineReducers({
    plants: plantsReducer,
    species: speciesReducer
});