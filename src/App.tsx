import React from 'react';

import { Route, Routes,} from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Reset from './pages/Reset';
import ResetCode from './pages/ResetCode';
import ResetPassword from './pages/ResetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPage from './pages/UserPage';
import Teaching from './pages/Teaching';


const NotFound = () => (<>Page not found</>);


function App() {
  return (
    <div className='' >

    <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/profile' element={<UserPage/>} />
              <Route path='/teaching' element={<Teaching/>} />


              <Route path='/login' element={<Login/>} />
              <Route path='/reset' element={<Reset/>} />
              <Route path='/reset/resetCode' element={<ResetCode/>} />
              <Route path='/reset/resetCode/resetPassword/:email' element={<ResetPassword/>} />





              <Route path='/*' element={<NotFound/>} />





    </Routes>
    <ToastContainer/>

    </div>


  );
}

export default App;
