import * as actionTypes from '../actions/actionTypes';
import { updateObject, checkValidity, percentageCalculator } from '../../Utility/Utility';

const initialState = {
        data: { 
            inc: {
                description: {
                    value: '',
                    rules: {
                        isRequired: true
                    }
                },
                value: {
                    value: '',
                    rules: {
                        isRequired: true,
                        isNumeric: true
                    }
                },
                type: 'inc'
            },
            exp: {
                description: {
                    value: '',
                    rules: {
                        isRequired: true
                    }
                },
                value: {
                    value: '',
                    rules: {
                        isRequired: true,
                        isNumeric: true
                    }
                },
                type: 'exp'
            }
        },
        showSummary: false,
        isIncome: true,
        event: null,
        isValid: false,
        budgetSummary: {
            inc: [], 
            exp: [],
        },
        totalBudget: 0,
        totalIncome: 0,
        totalExpenses: 0,
        totalPercentage: null
    }

const clearInputData = (state, action) => {
    const updatedIncDes = updateObject(state.data.inc.description, {
        value: ''
    });
    const updatedIncVal = updateObject(state.data.inc.value, {
        value: ''
    });
    const updatedInc = updateObject(state.data.inc, {
        description: updatedIncDes,
        value: updatedIncVal
    });

    const updatedExpDes = updateObject(state.data.exp.description, {
        value: ''
    });
    const updatedExpVal = updateObject(state.data.exp.value, {
        value: ''
    });
    const updatedExp = updateObject(state.data.exp, {
        description: updatedExpDes,
        value: updatedExpVal
    });

    return updateObject(state.data, {
        inc: updatedInc,
        exp: updatedExp
    })
}

const takeInput = (state, action) => {
    const updatedIncExpType = updateObject(state.data[action.payLoad.incExp][action.payLoad.type], {
        value: action.payLoad.event.target.value
    });
    const updatedIncExp = updateObject(state.data[action.payLoad.incExp], {
                [action.payLoad.type]: updatedIncExpType
    });
    const updatedData = updateObject(state.data, {
                [action.payLoad.incExp]: updatedIncExp
    });

    let isValid = false;
    if(checkValidity(updatedData[action.payLoad.incExp].description.value, 
                    updatedData[action.payLoad.incExp].description.rules) &&
        checkValidity(updatedData[action.payLoad.incExp].value.value, 
                    updatedData[action.payLoad.incExp].value.rules)) {
                    isValid = true;
    }
            
    return updateObject(state, {
        data: updatedData,
        event: action.payLoad.event,
        isValid: isValid
    });
}

const addItem = (state, action) => {
    action.event.preventDefault();
    let id;
    if (state.budgetSummary[action.data.type].length === 0) {
        id = 0;
    } else {
        id = state.budgetSummary[action.data.type][state.budgetSummary[action.data.type].length - 1].id + 1;
    }

    let budget = state.totalBudget;
    let income = state.totalIncome;
    let expense = state.totalExpenses;
    let updatedBudgetSummary;

    if (action.data.type === 'inc') {
        budget = budget + parseFloat(action.data.value.value);
        income = income + parseFloat(action.data.value.value);
        const incBudget = {
            des: action.data.description.value, 
            val: parseFloat(action.data.value.value).toFixed(2),
            id: id
        };
        const incBudgetSummary = [
            ...state.budgetSummary.inc
        ];
        incBudgetSummary.push(incBudget);

        const expBudgetArr = [
            ...state.budgetSummary.exp
        ];

        let expBudgetSummary;
        if (expBudgetArr.length) {
            expBudgetSummary = expBudgetArr.map(expBudget => {
                const perc = percentageCalculator(expBudget.val, income);
                return updateObject(expBudget, {
                    perc: perc
                });
            });
            updatedBudgetSummary = updateObject(state.budgetSummary, {
                inc: incBudgetSummary,
                exp: expBudgetSummary
            });
        } else {
            updatedBudgetSummary = updateObject(state.budgetSummary, {
                inc: incBudgetSummary
            });
        }
    }

    if (action.data.type === 'exp') {
        budget = budget - parseFloat(action.data.value.value);
        expense = expense + parseFloat(action.data.value.value);
        const expBudget = {
            des: action.data.description.value, 
            val: parseFloat(action.data.value.value).toFixed(2),
            id: id ,
            perc: percentageCalculator(action.data.value.value, income)
        };
        const expBudgetSummary = [
            ...state.budgetSummary.exp
        ];
        expBudgetSummary.push(expBudget);
        updatedBudgetSummary = updateObject(state.budgetSummary, {
            exp: expBudgetSummary
        });
    }

    const percentage = percentageCalculator(expense, income);

    Array.from(document.querySelectorAll("input"))
    .forEach(input => (input.value = null)
    );


    return updateObject(state, {
        budgetSummary: updatedBudgetSummary,
        data: clearInputData(state, action),
        totalBudget: budget,
        totalIncome: income,
        totalExpenses: expense,
        totalPercentage: percentage,
        isItemAdded: true,
        isValid: false
    });
}

const removeItem = (state, action) => {
    const incExp = [
        ...state.budgetSummary[action.payLoad.type]
    ];
    const updatedIncExpSummaryRemove = incExp.filter(data => data.id !== action.payLoad.id);
    let updatedBudgetSummaryRemove = updateObject(state.budgetSummary, {
        [action.payLoad.type]: updatedIncExpSummaryRemove
    });

    let budgetRemove = state.totalBudget;
    let incomeRemove = state.totalIncome;
    let expenseRemove = state.totalExpenses;
    const data = incExp.filter(data => data.id === action.payLoad.id);

    if (action.payLoad.type === 'inc') {
        budgetRemove = budgetRemove - parseFloat(data[0].val);
        incomeRemove = incomeRemove - parseFloat(data[0].val);
        const expBudgetArr = [
            ...state.budgetSummary.exp
        ];

        const expBudgetSummary = expBudgetArr.map(expBudget => {
            const perc = percentageCalculator(expBudget.val, incomeRemove);
            return updateObject(expBudget, {
                perc: perc
            })
        });
        updatedBudgetSummaryRemove = updateObject(state.budgetSummary, {
            exp: expBudgetSummary,
            inc: updatedIncExpSummaryRemove
        })
    }

    if (action.payLoad.type === 'exp') {
        budgetRemove = budgetRemove + parseFloat(data[0].val);
        expenseRemove = expenseRemove - parseFloat(data[0].val);
    }

    const percentageRemove = percentageCalculator(expenseRemove, incomeRemove);

    return updateObject(state, {
        budgetSummary: updatedBudgetSummaryRemove,
        totalBudget: budgetRemove,
        totalIncome: incomeRemove,
        totalExpenses: expenseRemove,
        totalPercentage: percentageRemove
    });
}


const hideSummary = (state, action) => {
    return updateObject(state, {
        showSummary: false
    });
}

const showSummary = (state, action) => {
    return updateObject(state, {
        showSummary: true
    });
}

const switchIncExp = (state, action) => {
    const isInc = state.isIncome;
    return updateObject(state, {
        isIncome: !isInc
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TAKE_INPUT: return takeInput(state, action);

        case actionTypes.SHOW_SUMMARY: return showSummary(state, action);

        case actionTypes.HIDE_SUMMARY: return hideSummary(state, action);

        case actionTypes.SWITCH_INC_EXP: return switchIncExp(state, action);

        case actionTypes.ADD_iTEM: return addItem (state, action);

        case actionTypes.REMOVE_iTEM: return removeItem(state, action);

        default: return state;
    }
}

export default reducer;