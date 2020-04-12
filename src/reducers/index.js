import * as constants from '../util/constants';

export const incrementReducer = (state = 0, action) => {
    if (action.type === constants.INCREMENT_ACTION) {
        return state + action.payload;
    }
    return state;
};