import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const collections = this.state.collections;
    console.log(collections);
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
