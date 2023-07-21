import React, { useState } from 'react'
import logo from '../assets/images/left_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {toast } from "react-toastify";

import CustomInput from '../components/Input'
import Button from '../components/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { activateUser, registerUser } from '../api/auth'


const Register = () => {
    let [step,setStep] = useState(1)
    const {t} = useTranslation();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const initialValues = {
      username: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    
      const validationSchema = yup.object().shape({
        username: yup.string().required(t('field_required')),
        email: yup.string().email(t('right_email')).required(t('field_required')),
        password: yup.string().min(8, t('min_length')).required(t('field_required')),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], t('passwords_not_equal'))
          .required(t('field_required')),
      });

      const [code, setCode] = useState('');

      const handleInputChange = (event, index) => {
        const { value } = event.target;
        if (!isNaN(value)) {
          const updatedCode = code.slice(0, index) + value + code.slice(index + 1);
          setCode(updatedCode);
        }
      };
    
      const handleActivate = () => {
        const data = {
          username : username,
          email : email,
          code : code,
        }
        console.log(JSON.stringify(data))
        dispatch(activateUser(data)).then((res) => {
          if(res.meta.requestStatus === "fulfilled"){
            toast.success(t('register_succ'), {
              autoClose: 1000, 
              onClose: () => {

              },
            });  
          }
          else {
            toast.error(t('register_err'), {
              autoClose: 1000, 
              onClose: () => {
              },
            });
          }
              })
        .catch((error) => {
       

          console.log(error);
        });
        



      }
      const handleSubmit = (data) => {
        console.log(JSON.stringify(data));

        const { username, email, password} = data;

        setUsername(username);
        setEmail(email);
        dispatch(registerUser(data))
        .then((res) => {
          if(res.meta.requestStatus === "fulfilled"){
            navigate('/');
          }
          else {
            toast.error(t('register_err'), {
              autoClose: 1000, 
              onClose: () => {
                navigate('/register');
              },
            });
          }
              })
        .catch((error) => {
       

          console.log(error);
        });

   

        
      }
  return (
    <div>
      {step === 1 ?   <div>
        <div className="py-6">
  <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl">
  <div className="flex justify-center items-center lg:w-1/2 bg-cover" style={{backgroundImage: `url(${logo})`}}></div>


        <div className="w-full p-8 lg:w-1/2 mt-20">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">{t('welcome')}</h2>
          
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="mt-4">
     
            <div className="mt-4">
            <Field
                    type="text"
                    id="username"
                    name="username"
                    component={CustomInput}
                 
                    label={t('your_name')}
                    placeholder={t('name')}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />            </div>
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
            <div className="mt-4 relative">
            <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    component={CustomInput}

                    label={t('repeat_password')}
                    placeholder="********"                  />
                  <ErrorMessage name="confirmPassword" component="span" className="text-red-500" />   
               
            </div>
            <div className='flex justify-start mt-4'>
                    <input type="checkbox" name="swoosh" id="swoosh" />
                    <label className='ml-2.5' htmlFor="swoosh">{t('remember_me')}</label>

                </div>
            <div className="mt-8">
                <Button type='submit' className=' font-bold py-2 px-4 w-full rounded-xl' text={t('new_register')} />
            </div>
            </Form>
            </Formik>

            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/3 md:w-1/3"></span>
                <span className="text-xs text-gray-500 uppercase">или</span>
                <span className="border-b w-1/3 md:w-1/3"></span>

            </div>
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                    </svg>
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">{t('register_google')}</h1>
            </a>

            <div className='flex justify-center mt-10'>
            <p>{t('already_register')}</p>
            <Link to={'/login'} className='text-pink-800'>{t('login')}</Link>
            </div>
        </div>
    </div>
</div>
    </div> : (
         <div>
         <div className="py-6">
   <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
   <div className="flex justify-center items-center lg:w-1/2 bg-cover" style={{backgroundImage: `url(${logo})`}}></div>
 
 
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
                 <Link to={'resetPassword'}> 
                 <Button onClick={ () => handleActivate()} className=' py-2 px-4 w-full rounded-xl' text={t('confirm')} />
 
                 </Link>
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
    )}
    </div>
  
  )
}

export default Register