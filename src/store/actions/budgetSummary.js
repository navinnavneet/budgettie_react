import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getBudgetSummary =() => {
    return {
        type: actionTypes.GET_BUDGET_SUMMARY
    }
}

export const initBudgetSummary = () => {
    return dispatch => {
        axios.get('https://budgettie-af7c9-default-rtdb.firebaseio.com/budgetSummary')
        .then(response => {
            dispatch(getBudgetSummary(response.data));
        })
    }
}
