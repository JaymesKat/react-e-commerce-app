import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsRequest } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsRequest, match }) => {
	useEffect(() => {
		fetchCollectionsRequest();
	}, [fetchCollectionsRequest]);

	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				exact
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsRequest: () => dispatch(fetchCollectionsRequest())
});

export default connect(null, mapDispatchToProps)(ShopPage);
