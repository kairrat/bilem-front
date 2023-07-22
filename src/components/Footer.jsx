import React from 'react';

import inst from '../assets/icons/instagram.svg'
import telegram from '../assets/icons/telegram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black py-8 h-64 mt-[6rem]">
      <div className="flex items-center  justify-center space-x-8 mb-8">
        <Link className="text-white pr-12 ">
        Помощь
        </Link>
        <Link className="text-white pr-12 ">
        О проекте
        </Link>
        <Link className="text-white pr-12 ">
        Связаться с нами

        </Link>
        <Link className="text-white pr-12 ">
        Преподавание
        </Link>
        <Link className="text-white pr-12 ">
        Конфиденциальность
        </Link>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="#" className="text-white pr-12 ">
            <img src={inst} alt="" />
        </a>
        <a href="#" className="text-white pr-12">
            <img src={telegram} alt="" />
        </a>
        <a href="#" className="text-white pr-12 ">
            <img src={whatsapp} alt="" />
        </a>
      </div>
      <p className="text-center text-white">© 2022 Bilem Online. Все права защищены</p>
    </footer>
  );
};

export default Footer;
