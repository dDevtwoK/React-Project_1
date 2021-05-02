import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../components/redux/shop/shop.actions';

class ShopPage extends React.Component {
  unSubscribeDidMount = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
