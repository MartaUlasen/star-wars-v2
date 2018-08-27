import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './customTheme.css';
import './bootstrap.min.css';
import './styles.scss';

import App from './components/app';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
	<BrowserRouter>
    	<App />
	</BrowserRouter>
), document.getElementById('root'))