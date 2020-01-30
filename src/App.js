import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (<h1>Hats Page</h1>)
class App extends Component {
  render() {
    return (
			<div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
			</div>
		);}
}

export default App;
