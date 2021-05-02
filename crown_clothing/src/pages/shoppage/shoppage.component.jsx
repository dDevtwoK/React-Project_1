import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { updateCollectionFormFirebase } from '../../components/redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unSubscribeDidMount = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collection');

    collectionRef.onSnapshot(snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);

      this.props.dispatch(updateCollectionFormFirebase(collections));
      console.log('DIDMOUNT');
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={() => <CollectionOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect()(ShopPage);
