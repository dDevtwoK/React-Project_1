import React from 'react';
import './menu-item.styled.scss';

const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
