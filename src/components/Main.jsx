import React from 'react';
import mainImg from '../assets/images/mainImage.png'
import mainImg2 from '../assets/images/mainImage2.png'
import { useTranslation } from 'react-i18next';
import Button from './Button';



const MainSection = () => {
    const { t } = useTranslation();
  return (
    <div className="container mx-auto mt-20 mb-32">
      <div className="flex">
        <div className="w-1/2">
          <div className="relative">
            <img
              src={mainImg}
              alt="images"
              className="h-72 w-94"
            />
            <img
              src={mainImg2}
              alt="secondImage"
              className="h-72 w-94 absolute top-[-60px] right-[-15px]"
            />
          </div>
        </div>
        <div className="w-1/2 ml-20">
          <h1 className="text-5xl text-gray-700 font-bold mb-4">
            {t('main_title')}
          </h1>
          <p className="text-lg text-gray-500">
            {t('main_subtitle')}
            <br />
            {t('main_subtitle2')}
          </p>

          <Button className='rounded-xl px-4 py-2 mt-4 text-white' text= {t("start_study")}/>
        </div>
      </div>
    </div>
  );
};

export default MainSection;









