import React,{useEffect, useState} from 'react';
import corses from '../assets/images/course-sample.jpg'
import { useTranslation } from 'react-i18next';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { getFreeCourses } from '../api/courses';
import Button from './Button';


const Courses = () => {
    const {t} = useTranslation();
    const [activeButton, setActiveButton] = useState('popular');
    const [activeButton2, setActiveButton2] = useState('popular');

    const [freeCoursesData, setFreeCoursesData] = useState([]);
    const [paidCoursesData, setPaidCoursesData] = useState([]);

    let dispatch = useDispatch();
  
    const handleButtonClick = (buttonType) => {
      setActiveButton(buttonType);
    };
    const handleButtonClick2 = (buttonType) => {
      setActiveButton2(buttonType);
    };

    const fetchFreeCourses = (options) => {
      dispatch(getFreeCourses(options))
        .then((data) => {
          setFreeCoursesData(data.payload.data);
          console.log(freeCoursesData);
        })
        .catch((error) => {
        });
    };
    const fetchPaidCourses = (options) => {
      dispatch(getFreeCourses(options))
        .then((data) => {
          setPaidCoursesData(data.payload.data);
          console.log(paidCoursesData);
        })
        .catch((error) => {
        });
    };
  
    useEffect(() => {
      if (activeButton === 'popular') {
        fetchFreeCourses({ isFree: true });
      } else if (activeButton === 'new') {
        fetchFreeCourses({ isFree: true, order: 'desc', orderField: 'createdAt' });
      }

      if (activeButton2 === 'popular') {
        fetchPaidCourses({ isFree: false });
      } else if (activeButton2 === 'new') {
        fetchPaidCourses({ isFree: false, order: 'desc', orderField: 'createdAt' });
      }
    }, [activeButton,activeButton2]);



  
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
          {
            freeCoursesData ? (
              freeCoursesData.map((course, index) => (
                <div className="p-4 cursor-pointer" key={index}>
                  <Card
                    image={course.wallpaper.url}
                    title={course.title}
                    subtitle={course.description}
                    price={course.price}
                    studied={t('studied')}
                    studiedCount={course.studiedCount}
                    rating={course.rating}
                  />
                </div>
                
              ))
            ) : (
              <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
            )
          }
    
        </div>

        <h2 className="text-2xl font-bold mb-4 ">{t("popular_category")}</h2>






        <div className='flex justify-center items-center'>
        <Button className='rounded-xl py-3 px-5 mt-6 ' text={t('watch_all_courses')}/>
        </div>



        <h2 className="text-2xl font-bold mb-4 ">{t("paid_courses")}</h2>
        <div className="flex mb-4">
          <button
            className={`mr-2 ${activeButton2 === 'popular' ? 'text-pink-800 underline underline-offset-8' : 'text-black'}`}
            onClick={() => handleButtonClick2('popular')}
          >
            {t('popular_courses')}
          </button>
          <button
            className={`ml-2 ${activeButton2 === 'new' ? 'text-pink-800 underline underline-offset-8' : 'text-black'}`}
            onClick={() => handleButtonClick2('new')}
          >
            {t('new_courses')}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-3xl">
          {
            paidCoursesData ? (
              paidCoursesData.map((course, index) => (
                <div className="p-4 cursor-pointer" key={index}>
                  <Card
                    image={course.wallpaper.url}
                    title={course.title}
                    subtitle={course.description}
                    price={course.price}
                    studied={t('studied')}
                    studiedCount={course.studiedCount}
                    rating={course.rating}
                  />
                </div>
              ))
            ) : (
              <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
            )
          }

          
        </div>
        <div className='flex justify-center items-center'>
        <Button className='rounded-xl py-3 px-5 mt-6 ' text={t('watch_all_courses')}/>
        </div>
      </section>
    );
  };
  export default Courses
  

