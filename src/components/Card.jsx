
import React from 'react';
import people from '../assets/icons/people.svg'
import star from '../assets/icons/star.svg'

const Card = ({ image, title, subtitle, price, studied,studiedCount, rating }) => {
    return (
        <div className=" p-4 rounded-3xl">
          <img src={image} alt={title} className="w-[19rem] h-[10rem] cursor-pointer    mb-2 rounded-lg" />
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-gray-700 mb-2">{subtitle}</p>
          <div className='flex items-center justify-between px-4 py-8 max-w-[19rem]'>
            <div className="flex items-center text-center">
              <span className="text-pink-800  font-bold">{price} сом</span>
            </div>
            <div className="flex items-center text-center">
              <img src={people} alt="people" className="w-6 h-6" />
              <span className="text-pink-800 ">{studied}:</span>
              <span className="text-gray-700 font-bold">{studiedCount}</span>
            </div>
            <div className='flex items-center text-center'>
              <img src={star} alt="star" className="w-6 h-6" />
              <span className="text-gray-700 font-bold">{rating}</span>
            </div>
          </div>
        </div>
    );
  };
  
  export default Card;
  
 