import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootReducer, { ApplicationActions } from './reducers';
import rootSaga from './sagas';

import { IApplicationState } from '../models/applicationstate';

export const history = createBrowserHistory();

export const configureStore = (): Store<IApplicationState, ApplicationActions> => {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer(history),
        composeEnhancers(
            applyMiddleware(sagaMiddleware),
            applyMiddleware(routerMiddleware(history))));

    sagaMiddleware.run(rootSaga);
    
    return store;
};


export const configureInitialState = (store: Store<IApplicationState, ApplicationActions>): void => {
    // store.dispatch(fetchFeatureList.request());
}
