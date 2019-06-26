import _ from 'lodash';

import { FETCH_PLANTS, ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PLANTS:
            return { ...state, ...action.payload }
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}