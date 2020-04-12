import * as constants from '../util/constants';

export const incrementAction = (value) => {
    return {
        type: constants.INCREMENT_ACTION,
        payload: value
    };
};