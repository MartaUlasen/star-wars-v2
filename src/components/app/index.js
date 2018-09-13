import React, { Component } from 'react';
import Header from '.././header';
import { Switch, Route } from 'react-router-dom';

import Home from '.././home';
import Films from '.././films';
import Film from '.././film';
import Characters from '.././characters';
import Character from '.././character';

import './app.scss';
import './blocks/card.scss';
import './blocks/buttons.scss';
import './blocks/base.scss';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/films" component={Films} />
						<Route path="/films/:id" component={Film} />
						<Route exact path="/characters" component={Characters} />
						<Route path="/characters/:id" component={Character} />
					</Switch>
				</main>
			</div>
    	);
	}
}

export default App;
