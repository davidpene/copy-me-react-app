import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import * as userActions from '../actions/user'; 
import { routes } from '../../util/routes';

export function* authenticateUser(action: ReturnType<typeof userActions.authenticateUser.request>) {
    try {
        const fakeUser: IUser = {
            userName: ''
        };

        yield put(userActions.authenticateUser.success(fakeUser));
        yield put(push(routes.home));
    } catch (error) {
        yield put(userActions.authenticateUser.failure(error))
    }
}

export default function* packsSaga() {
    yield takeLatest(getType(userActions.authenticateUser.request), authenticateUser);
}