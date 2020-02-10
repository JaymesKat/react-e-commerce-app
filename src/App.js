import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
class App extends Component {

	constructor(){
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await createUserProfileDoc(userAuth);
				console.log(userAuth);
				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				})
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillMount(){
		this.unsubscribeFromAuth = null;
	}

  render() {
    return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignupPage} />
				</Switch>
			</div>
		);}
}

export default App;
