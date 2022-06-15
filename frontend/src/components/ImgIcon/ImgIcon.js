import React from 'react';

import icons from '../../utils/icons';

const ImgIcon = ({ type, className }) => {
  return (
    <img
      src={icons[type].src}
      alt={icons[type].alt}
      className={`img ${className}`}
    />
  );
};

export default ImgIcon;
