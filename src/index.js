import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api.js';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {AuthStatus} from './const.js';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuth(AuthStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
