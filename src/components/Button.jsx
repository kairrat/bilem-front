import React from 'react'

const Button = ({ text, onClick,className }) => {
    const buttonClassName = `bg-pink-800  hover:bg-pink-900  ${className}`;

    return (
      <button className={buttonClassName} onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button