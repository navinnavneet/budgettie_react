import React from 'react';
import classes from './Input.module.css';

const input = props => {
    switch (props.inputType) {
        case 'description':
            return (
                <input
                    type="text"
                    className={classes.Description}
                    placeholder="ADD DESCRIPTION"
                    onChange={props.changed}
                />
            );
        case 'value':
            return (
                <input
                    type="text"
                    className={classes.Value}
                    placeholder="VALUE"
                    onChange={props.changed}
                />
            );
        default:
            return;
    }
}

export default input;