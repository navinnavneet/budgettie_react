import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={classes.NavigationItem} onClick={props.clicked} >
        <NavLink to={props.link} activeClassName={classes.active} exact
            className={props.active ? classes.active : null} >
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;

