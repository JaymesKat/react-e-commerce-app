import { ShopActionTypes } from "./shop.types";

export const fetchCollectionsRequest = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_REQUEST
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = message => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: message
});
