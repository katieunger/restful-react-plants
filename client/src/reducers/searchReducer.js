import { SET_QUERY } from '../actions/types';

const INITIAL_STATE = {
    query: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload };
        default:
            return state;
    }
}