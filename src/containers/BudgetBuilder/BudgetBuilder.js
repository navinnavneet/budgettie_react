import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Budget from '../../components/budget/Budget';
import BuildControl from './BuildControl/BuildControl';
import { showSummary } from '../../store/actions/budgetBuilder';


class BudgetBuilder extends Component {


    componentDidUpdate() {
        console.log(this.props.budgetSummary);
    }

    render () {
        return (
            <Aux> 
                <Budget
                    totalBudget={this.props.totalBudget}
                    totalIncome={this.props.totalIncome}
                    totalExpenses={this.props.totalExpenses}
                    totalPercentage={this.props.totalPercentage} />
                <BuildControl />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        budgetSummary: state.budgetBuilder.budgetSummary,
        totalBudget: state.budgetBuilder.totalBudget,
        totalIncome: state.budgetBuilder.totalIncome,
        totalExpenses: state.budgetBuilder.totalExpenses,
        totalPercentage: state.budgetBuilder.totalPercentage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onShowSummary: () => dispatch(showSummary())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetBuilder);