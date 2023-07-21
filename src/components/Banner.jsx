import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t } = useTranslation();
    return (
<div className="flex items-center px-24  justify-between h-16 bg-gradient-to-r from-purple-500 to-green-400 relative">
  <div className=" text-white">
    <p>{t('make_your_courses')}</p>
  </div>
  <div className="flex items-center mr-6 text-white">
    <p>{t('create_course')}</p>
    <svg className="ml-2 w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
    <span className='absolute top-0 right-3 text-2xl cursor-pointer'>x</span>
  </div>
  

</div>


    )
}
export default Banner