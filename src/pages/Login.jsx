import logo from '../assets/images/left_logo.png'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import CustomInput from '../components/Input';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../api/auth';
import { toast } from 'react-toastify';

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { t } = useTranslation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email(t('right_email')).required(t('field_required')),
    password: yup.string().min(8,t('min_length')).required(t('field_required'))
  });

  const handleSubmit = (data) => {
    console.log(JSON.stringify(data));
    const {email, password} = data;
    dispatch(login(data))
    .then((res) => {
      if(res.meta.requestStatus === "fulfilled"){
        toast.success(t('login_succ'), {
            autoClose: 3000, 
            onClose: () => {
              navigate('/');
            },
          });
    }
    else if(res.meta.requestStatus === "rejected") { 
        toast.error(t('login_err'), {
            autoClose: 3000, 
            onClose: () => {
            }        });        
    }

    });
  };

  return (
    <div>
      <div className="py-6">
        <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-full lg:max-w-6xl h-screen">
          <div
            className="flex justify-center items-center lg:w-1/2 bg-contain bg-no-repeat lg:bg-inherit"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>

          <div className="w-full p-8 lg:w-1/2 mt-20">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">{t('return ')}</h2>

            
            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="mt-4">
                <div className="mt-4">
                  <Field
                    type="email"
                    id="email"
                    component={CustomInput}
                    name="email"
                    label={t('your_email')}
                    placeholder="Example@gmail.com"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="mt-4 relative">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    component={CustomInput}

                    label={t('password')}
                    placeholder="********"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
                <div className="mt-4 justify-between">
                  <div className="flex justify-between mt-4">
                    <div>
                      <Field
                        type="checkbox"
                        id="swoosh"
                        name="swoosh"
                        className="mr-2.5"
                      />
                      <label htmlFor="swoosh">{t('remember_me')}</label>
                    </div>

                    <Link className="text-pink-800" to={'/reset'}>
                      {t('forgot_password')}
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    className="py-2 px-4 w-full font-bold rounded-xl"
                    text={t('login')}
                  />
                </div>
              </Form>
            </Formik>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/3 md:w-1/3"></span>
              <span className="text-xs text-gray-500 uppercase">{t('or')}</span>
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
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">{t('continue_google')}</h1>
            </a>
          
       

            <div className="flex justify-center mt-10">
              <p>{t('not_have_acc')}</p>
              <Link to={'/register'} className="text-pink-800">
                {t('register')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;