import React from 'react';
import './Input.scss'
/*
  -- size: 'sm' || 'md' || 'lg'
 */
const Input = ({ onChange, type, value, name, size, id }) => {
  return (
    <input
      className={`input ${size}`}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
