import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import { fetchCollectionsRequest } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = () => {
	const { path } = useRouteMatch()
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsRequest());
	}, [fetchCollectionsRequest]);

	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				exact
				path={`${path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
}

export default ShopPage;
