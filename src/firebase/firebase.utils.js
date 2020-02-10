import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
	apiKey: "AIzaSyAjrw26uKbKkWaA81dp64Hdyxl83gfco94",
	authDomain: "clothing-store-db-9da03.firebaseapp.com",
	databaseURL: "https://clothing-store-db-9da03.firebaseio.com",
	projectId: "clothing-store-db-9da03",
	storageBucket: "clothing-store-db-9da03.appspot.com",
	messagingSenderId: "375042237517",
	appId: "1:375042237517:web:be94185f0da6ab37be2804"
};

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
