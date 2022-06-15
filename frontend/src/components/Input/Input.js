import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { onChange, type, htmlFor, value, name, className, required, pattern } =
    props;
  const formattedLabel = htmlFor[0].toUpperCase() + htmlFor.slice(1);
  return (
    <>
      <label htmlFor={htmlFor} className="label">
        {formattedLabel}
      </label>
      <input
        className={`input ${className}`}
        type={type}
        name={name}
        id={htmlFor}
        value={value}
        onChange={onChange}
        required={required ? true : false}
        pattern={pattern}
      />
    </>
  );
};

export default Input;
