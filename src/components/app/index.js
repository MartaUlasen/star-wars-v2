import React, { Component } from 'react';
import Header from 'components/header';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/home';
import Films from 'components/films';
import Film from 'components/film';
import Characters from 'components/characters';
import Character from 'components/character';

import './app.scss';
import 'styles/card.scss';
import 'styles/buttons.scss';
import 'styles/base.scss';

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
