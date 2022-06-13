import React from 'react';

import icons from '../../util/icons';
import './ImgIcon.scss'

const ImgIcon = ({ type, size, bg }) => {
  return (
    <img
      src={icons[type].src}
      alt={icons[type].alt}
      className={`img ${size} bg-${bg}`}
    />
  );
};

export default ImgIcon;
