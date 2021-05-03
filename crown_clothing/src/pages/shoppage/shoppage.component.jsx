import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { fetchingCollectionSelector } from '../../components/redux/shop/shop.selector';
import { fetchCollectionStartAsync } from '../../components/redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { collectionMap } = this.props;
    collectionMap();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: fetchingCollectionSelector,
});
const mapDispatchToProps = dispatch => ({
  collectionMap: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
