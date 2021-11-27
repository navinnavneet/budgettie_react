import React from 'react';
import classes from './Button.module.css';

const button = props => {
    const modifiedClasses = [classes.Button];
    if (props.disabled) {
        modifiedClasses.push(classes.Disabled);
    }
    return(
        <button disabled={props.disabled} className={modifiedClasses.join(' ')} onClick={props.clicked} >
            {props.children}
        </button>
    );
}

export default button;