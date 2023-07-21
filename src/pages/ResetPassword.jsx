import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CustomInput from '../components/Input'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/left_logo.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const ResetPassword = () => {
    const { t } = useTranslation()
    const initialValues = {
        password: '',
        confirmPassword: '',
      };
    
      const validationSchema = yup.object().shape({
        password: yup.string().min(8, t('min_length')).required(t('field_required')),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], t('passwords_not_equal'))
          .required(t('field_required')),
      });
    
      const handleSubmit = (values) => {
        console.log(values);
      };

    return (
        <div>
            <div className="py-6">
      <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
      <div className="flex justify-center items-center lg:w-1/2 bg-cover" style={{backgroundImage: `url(${logo})`}}></div>
    
    <Formik
        initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>

            <div className="w-full p-8 lg:w-1/2 mt-20">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">{t('recovery_password')}</h2>
              
         
            <Form>

                <div className="mt-4 relative">
                   
                    <Field
                    type="password"
                    id="password"
                    name="password"
                    component={CustomInput}
                    label={t('password')}
                    placeholder="********"                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />  
                </div>
                <div className="mt-4  relative">                   
                   <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    component={CustomInput}
                    label={t('repeat_password')}
                    placeholder="********"                  />
                  <ErrorMessage name="confirmPassword" component="span" className="text-red-500" />   
               </div>
              
             
                <div className="mt-8">
                    <Button className='py-2 px-4 w-full font-bold rounded-xl' text={t('recover_password')}/>
                </div>
                </Form>

                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/3 md:w-1/3"></span>
                    <span className="text-xs text-gray-500 uppercase">{t('or')}</span>
                    <span className="border-b w-1/3 md:w-1/3"></span>
    
                </div>
              
    
                <div className='flex justify-center mt-10'>
                <Link to={'/login'} className='text-pink-800 ml-1'>{t('login')}</Link>
                </div>
            </div>
            </Formik>

        </div>
    </div>
        </div>
      )

}

export default ResetPassword