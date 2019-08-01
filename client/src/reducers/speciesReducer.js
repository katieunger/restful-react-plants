import _ from 'lodash';

import { FETCH_SPECIES, FETCH_SPECIES_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SPECIES:
            return { ...state, ...action.payload }
        case FETCH_SPECIES_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}