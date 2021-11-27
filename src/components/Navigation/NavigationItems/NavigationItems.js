import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationITems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={props.clicked} link='/'>Budgettie</NavigationItem>
        <NavigationItem clicked={props.clicked} link='/income'>Income</NavigationItem>
        <NavigationItem clicked={props.clicked} link='/expenses'>Expenses</NavigationItem>
    </ul>
);

export default navigationITems;

