import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Login, { IProps } from './Login';

import { authenticateUser } from '../../store/actions/user';
import { isUserAuthenticated, isLoading } from '../../store/selectors/user';

import { routes } from '../../util/routes';
import { IApplicationState } from '../../models/applicationstate';

type StateProps = Pick<IProps,
    'isAuthenticated' |
    'isLoading'
>;

type DispatchProps = Pick<IProps,
    'onLogin' |
    'onLogout' |
    'redirectHome'
>;

const mapStateToProps = (state: IApplicationState): StateProps => ({
    isAuthenticated: isUserAuthenticated(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    onLogin: (request: IUserAuthenticationRequest) => dispatch(authenticateUser.request(request)),
    onLogout: () => {},
    redirectHome: () => dispatch(push(routes.home))
});

export default connect<StateProps, DispatchProps>(
    mapStateToProps as any,
    mapDispatchToProps,
)(Login);
