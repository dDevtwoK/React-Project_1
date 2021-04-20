// import React from 'react';
// import './collection-item.styled.scss';

// const CollectionItem = ({ id, name, imageUrl, price }) => (
//   <div className='collection-item'>
//     <div
//       class='image'
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//       }}
//     />
//     <div className='collection-footer'>
//       <span className='name'>{name}</span>
//       <span class='price'>{price}</span>
//     </div>
//   </div>
// );

// export default CollectionItem;

import React from 'react';
import './collection-item.styled.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className='collection-item'>
    <div class='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
