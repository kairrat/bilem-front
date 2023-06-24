import React from 'react'
import logo from '../assets/images/left_logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const ResetCode = () => {

    const { t } = useTranslation()
  return (
    <div>
        <div class="py-6">
  <div class="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
  <div className="flex justify-center items-center lg:w-1/2 bg-cover" style={{backgroundImage: `url(${logo})`}}></div>


        <div class="w-full p-8 lg:w-1/2 mt-40">
            <h2 class="text-4xl font-bold text-black text-center w-6/12 mx-auto  ">{t('enter_code')}</h2>
            <p className='text-xs font-semibold text-gray-500 text-center w-6/12 mt-5 mx-auto'>{t('send_code')}</p>
     
        
            <div class=" flex mt-4 mx-auto justify-center" >
            <input
  className="flex w-12 h-12 justify-center mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/>  
<input
  className="flex w-12 h-12 justify-center  mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/>
<input
  className="flex w-12 h-12 justify-center  mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/>
<input
  className="flex w-12 h-12 justify-center mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/>           <input
  className="flex w-12 h-12 justify-center mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/>           <input
  className="flex w-12 h-12 justify-center mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
  style={{
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  }}
  type="text"
/> 
         </div>

         <div className='mt-6 flex justify-center'>
            <p>{t('not_have_code')}</p>
            <p className='text-pink-800 cursor-pointer'>{t('send_again_code')}</p>


         </div>
     
         
            <div class="mt-8">
                <Link to={'resetPassword'}> 
                <Button className=' py-2 px-4 w-full rounded-xl' text={t('confirm')} />

                </Link>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/3 md:w-1/3"></span>
                <span class="text-xs text-gray-500 uppercase">{t('or')}</span>
                <span class="border-b w-1/3 md:w-1/3"></span>

            </div>


            <div className='flex justify-center mt-10'>
            <Link to={'/register'} className='text-pink-800 ml-2'> {t('login')}</Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ResetCode