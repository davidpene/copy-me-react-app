import React from 'react';
import { connect } from 'react-redux';
import { History } from 'history';

import Routes from './components/routes';
import { IApplicationState } from './models/applicationstate';
import { isUserAuthenticated } from './store/selectors/user';

export interface IProps {
  history: History<any>;
  isAuthenticated: boolean;
}

const App: React.FC<IProps> = (props: IProps) => {
  return (
    <Routes 
      isAuthenticated={props.isAuthenticated} 
      history={props.history} />
  );
}

type StateProps = Pick<IProps,
    'isAuthenticated'
>;

export default connect(
  (state: IApplicationState): StateProps => ({
    isAuthenticated: isUserAuthenticated(state)
  })
)(App);
