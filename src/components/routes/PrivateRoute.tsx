
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface IProps extends RouteProps {
  isAuthenticated: boolean;
}

export default class PrivateRoute extends Route<IProps> {
  public render() {
    if (!this.props.isAuthenticated) {
      const renderComponent = () => (<Redirect to={{pathname: '/login'}}/>);
      return <Route {...this.props} component={renderComponent} render={undefined}/>;
  } else {
      return <Route {...this.props}/>;
  }
  }
}
