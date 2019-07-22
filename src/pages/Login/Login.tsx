import React from 'react';

export interface IProps {
    isAuthenticated: boolean;
    isLoading: boolean;
    onLogin: (request: IUserAuthenticationRequest) => void;
    onLogout: () => void;
    redirectHome: () => void;
}

export default class Login extends React.PureComponent<IProps> {
    public render() {
        const {
            isAuthenticated,
            isLoading,
            onLogout,
            redirectHome
        } = this.props;

        if (isAuthenticated) {
            redirectHome();
            return null;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                Login Page
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={onLogout}>Logout</button>
                <div>{`env variable: ${process.env.REACT_APP__COGNITO_CLIENTID}`}</div>
            </div>
        );
    }

    public handleLogin = () => this.props.onLogin({userName: '', password: ''});
}
