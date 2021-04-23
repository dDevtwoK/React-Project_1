import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, changedHandler }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={changedHandler}
    />
  );
};
export default SearchBox;
