import _ from 'lodash';

import { FETCH_PLANTS } from '../actions/types';

export default  (state = {}, action) => {
    switch (action.type) {
        case FETCH_PLANTS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}