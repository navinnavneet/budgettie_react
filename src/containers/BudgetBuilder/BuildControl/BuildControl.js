import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './BuildControl.module.css';
import Input from '../../../components/UI/Input/Input';
import Card from '../../../components/UI/Card/Card';
import Button from '../../../components/UI/Button/Button';
import { takeInput, addItem, switchIncExp } from '../../../store/actions/budgetBuilder';

class BuildControl extends Component {

    render () {

        let inputCard = null;
        if (this.props.isIncome) {
            inputCard = (
                <div className={classes.IncExp}>
                    <Card>
                        <form onSubmit={(event) => this.props.onAddItem(this.props.inc, event)}>
                            <h2>INCOME</h2>
                            <Input inputType='description' 
                                value={this.props.inc.description}
                                changed={(event) => this.props.onTakeInput(event, 'inc', 'description')} />
                            <Input inputType='value'
                                value={this.props.inc.value}
                                changed={(event) => this.props.onTakeInput(event, 'inc', 'value')} />
                            <Button disabled={!this.props.isValid} type='submit'>add</Button>
                        </form>
                    </Card>
                </div>
            );
        } 
        if(!this.props.isIncome) {
            inputCard = (
                <div className={classes.IncExp}>
                    <Card>
                        <form onSubmit={(event) => this.props.onAddItem(this.props.exp, event)}>
                            <h2>EXPENSES</h2>
                            <Input inputType='description' 
                                value={this.props.inc.description}
                                changed={(event) => this.props.onTakeInput(event, 'exp', 'description')} />
                            <Input inputType='value'
                                value={this.props.exp.value}
                                changed={(event) => this.props.onTakeInput(event, 'exp', 'value')} />
                            <Button disabled={!this.props.isValid} type='submit'>add</Button>
                        </form>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classes.BuildControl}>
                {inputCard}
                <button 
                    className={classes.Button}
                    onClick={this.props.onSwitchIncExp} >
                    {this.props.isIncome ? 'switch to expenses' : 'switch to income'}
                </button>
            </div>
        );
    }
} 

const matchStateToProps = state => {
    return {
        inc: state.budgetBuilder.data.inc,
        exp: state.budgetBuilder.data.exp,
        isIncome: state.budgetBuilder.isIncome,
        isValid: state.budgetBuilder.isValid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTakeInput: (event, incExp, type) => dispatch(takeInput(event, incExp, type)),
        onAddItem: (data, event) => dispatch(addItem(data, event)),
        onSwitchIncExp: () => dispatch(switchIncExp())
    }
}


export default connect(matchStateToProps, mapDispatchToProps)(BuildControl);
