import _ from 'lodash';

import { FETCH_FAMILIES, FETCH_FAMILIES_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_FAMILIES:
            return { ...state, ...action.payload }
        case FETCH_FAMILIES_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}