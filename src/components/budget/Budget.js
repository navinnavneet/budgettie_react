import React from 'react';
import classes from './Budget.module.css';
import Card from '../UI/Card/Card';


const budget = props => {

    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const year = new Date().getFullYear();

    const month = months[new Date().getMonth()];

    return (
        <div className={classes.Budget}>
            <h1 className={classes.Month}>Available budget in {month} {year}</h1>
            <div className={classes.BudgetHeading}>
                <h1>{(props.totalBudget).toFixed(2)}</h1>
            </div>
            <div className={classes.IncExp}>
                <Card>
                    <div className={classes.Floater}>
                        <p>Income</p>
                        <p>{props.totalIncome}</p>
                    </div>
                </Card>
            </div>
            <div className={classes.IncExp}>
                <Card>
                    <div className={classes.Floater}>
                        <p>Expenses</p>
                        <p>{props.totalExpenses}</p>
                        <div className={classes.Perc}>
                            <Card>
                                {props.totalPercentage ? <p>{props.totalPercentage}%</p> : <p>.....</p>}
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default budget;