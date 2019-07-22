interface IUserState {
    entity: IUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

interface IUser {
    userName: string;
}

interface IUserAuthenticationRequest {
    userName: string;
    password: string;
}
