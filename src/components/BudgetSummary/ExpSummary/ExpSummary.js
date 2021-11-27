import React from 'react';
import BudgetSummary from '../BudgetSummary';
import classes from './ExpSummary.module.css';
import Card from '../../UI/Card/Card';

const expSummary = props => {

    const summary = props.expensesSummary.map(exp => {
        return (
            <li key={exp.id}>
                <div className={classes.ExpSummary} onClick={() => props.delete('exp', exp.id)} >
                    <div className={classes.Exp}><h3>{exp.des}</h3></div>
                    <div className={classes.Exp}>
                        <h3>{exp.val}</h3>
                        <div className={classes.Card}>
                            <Card>
                                <p>{exp.perc}%</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </li>
        );
    })

    return (
        <BudgetSummary>
            <h1>Expenses</h1>
            <ul>
                {summary}
            </ul>
        </BudgetSummary>
    );
}

export default expSummary;