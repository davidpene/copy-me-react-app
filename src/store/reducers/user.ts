import { combineReducers, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions';
import * as userActions from '../actions/user';

export const defaultState: IUserState = {
    entity: null,
    isLoading: false,
    isAuthenticated: false
};

export const entity = (state = defaultState.entity, action: actions.UserAction) => {
    switch (action.type) {
        case getType(userActions.authenticateUser.success):
            return action.payload;
    }

    return state;
}

export const isLoading = (state = defaultState.isLoading, action: actions.UserAction) => {
    switch (action.type) {
        case getType(userActions.authenticateUser.request):
            return true;
        case getType(userActions.authenticateUser.success):
        case getType(userActions.authenticateUser.failure):
            return false;
    }

    return state;
}

export const isAuthenticated = (state = defaultState.isAuthenticated, action: actions.UserAction) => {
    switch (action.type) {
        case getType(userActions.authenticateUser.success):
            return true;
    }

    return state;
}

const user = combineReducers<IUserState>({
    entity: (entity as Reducer<IUser | null>),
    isLoading: (isLoading as Reducer<boolean>),
    isAuthenticated: (isLoading as Reducer<boolean>)
});

export default user;
