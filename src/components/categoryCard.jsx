import React from 'react'

const CategoryCard = ({ title, quantity, index }) => {
    return (
      <div className={`py-[2rem] px-[2rem] w-[12rem] h-[9rem] rounded-2xl  bg-pink-800 flex flex-col  `}>
        <p className=' text-center text-white '>{title}</p>
        <p className='text-center text-white  mb-[2rem] '>{quantity}</p>
      </div>
    );
  };
  

export default CategoryCard