import React from 'react';
import budgetLogo from '../../assets/Logo/logo.png';
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo} >
        <img src={budgetLogo} alt='logo'/>
    </div>
);

export default logo;