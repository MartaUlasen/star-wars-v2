import React, { Component } from 'react';
import './app.css';
import Header from '.././header';
import { Switch, Route, Link } from 'react-router-dom';

import Home from '.././home';
import Films from '.././films';
import Film from '.././film';
import Characters from '.././characters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route path="/films/:id" component={Film} />
            <Route path="/characters" component={Characters} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
