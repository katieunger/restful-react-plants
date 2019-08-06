import _ from 'lodash';

import { FETCH_PLANTS, FETCH_PLANTS_ERROR, FETCH_PLANT, FETCH_PLANT_ERROR, UNSET_PLANT } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PLANT:
            return { ...state, selectedPlant: action.payload };
        case FETCH_PLANT_ERROR:
            return { ...state, error: action.payload };
        case FETCH_PLANTS:
            return { ...state, ...action.payload };
        case FETCH_PLANTS_ERROR:
            return { ...state, error: action.payload };
        case UNSET_PLANT:
            return { ...state, selectedPlant: null}
        default:
            return state;
    }
}