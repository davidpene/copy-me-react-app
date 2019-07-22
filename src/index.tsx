import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { configureInitialState, configureStore, history } from './store';

// configure app state
const store = configureStore();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// render app function
const renderApp = () => {
    configureInitialState(store);

    ReactDOM.render(
        <Provider store={store} context={ReactReduxContext}>
            <App history={history}/>
        </Provider>,
        document.getElementById('root')
    );
}

// render the app
renderApp();