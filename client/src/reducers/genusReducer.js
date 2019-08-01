import _ from 'lodash';

import { FETCH_GENUS, FETCH_GENUS_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_GENUS:
            return { ...state, ...action.payload }
        case FETCH_GENUS_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}