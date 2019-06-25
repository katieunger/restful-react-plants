import _ from 'lodash';

import { FETCH_SPECIES, ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SPECIES:
            return { ...state, ...action.payload }
        case ERROR:
            return { 
                ...state,
                [action.type]: action.payload
            }
        default:
            return state;
    }
}