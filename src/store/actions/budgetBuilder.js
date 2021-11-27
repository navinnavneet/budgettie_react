import * as actionTypes from './actionTypes';

export const takeInput = (event, incExp, type) => {
    return {
        type: actionTypes.TAKE_INPUT,
        payLoad: {
            event: event,
            incExp: incExp,
            type: type
        }
    }
};

export const addItem = (data, event) => {
    return {
        type: actionTypes.ADD_iTEM,
        data: data,
        event: event
    }
};

export const removeItem = (type, id) => {
    return {
        type: actionTypes.REMOVE_iTEM,
        payLoad: {
            type: type,
            id: id
        }
    }
};

export const showSummary = () => {
    return {
        type: actionTypes.SHOW_SUMMARY
    }
};

export const hideSummary = () => {
    return {
        type: actionTypes.HIDE_SUMMARY
    }
};

export const switchIncExp = () => {
    return {
        type: actionTypes.SWITCH_INC_EXP
    }
}