import React, { useState } from 'react';
import eye from '../assets/icons/eye.svg';
import noEye from '../assets/icons/eye-slash.svg';

const CustomInput = ({ type, field, form: { touched, errors},  label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
<>

      <label htmlFor={field.name}>{label}</label>
      <input id={field.name} {...field} {...props}  className="placeholder: text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl	 py-2 px-4 block w-full appearance-none" type={showPassword ? 'text' : type} {...props} />
      {type === 'password' && (
        <img
          onClick={handleTogglePassword}
          className='absolute top-8 right-4'
          src={showPassword ? noEye : eye}
          alt={showPassword ? 'unseen' : 'seen'}
        />
      )}
      
      
      </>
      
  );
};

export default CustomInput;
