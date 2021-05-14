import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchingCollectionSelector } from '../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
  isFetching: fetchingCollectionSelector,
});

const CollectionOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
);
export default CollectionOverviewContainer;
