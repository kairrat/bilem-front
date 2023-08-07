import React, { useState } from 'react'
import Header from '../components/Header'
import teach_back from '../assets/images/teach-back.jpg'
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Footer from '../components/Footer';


const Teaching = () => {
let {t} = useTranslation();
const [selectedTeacher, setSelectedTeacher] = useState(2);


const teachers = [
    {
      id: 1,
      name: 'Преподаватель 1',
      course: 'Курс 1',
      image: 'https://via.placeholder.com/150',
      review: 'Отзыв от преподавателя 1...',
    },
    {
      id: 2,
      name: 'Преподаватель 2',
      course: 'Курс 2',
      image: 'https://via.placeholder.com/150',
      review: 'Отзыв от преподавателя 2...',
    },
    {
      id: 3,
      name: 'Преподаватель 3',
      course: 'Курс 3',
      image: 'https://via.placeholder.com/150',
      review: 'Отзыв от преподавателя 3...',
    },
  ];
  const handleTeacherClick = (teacherId) => {
    setSelectedTeacher(teacherId);
  };
  return (
    <>
    <Header/>

    <div className='flex items-center justify-center flex-col  bg-black rounded-3xl mt-[4rem]    overflow-hidden mx-auto max-w-full lg:max-w-6xl h-[45rem]' style={{ backgroundImage: `url(${teach_back})` }}>

     <h1 className='text-[3.5rem] text-white  font-bold'>  {t('create_courses')} </h1>
     <p className='text-white text-xl text-center w-[50%]  font-bold mb-[3.6rem] mt-[5rem]   ' >{t('create_courses_subtitle')}</p>

     <div className=' flex flex-row'>
        <button className='bg-white  text-black rounded-[40px] py-6 px-8    '>{t('create_course')}</button>
        <button className=' bg-transparent text-white rounded-[40px] py-6 px-8 ml-6  border-2 border-white  '>{t('catalog_courses')}</button>


     </div>
    </div>

    <div>

        <h2 className=' font-bold text-4xl flex justify-center my-20   '>{t('what_is')} Bilem?</h2>

        <p className='flex justify-center text-[1.5rem] mb-20 max-w-[35rem] mx-auto text-center font-semibold '>{t('create_courses_subtitle')}</p>


        <div className='flex '>
            <p className='font-semibold text-2xl  mt-10  max-w-[22.5rem] mx-auto '>{t('about_subtitle')}</p>
            <p className='font-semibold text-2xl  max-w-[22.5rem] w-[30%]  mx-auto'>{t('about_subtitle2')}</p>
            <p className='font-semibold text-2xl mt-10  max-w-[22.5rem] mx-auto '>{t('about_subtitle3')}</p>
        </div>
    </div>
    
    <h3 className='  mx-auto  flex justify-center font-bold   text-4xl mt-40 mb-28 '>{t('tarif_studen')}</h3>

    <div className='flex mx-auto justify-center '>



        <div className=' flex  justify-center mr-[2rem] '>

            <div className='w-[28rem] h-[37rem]  rounded-[1.5rem]  border-[#D4D2E3] border-[1px]  '>

                <h4 className=' mt-28 ml-10 mr-16 text-4xl font-bold  '>{t("free_courses")}</h4>

                <ul className="list-none space-y-4 ml-10 mt-20   ">
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center mr-2">
          <svg
            className="w-6 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        All analytics features
      </li>
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center mr-2">
          <svg
            className="w-6 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        Up to 250,000 tracked visits
      </li>
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center mr-2">
          <svg
            className="w-6 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        Normal support
      </li>
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center mr-2">
          <svg
            className="w-6 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        Mobile app
      </li>
    </ul>

    <Button className={'rounded-[2.5rem] px-10 py-6 text-white ml-[1.88rem] mt-[4.8rem] '} text={t('create_course')}/>
            </div>


        </div>
        <div className=' flex  justify-center   rounded-[1.5rem] bg-[#F9E7E7]'>
<div className='w-[46rem] h-[37rem]  rounded-[1.5rem]   border-[#F9E7E7] border-[1px]  '>

    <h4 className=' mt-28 ml-10 mr-16 text-4xl font-bold  '>{t("paid_courses")}</h4>

<div className='flex'>

    <ul className="list-none space-y-4 ml-10 mt-20   ">
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current   "
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
All analytics features
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Up to 250,000 tracked visits
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Normal support
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Mobile app
</li>
</ul>
<ul className="list-none space-y-4 ml-10 mt-20   ">
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
All analytics features
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Up to 250,000 tracked visits
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Normal support
</li>
<li className="flex items-center">
<div className="w-6 h-6 rounded-full bg-[#363C5A] flex items-center justify-center mr-2">
<svg
className="w-6 h-6 text-white fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
  fillRule="evenodd"
  d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L7 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0z"
  clipRule="evenodd"
/>
</svg>
</div>
Mobile app
</li>
</ul>
</div>


<Button className={'rounded-[2.5rem] border-2  border-solid border-[#6B7280] px-10 py-6 ml-[1.88rem]  mt-[4.8rem] bg-white text-black '} text={t('create_course')}/>
</div>
</div>





    </div>
    <div>
      <h4 className='font-bold mx-auto text-center text-3xl mt-16 mb-11'>
        {t("review_teachers")}
      </h4>

      <div className="flex flex-col items-center p-6">
        <div className="text-center mb-4">
          {selectedTeacher ? <p>{teachers[selectedTeacher - 1].review}</p> : <p>Отзывы</p>}
        </div>
        <div className="flex justify-between w-71.25rem">
          <div
            className={`border-t-2 border-gray-400 ${selectedTeacher === 1 ? 'border-red-500' : ''}`}
            style={{ width: '21rem', height: '0.6rem' }}
          ></div>
          <div
            className={`border-t-2 border-gray-400 ${selectedTeacher === 2 ? 'border-red-500' : ''}`}
            style={{ width: '21rem', height: '0.6rem' }}
          ></div>
          <div
            className={`border-t-2 border-gray-400 ${selectedTeacher === 3 ? 'border-red-500' : ''}`}
            style={{ width: '21rem', height: '0.6rem' }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className={`flex items-center cursor-pointer ${
                selectedTeacher === teacher.id ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => handleTeacherClick(teacher.id)}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <p>{teacher.name}</p>
                <p>{teacher.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default Teaching