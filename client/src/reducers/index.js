import { combineReducers } from 'redux';
import familiesReducer from './familiesReducer';
import genusReducer from './genusReducer';
import plantsReducer from './plantsReducer';
import speciesReducer from './speciesReducer';
import menuReducer from './menuReducer';



export default combineReducers({
    families: familiesReducer,
    genus: genusReducer,
    plants: plantsReducer,
    species: speciesReducer,
    menu: menuReducer
});