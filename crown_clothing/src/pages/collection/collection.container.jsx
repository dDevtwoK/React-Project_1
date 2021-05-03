import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchingCollectionSelector } from '../../components/redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isFetching: fetchingCollectionSelector,
});

const CollectionContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);
export default CollectionContainer;
