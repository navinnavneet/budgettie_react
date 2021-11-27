import React from 'react';
import classes from './Toolbar.module.css';
import Icon from '../../../components/UI/Icon/Icon';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.opened} className={classes.MobileOnly}>
                <Icon type='menu' />
            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;