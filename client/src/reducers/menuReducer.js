import { SET_ACTIVE_ITEM } from '../actions/types';

const INITIAL_STATE = {
    activeItem: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_ITEM:
            return { ...state, activeItem: action.payload };
        default:
            return state;
    }
};