import React from 'react';
import './menu-item.styled.scss';
import withRouter from 'react-router-dom';

const MenuItem = ({ title, imgUrl, size, history, linkUrl }) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push()}>
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
export default withRouter(MenuItem);
