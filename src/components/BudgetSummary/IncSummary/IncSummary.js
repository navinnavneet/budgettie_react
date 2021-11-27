import React from 'react';
import BudgetSummary from '../BudgetSummary';
import classes from './IncSummary.module.css';

const incSummary = props => {

    const summary = props.incomeSummary.map(inc => {
        return (
            <li key={inc.id}>
                <div className={classes.IncSummary} onClick={() => props.delete('inc', inc.id)}>
                    <div className={classes.Inc}><h3>{inc.des}</h3></div>
                    <div className={classes.Inc}><h3>{inc.val}</h3></div>
                </div>
            </li>
        );
    })

    return (
        <BudgetSummary>
            <h1>income</h1>
            <ul>
                {summary}
            </ul>
        </BudgetSummary>

    );
}

export default incSummary;