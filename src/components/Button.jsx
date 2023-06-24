import React from 'react'

const Button = ({ text, onClick,className }) => {
    const buttonClassName = `bg-pink-800 hover:bg-pink-900 text-white ${className}`;

    return (
      <button className={buttonClassName} onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button