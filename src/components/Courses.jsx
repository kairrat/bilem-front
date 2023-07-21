import React,{useState} from 'react';
import people from '../assets/icons/people.svg'
import star from '../assets/icons/star.svg'

import corses from '../assets/images/course-sample.jpg'
import { useTranslation } from 'react-i18next';
import Card from './Card';


const Courses = () => {
    const {t} = useTranslation();
    const [activeButton, setActiveButton] = useState('popular');
  
    const handleButtonClick = (buttonType) => {
      setActiveButton(buttonType);
    };
  
    return (
      <section className='mx-auto px-24'>
        <h2 className="text-2xl font-bold mb-4 ">{t("free_courses")}</h2>
  
        <div className="flex mb-4">
          <button
            className={`mr-2 ${activeButton === 'popular' ? 'text-pink-800 underline underline-offset-8' : 'text-black'}`}
            onClick={() => handleButtonClick('popular')}
          >
            {t('popular_courses')}
          </button>
          <button
            className={`ml-2 ${activeButton === 'new' ? 'text-pink-800 underline underline-offset-8' : 'text-black'}`}
            onClick={() => handleButtonClick('new')}
          >
            {t('new_courses')}
          </button>
        </div>
  
        <div className="grid grid-cols-3 gap-4 rounded-3xl">
        <div className="p-4   ">
        <Card     image={corses}
        title="Полное руководство по Python 3!"
        subtitle="Udemy"
        price="0"
        studied={t('studied')}
        studiedCount='12000+'
        rating="4.4"/>
          </div>
  
          <div className=" p-4 ">
         <Card     image={corses}
        title="Figma for everyone!"
        subtitle="Figma.com"
        price="0"
        studied={t('studied')}
        studiedCount='1 000 000+'
        rating="4.7"/>
          </div>
  
          <div className=" p-4 ">
          <Card     image={corses}
        title=" Продвинутый  Английский"
        subtitle="English Zone "
        price="0"
        studied={t('studied')}
        studiedCount='4000+'
        rating="4.9"/>
             </div>
  
          <div className=" p-4 ">
          <Card     image={corses}
        title="Тайм-менеджмент"
        subtitle="Брайн Трейси"
        price="0"
        studied={t('studied')}
        studiedCount='2000+'
        rating="4"/>
             </div>
             
  
          <div className=" p-4 ">
          <Card     image={corses}
        title="UX-UI Design"
        subtitle="Ogogo Academy"
        price="0"
        studied={t('studied')}
        studiedCount='4000+'
        rating="4"/>
             </div>
  
          <div className=" p-4 ">
          <Card     image={corses}
        title="Frontend-разработчик"
        subtitle="Udemy"
        price="0"
        studied={t('studied')}
        studiedCount='1000+'
        rating="4.3"/>
                 </div>
                 
        </div>
      </section>
    );
  };
  export default Courses
  

