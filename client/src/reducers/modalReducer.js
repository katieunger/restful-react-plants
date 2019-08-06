import { MODAL_OPEN, MODAL_CLOSE } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state, open: action.payload };
        case MODAL_CLOSE:
            return { ...state, open: action.payload };
        default:
            return state;
    }
};