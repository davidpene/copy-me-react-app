import React from 'react';
import { Route } from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import PrivateRoute from './PrivateRoute';
import Login from '../../pages/Login';
import Feed from '../../pages/Feed';


export interface IProps {
    isAuthenticated: boolean;
    history: History<any>;
}

export default class Routes extends React.Component<IProps> {
    public render() {
        const {
            isAuthenticated
        } = this.props;

        return (
            <ConnectedRouter history={this.props.history} context={ReactReduxContext}>
                <Route path='/login' component={Login} />
                <PrivateRoute
                    path='/feed'
                    exact 
                    isAuthenticated={isAuthenticated}
                    component={Feed} />
                <PrivateRoute
                    path='/'
                    exact 
                    isAuthenticated={isAuthenticated}
                    component={Feed} />
            </ConnectedRouter>
        );
    }
}