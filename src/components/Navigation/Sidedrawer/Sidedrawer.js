import React from 'react';
import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = props => {

    let attachedClasses = [classes.Sidedrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems clicked={props.closed} />
                </nav>
            </div>
        </Aux>
    );
}

export default sidedrawer;