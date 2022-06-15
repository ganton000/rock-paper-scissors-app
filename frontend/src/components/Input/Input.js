import React from 'react';
import './Input.scss';

const Input = ({name, ...otherProps}) => {

  const formattedLabel = name[0].toUpperCase() + name.slice(1);

  return (
    <>
      <label htmlFor={name} className="label">
        {formattedLabel}
      </label>
      <input
        {...otherProps}
        className={`input ${name}`}

      />
    </>
  );
};

export default Input;
