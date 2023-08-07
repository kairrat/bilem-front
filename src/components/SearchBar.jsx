import React from 'react';
import search from '../assets/icons/search.svg'
import { useTranslation } from 'react-i18next';
import Button from './Button';

const SearchBar = () => {
    const {t} = useTranslation()
  return (
    <div className="flex items-center justify-center py-4 ">
      <div className="flex items-center w-auto bg-gray-100 h-16  shadow-lg">
        <div className="flex items-center px-4">
          <button className="py-2 px-4 text-gray-800 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            {t('category')}
          </button>
        </div>
        <div className="flex items-center ml-2">
        <div className="relative">
      <input
        type="text"
        className="w-96 py-2 pl-10 pr-2 ml-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder={t('name_of_courses')}
      />
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <img src={search} alt="" />
      </div>
    </div>
        </div>
        <div className="flex items-center ml-16">
          <select className="py-2 pr-4 text-gray-800 bg-gray-100 border-none rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>{t('study_lang')}</option>
            <option>Русский</option>
            <option>Кыргызский</option> 
          </select>
   
          <Button text={t('search')} className='font-bold py-2 px-4 text-white  mx-8 rounded-2xl'>   </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
