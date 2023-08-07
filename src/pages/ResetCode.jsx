import React, { useState } from 'react'
import logo from '../assets/images/left_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { resetCodeAsync } from '../api/auth'
import { toast } from 'react-toastify'

const ResetCode = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();



  const [code, setCode] = useState('');

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (!isNaN(value)) {
      const updatedCode = code.slice(0, index) + value + code.slice(index + 1);
      setCode(updatedCode);
    }
  };


  const handleSubmit = () => {
    let data  = {
      email : localStorage.getItem('email'),
      code : code,
    }

    dispatch(resetCodeAsync(data)).then((res) => {
      if(res.meta.requestStatus === "fulfilled") {
        navigate(`/reset/resetCode/resetPassword/:${localStorage.getItem('email')}`)
      }
      else{
        toast.error(t('err'), {
          autoClose: 2000, 
          onClose: () => {
          }        });      
        
      }
    })

  }

    const { t } = useTranslation()
  return (
    <div>
        <div className="py-6">
  <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
  <div className="flex justify-center items-center lg:w-1/2 bg-contain bg-no-repeat lg:bg-inherit" style={{backgroundImage: `url(${logo})`}}></div>


        <div className="w-full p-8 lg:w-1/2 mt-40">
            <h2 className="text-4xl font-bold text-black text-center w-6/12 mx-auto  ">{t('enter_code')}</h2>
            <p className='text-xs font-semibold text-gray-500 text-center w-6/12 mt-5 mx-auto'>{t('send_code')}</p>
     
        
            <div className=" flex mt-4 mx-auto justify-center" >
            {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          className="flex w-12 h-12 justify-center mr-2 items-center rounded-lg py-2 px-3.5 text-3xl border border-gray-300 bg-white shadow-sm"
          style={{
            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
          }}
          type="text"
          maxLength="1"
          onChange={(event) => handleInputChange(event, index)}
        />
      ))}
         </div>

         <div className='mt-6 flex justify-center'>
            <p>{t('not_have_code')}</p>
            <p className='text-pink-800 cursor-pointer'>{t('send_again_code')}</p>


         </div>
     
         
            <div className="mt-8">
                <Button onClick={()=> handleSubmit()} type='submit' className=' py-2 px-4 w-full rounded-xl' text={t('confirm')} />

            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/3 md:w-1/3"></span>
                <span className="text-xs text-gray-500 uppercase">{t('or')}</span>
                <span className="border-b w-1/3 md:w-1/3"></span>

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