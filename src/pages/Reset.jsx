import React from 'react'
import logo from '../assets/images/left_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import CustomInput from '../components/Input'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { resetAsync } from '../api/auth'
import { toast } from 'react-toastify'

const Reset = () => {
    const { t } = useTranslation()
 

    const initialValues = {
        email: '',
    
      };
    
      const validationSchema = yup.object().shape({
        email: yup.string().email(t('right_email')).required(t('field_required')),
    
      });

      let dispatch = useDispatch();
      let navigate = useNavigate();
      

      const handleSubmit = (data) => {
        dispatch(resetAsync(data)).then((res) => {
          if(res.meta.requestStatus === "fulfilled") {
            localStorage.setItem('email', data.email);
    
            navigate('/reset/resetCode')
          }
          else{
            toast.error(t('err'), {
              autoClose: 2000, 
              onClose: () => {
              }        });      
            
          }
        })
       

      };

    
    
  return (
    <div>
        <div className="py-6">
  <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
  <div className="flex justify-center items-center lg:w-1/2 bg-cover" style={{backgroundImage: `url(${logo})`}}></div>

    <Formik    initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>

        <div className="w-full p-8 lg:w-1/2 mt-40">
            <h2 className="text-4xl font-bold text-black text-center w-6/12 mx-auto  ">{t('reset_password')}</h2>
            <p className='text-xs font-semibold text-gray-500 text-center w-6/12 mt-5 mx-auto'>{t('send_email')}</p>
            
            
            <Form className='mt-4'>

            <div className="mt-4">
            <Field
                    type="email"
                    id="email"
                    name="email"
                    component={CustomInput}
                    label={t('your_email')}
                    placeholder="Example@gmail.com"                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />   
            </div>

         
            <div className="mt-8">
                <Button type="submit" className='font-bold py-2 px-4 w-full rounded-xl' text={t('recover_password')} />
            </div>
            </Form>


            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/3 md:w-1/3"></span>
                <span className="text-xs text-gray-500 uppercase">{t('or')}</span>
                <span className="border-b w-1/3 md:w-1/3"></span>

            </div>


            <div className='flex justify-center mt-10'>
            <p> </p>
            <Link to={'/register'} className='text-pink-800 ml-2'> {t('login')}</Link>
            </div>
        </div>
        </Formik>

    </div>
</div>
    </div>
  )
}

export default Reset