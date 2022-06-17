import React from 'react';
import icons from '../../utils/icons';

const ImgIcon = ({ type, className, size }) => {
  return (
    <img
      src={icons[type].src}
      alt={icons[type].alt}
      className={`img ${size} ${className}`}
    />
  );
};

export default ImgIcon;
