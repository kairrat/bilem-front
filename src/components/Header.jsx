import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/bilem-small-logo.svg'
import global from '../assets/icons/global.svg'
import i18next from 'i18next';
import { setLanguage } from '../redux/slices/GeneralSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import defaultImg from '../assets/images/default.jpeg'
import {setLogout } from '../redux/slices/logoutSlice'
import { profile } from '../api/Profile';



const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state) => state.login.user);


  const [showDropdown, setShowDropdown] = useState(false);

  let navigate = useNavigate();
  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  

  let dispatch = useDispatch();
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  const { t } = useTranslation();
  
  const { language } = useSelector(state => state.general);

  const handleLanguageChange = e => {
      dispatch(setLanguage(e.target.value));
  }

  useEffect(() => {
    i18next.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  return (
    <header className="flex items-center justify-between   text-black px-[6.88rem] py-[1.75rem]">
      <div className="flex items-center space-x-4">
        <div className="relative mr-[1.5rem]">
          <button
            className="text-black  hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            {t('courses')}
          </button>
          {isDropdownOpen && (
            <div className="absolute right--20 w-48 bg-white rounded-md shadow-lg z-50">
              <ul className="px-5 py-5">
                <li className="px-4 py-2 hover:bg-gray-200">Математика</li>
                <li className="px-4 py-2 hover:bg-gray-200">Физика</li>
                <li className="px-4 py-2 hover:bg-gray-200">Химия</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Link to={'/teaching'} className="text-black  hover:text-gray-300 focus:outline-none">{t('teaching')}</Link>
        </div>
      </div>

      <div>
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="flex items-center  ">
        {localStorage.getItem('user') ?  (
          <div>
            <img src={defaultImg} alt="default_avatar" className='w-[3rem] h-[3rem] rounded-[50%] cursor-pointer' onClick={handleAvatarClick} />

            {showDropdown && (
            <div className="absolute top-[3rem] right-[13rem] bg-pink-800 text-white rounded shadow border z-50">
              <button onClick={() => {
                                  dispatch(profile())
                                  navigate('/profile')
                                }} className="block px-4 py-2 w-full text-left" >
                {t('profile')}
              </button>
              <button onClick={() => {
                                  dispatch(setLogout())
                                  navigate('/')
                                }}  className="block px-4 py-2 w-full text-left" >
                {t('logout')}
              </button>
            </div>
          )}
          </div>
        ) : (
          <div>
                <div>
        <Link to={'/login'} className="text-black hover:text-gray-300 focus:outline-none">
          {t('login')}
        </Link>
        <Link to={'/register'} className="text-black ml-4 hover:text-gray-300 focus:outline-none">
          {t('register')}
        </Link>
        </div>
          </div>
        )}
    
     
        <div className="">
          <div className="flex items-center pl-[1.75rem]">
            <img src={global} alt='global' className="h-5 w-5 " /> 
            <select  id="language"
                        value={language}
                        onChange={handleLanguageChange}  className="text-black bg-transparent focus:outline-none appearance-none">
              <option id='ru' value="ru">Русский</option>
              <option id='ky' value="ky">Кыргызский</option>
            </select>
          </div>
  
        </div>
      </div>
    </header>
  );
};

export default Header;







