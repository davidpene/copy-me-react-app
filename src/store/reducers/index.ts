
import { combineReducers } from 'redux';
import {
    connectRouter, go, goBack, goForward,
    push, replace
  } from 'connected-react-router';
  import { ActionType } from 'typesafe-actions';

import { IApplicationState } from '../../models/applicationstate';

import features from './features';
import user from './user';

const routerActions = {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward,
};

export const rootActions = {
    router: routerActions,
    features,
  // other actions
  };

export type ApplicationActions = ActionType<typeof rootActions>;

const rootReducer = (history: any) => combineReducers<IApplicationState, ApplicationActions>({
    features,
    router: connectRouter(history),
    user
});

export default rootReducer;
