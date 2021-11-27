import React from 'react';
import classes from './BudgetSummary.module.css';

const budgetSummary = props => {
    return (
        <div className={classes.BudgetSummary}>
            {props.children}
        </div>
    );
}

export default budgetSummary;