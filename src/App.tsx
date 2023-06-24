import React from 'react';

import { Route, Routes,} from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Reset from './pages/Reset';
import ResetCode from './pages/ResetCode';
import ResetPassword from './pages/ResetPassword';

const NotFound = () => (<>Page not found</>);


function App() {
  return (
    <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/reset' element={<Reset/>} />
              <Route path='/reset/resetCode' element={<ResetCode/>} />
              <Route path='/reset/resetCode/resetPassword' element={<ResetPassword/>} />





              <Route path='/*' element={<NotFound/>} />





    </Routes>

  );
}

export default App;
