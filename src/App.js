import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import BudgetBuilder from './containers/BudgetBuilder/BudgetBuilder';
import IncSummary from './components/BudgetSummary/IncSummary/IncSummary';
import ExpSummary from './components/BudgetSummary/ExpSummary/ExpSummary';
import { removeItem, hideSummary } from './store/actions/budgetBuilder';

class App extends Component {

  render() {

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/income' render={() => (
              <IncSummary
                incomeSummary={this.props.budgetSummary.inc}
                delete={this.props.onRemoveItem} />
            )} />
          <Route path='/expenses' render={() => (
              <ExpSummary 
                expensesSummary={this.props.budgetSummary.exp} 
                delete={this.props.onRemoveItem} />
            )} />
          <Route path='/' exact component={BudgetBuilder} />
        </Switch>
      </Layout>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    budgetSummary: state.budgetBuilder.budgetSummary,
    showSummary: state.budgetBuilder.showSummary
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: (type, id) => dispatch(removeItem(type, id)),
    onHideSummary: () => dispatch(hideSummary())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
