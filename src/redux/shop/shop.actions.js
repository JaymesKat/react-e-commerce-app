import { ShopActionTypes } from "./shop.types";
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsRequest = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_REQUEST
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsRequest());
		collectionRef
			.get()
			.then(snapshot => {
				const collections = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collections));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = message => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: message
});
