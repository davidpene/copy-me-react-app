import { createAsyncAction } from 'typesafe-actions';

export const authenticateUser = createAsyncAction(
    'AUTHENTICATE_USER',
    'AUTHENTICATE_USER_SUCCESSFUL',
    'AUTHENTICATE_USER_FAILURE',
)<IUserAuthenticationRequest, IUser, Error>();