import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from 'components/app';
import './index.css';

const store = configureStore();

window.store = store;

ReactDOM.render(		
    <Provider store={store}>				
        <BrowserRouter>
            <App />
        </BrowserRouter>		
    </Provider>,		
    document.getElementById('root') 
)
