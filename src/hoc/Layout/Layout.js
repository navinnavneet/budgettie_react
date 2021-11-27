import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSidedrawer: false});
    }

    sidedrawerToggleHandler = () => {
        this.setState(prevState => {
            return  {showSidedrawer: !prevState.showSidedrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar opened={this.sidedrawerToggleHandler} />
                <Sidedrawer open={this.state.showSidedrawer} closed={this.sidedrawerClosedHandler} />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;