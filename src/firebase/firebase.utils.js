import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "clothing-store-db-9da03.firebaseapp.com",
	databaseURL: "https://clothing-store-db-9da03.firebaseio.com",
	projectId: "clothing-store-db-9da03",
	storageBucket: "clothing-store-db-9da03.appspot.com",
	messagingSenderId: "375042237517",
	appId: "1:375042237517:web:be94185f0da6ab37be2804"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdDate = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdDate,
				...additionalData
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
};

export default firebase;
