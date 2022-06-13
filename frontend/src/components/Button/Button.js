import React from 'react';

/*
-- the type prop is set for the forms only, for now.
-- type: 'login' || 'join' || 'guest'
-- size: 'sm' || 'md' ||  'lg'
*/

const Button = ({ children, onClick, type, size }) => {
  return (
    <button
      className={`btn ${type} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
