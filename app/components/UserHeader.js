import React from 'react';

var headerStyle = {
  font: '18px/1 Helvetica, Verdana, sans-serif',
  backgroundColor: '#901111', // red
  padding: '1%',
  color: '#eceff1',
  position: 'relative'
};

var imageStyle =  {
  borderRadius: '50%',
  WebkitBorderRadius: '50%',
  MozBorderRadius: '50%',
  width: '68px',
  height: '68px',
  float: 'left',
  padding: '0% 4% 0% 4%'
};

var defaultImageSrc = 'https://cdn.pixabay.com/photo/2016/03/31/17/33/account-1293744_960_720.png';

const UserHeader = ({ user }) => (
  <div style={headerStyle}>
    <img style={imageStyle} src={user.image || defaultImageSrc}/>
    <h3>{user.name}</h3>
  </div>
);

export default UserHeader;
