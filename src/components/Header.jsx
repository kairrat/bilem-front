import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/bilem-small-logo.svg'
import global from '../assets/icons/global.svg'
import i18next from 'i18next';
import { setLanguage } from '../redux/slices/GeneralSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  

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
    <header className="flex items-center justify-between px-24 py-2 text-black">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            {t('courses')}
          </button>
          {isDropdownOpen && (
            <div className="absolute right--20 w-48 bg-black rounded-md shadow-lg">
              <ul className="px-5 py-5">
                <li className="px-4 py-2 hover:bg-gray-200">Математика</li>
                <li className="px-4 py-2 hover:bg-gray-200">Физика</li>
                <li className="px-4 py-2 hover:bg-gray-200">Химия</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Link className="text-black  hover:text-gray-300 focus:outline-none">{t('teaching')}</Link>
        </div>
      </div>

      <div>
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>

      {/* Правая часть */}
      <div className="flex items-center space-x-4">
        <Link to={'/login'} className="text-black hover:text-gray-300 focus:outline-none">
          {t('login')}
        </Link>
        <Link to={'/register'} className="text-black hover:text-gray-300 focus:outline-none">
          {t('register')}
        </Link>
        <div className="relative">
          <div className="flex items-center">
            <img src={global} alt='global' className="h-5 w-5 mr-2" /> {/* Иконка смайлика */}
            <select  id="language"
                        value={language}
                        onChange={handleLanguageChange}  className="text-black bg-transparent focus:outline-none appearance-none pr-8">
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







