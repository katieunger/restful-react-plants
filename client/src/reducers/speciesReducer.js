import _ from 'lodash';

import { FETCH_SPECIES } from '../actions/types';

export default  (state = {}, action) => {
    switch (action.type) {
        case FETCH_SPECIES:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}