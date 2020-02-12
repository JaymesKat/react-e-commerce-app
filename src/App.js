import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount(){
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth){
				const userRef = await createUserProfileDoc(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
							id: snapshot.id,
							...snapshot.data()
						})
				})
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillMount(){
		this.unsubscribeFromAuth = null;
	}

  render() {
    return (
			<div>
				<Header/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignupPage} />
				</Switch>
			</div>
		);}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
