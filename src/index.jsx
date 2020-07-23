import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/app';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/star-wars-v2">
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
