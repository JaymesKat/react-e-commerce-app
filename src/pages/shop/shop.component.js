import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsRequest } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsRequest } = this.props;
		fetchCollectionsRequest();
	}

	render() {
		const { match } = this.props;
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
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsRequest: () => dispatch(fetchCollectionsRequest())
});

export default connect(null, mapDispatchToProps)(ShopPage);
