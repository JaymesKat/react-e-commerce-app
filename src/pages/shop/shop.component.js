import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");
		collectionRef.onSnapshot(async snapshot => {
			const collections = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collections);
		});
	}

	render() {
		const { match } = this.props;
		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route
					exact
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
